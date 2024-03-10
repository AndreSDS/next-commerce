import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '@/types/ProductType'

type Store = {
  cart: Product[]
  addProduct: (product: Product) => void
  removeProduct: (id: string) => void
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
}

export const useCartStore = create<Store>()(persist(
  (set) => ({
    cart: [],
    addProduct: (product) => set((state) => {
      const productIndex = state.cart.findIndex((item) => item.id === product.id)
      if (productIndex !== -1) {
        const newCart = [...state.cart]
        newCart[productIndex].quantity = (newCart[productIndex].quantity || 1) + 1
        return ({ cart: newCart })
      }
      return ({ cart: [...state.cart, product] })
    }),
    removeProduct: (id) => set((state) => ({ cart: state.cart.filter((product) => product.id !== id) })),
    increaseQuantity: (id) => set((state) => ({
      cart: state.cart.map((product) => product.id === id ? { ...product, quantity: product.quantity && product.quantity + 1 } : product)
    })),
    decreaseQuantity: (id) => set((state) => ({
      cart: state.cart.map((product) => product.id === id ? { ...product, quantity: product.quantity && product.quantity - 1 } : product)
    }))
  }),
  {
    name: 'cart',
  }
))


