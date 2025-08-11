"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Trash2, Plus, Minus, ShoppingBag, CreditCard, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

interface CartItem {
  id: string
  order_id: string
  item_type: "service" | "formation"
  item_id: string
  title: string
  price: number
  image_url: string | null
  quantity: number
  total_price: number
  description: string
  start_date?: string | null
  duration_weeks?: number
  level?: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    fetchCartItems()
  }, [])

  const fetchCartItems = async () => {
    try {
      setLoading(true)
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        setLoading(false)
        return
      }

      const { data: orders, error: ordersError } = await supabase
        .from('orders')
        .select('id')
        .eq('user_id', user.id)
        .eq('status', 'pending')
        .in('order_category', ['formation', 'service', 'mixed'])

      if (ordersError) {
        console.error('Error fetching orders:', ordersError)
        setLoading(false)
        return
      }

      if (!orders || orders.length === 0) {
        setCartItems([])
        setLoading(false)
        return
      }

      const orderIds = orders.map(order => order.id)

      const { data: items, error: itemsError } = await supabase
        .from('order_items')
        .select(`
          id,
          order_id,
          item_type,
          item_id,
          item_title,
          quantity,
          unit_price,
          total_price
        `)
        .in('order_id', orderIds)

      if (itemsError) {
        console.error('Error fetching items:', itemsError)
        setLoading(false)
        return
      }

      // Separate formations and services
      const formationItems = items?.filter(item => item.item_type === 'formation') || []
      const serviceItems = items?.filter(item => item.item_type === 'service') || []

      // Fetch formation details
      const formationIds = formationItems.map(item => item.item_id)
      const { data: formations, error: formationsError } = await supabase
        .from('formations')
        .select('id, title, price, image_url, description, start_date, duration_weeks, level')
        .in('id', formationIds)

      if (formationsError) {
        console.error('Error fetching formations:', formationsError)
        setLoading(false)
        return
      }

      // Fetch service details
      const serviceIds = serviceItems.map(item => item.item_id)
      const { data: services, error: servicesError } = await supabase
        .from('services')
        .select('id, title, base_price, image_url, description')
        .in('id', serviceIds)

      if (servicesError) {
        console.error('Error fetching services:', servicesError)
        setLoading(false)
        return
      }

      // Map formation items
      const mappedFormationItems = formationItems.map(item => {
        const formation = formations?.find(f => f.id === item.item_id)
        return formation ? {
          id: formation.id,
          order_id: item.order_id,
          item_type: 'formation' as const,
          item_id: formation.id,
          title: formation.title,
          price: formation.price,
          image_url: formation.image_url,
          quantity: item.quantity,
          total_price: item.total_price,
          description: formation.description || '',
          start_date: formation.start_date,
          duration_weeks: formation.duration_weeks,
          level: formation.level
        } : null
      }).filter(Boolean) as CartItem[]

      // Map service items
      const mappedServiceItems = serviceItems.map(item => {
        const service = services?.find(s => s.id === item.item_id)
        return service ? {
          id: service.id,
          order_id: item.order_id,
          item_type: 'service' as const,
          item_id: service.id,
          title: service.title,
          price: service.base_price,
          image_url: service.image_url,
          quantity: item.quantity,
          total_price: item.total_price,
          description: service.description || ''
        } : null
      }).filter(Boolean) as CartItem[]

      setCartItems([...mappedFormationItems, ...mappedServiceItems])
    } catch (error) {
      console.error('Error:', error)
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors du chargement du panier",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const updateQuantity = async (itemId: string, itemType: string, newQuantity: number) => {
    try {
      setIsSubmitting(true)
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/auth/login')
        return
      }

      if (newQuantity <= 0) {
        const rpcName = itemType === 'formation' ? 'remove_formation_from_cart' : 'remove_service_from_cart'
        const params: any = {
          p_user_id: user.id
        }
        
        if (itemType === 'formation') {
          params.p_formation_id = itemId
        } else {
          params.p_service_id = itemId
        }

        const { error } = await supabase.rpc(rpcName, params)
        if (error) throw error
      } else {
        const rpcName = itemType === 'formation' ? 'update_formation_quantity' : 'update_service_quantity'
        const params: any = {
          p_user_id: user.id,
          p_new_quantity: newQuantity
        }
        if (itemType === 'formation') params.p_formation_id = itemId
        else params.p_service_id = itemId

        const { error } = await supabase.rpc(rpcName, params)
        if (error) throw error
      }

      await fetchCartItems()
      toast({
        title: "Panier mis à jour",
        description: "La quantité a été mise à jour avec succès",
      })
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message || "Impossible de mettre à jour la quantité",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const removeItem = async (itemId: string, itemType: string) => {
    try {
      setIsSubmitting(true)
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/auth/login')
        return
      }

      const rpcName = itemType === 'formation' ? 'remove_formation_from_cart' : 'remove_service_from_cart'
      const params: any = {
        p_user_id: user.id
      }
      
      if (itemType === 'formation') {
        params.p_formation_id = itemId
      } else {
        params.p_service_id = itemId
      }

      const { error } = await supabase.rpc(rpcName, params)
      if (error) throw error

      await fetchCartItems()
      toast({
        title: "Article retiré",
        description: "L'article a été retiré de votre panier",
      })
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message || "Impossible de retirer l'article",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR").format(price) + " FCFA"
  }

  const formatDate = (date: string | null | undefined) => {
    if (!date) return "Date à définir"
    return new Date(date).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.total_price, 0)
  const tax = subtotal * 0.1925 // TVA Cameroun
  const total = subtotal + tax

  if (loading) {
    return (
      <main className="pt-20 min-h-screen bg-[#F5F6FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <Loader2 className="w-12 h-12 text-[#0A84FF] mx-auto mb-4 animate-spin" />
            <p className="font-open-sans text-lg text-gray-600">Chargement de votre panier...</p>
          </div>
        </div>
      </main>
    )
  }

  if (cartItems.length === 0) {
    return (
      <main className="pt-20 min-h-screen bg-[#F5F6FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="w-24 h-24 text-gray-400 mx-auto mb-8" />
            <h1 className="font-montserrat font-bold text-3xl text-[#121212] mb-4">Votre panier est vide</h1>
            <p className="font-open-sans text-lg text-gray-600 mb-8">
              Découvrez nos formations et services pour commencer votre transformation digitale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/formations">
                <Button className="btn-primary">Voir les formations</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline">Découvrir nos services</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-20 min-h-screen bg-[#F5F6FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="font-montserrat font-bold text-3xl md:text-4xl text-[#121212] mb-2">Mon Panier</h1>
          <p className="font-open-sans text-gray-600">
            {cartItems.length} article{cartItems.length > 1 ? "s" : ""} dans votre panier
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Articles du panier */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={item.image_url || "/placeholder.svg"}
                        alt={item.title}
                        width={150}
                        height={100}
                        className="w-full md:w-36 h-24 object-cover rounded-lg"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <Badge className={`mb-2 ${item.item_type === "formation" ? "bg-[#0A84FF]" : "bg-[#FF3B30]"}`}>
                            {item.item_type === "formation" ? "Formation" : "Service"}
                          </Badge>
                          <h3 className="font-poppins font-semibold text-lg text-[#121212]">{item.title}</h3>
                          <p className="font-open-sans text-sm text-gray-600 mt-1">{item.description}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id, item.item_type)}
                          disabled={isSubmitting}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.item_type, item.quantity - 1)}
                            disabled={isSubmitting || item.quantity <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="font-poppins font-medium text-lg px-3">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.item_type, item.quantity + 1)}
                            disabled={isSubmitting}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="text-right">
                          <p className="font-poppins font-bold text-xl text-[#0A84FF]">
                            {formatPrice(item.total_price)}
                          </p>
                          <p className="font-open-sans text-sm text-gray-500">{formatPrice(item.price)} / unité</p>
                        </div>
                      </div>

                      {item.item_type === "formation" && (
                        <div className="mt-2 text-sm text-gray-600">
                          <p>Début: {formatDate(item.start_date)} • {item.duration_weeks} semaines • Niveau {item.level}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Résumé de commande */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="font-poppins font-bold text-xl">Résumé de la commande</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-open-sans text-gray-600">Sous-total</span>
                  <span className="font-poppins font-medium">{formatPrice(subtotal)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-open-sans text-gray-600">TVA (19.25%)</span>
                  <span className="font-poppins font-medium">{formatPrice(tax)}</span>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="font-poppins font-bold text-lg">Total</span>
                    <span className="font-poppins font-bold text-xl text-[#0A84FF]">{formatPrice(total)}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <Button 
                    className="btn-primary w-full text-lg py-3"
                    disabled={isSubmitting}
                    onClick={() => router.push('/checkout')}
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Procéder au paiement
                  </Button>

                  <Link href="/formations" className="block">
                    <Button variant="outline" className="w-full bg-transparent">
                      Continuer mes achats
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
