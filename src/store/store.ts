import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '@/types/ProductType'

type Store = {
  cart: Product[]
  addProduct: (product: Product) => void
  removeProduct: (id: string) => void
}

export const useCartStore = create<Store>()(persist(
  (set) => ({
    cart: [],
    addProduct: (product) => set((state) => ({ cart: [...state.cart, product] })),
    removeProduct: (id) => set((state) => ({ cart: state.cart.filter((product) => product.id !== id) })),
  }),
  {
    name: 'cart',
  }
))


