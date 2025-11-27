import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartStore, CartItem, Product } from './types';

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      addItem: (product: Product, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.id === product.id);
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
              isOpen: true, // Open cart on add
            };
          }
          return {
            items: [...state.items, { ...product, quantity }],
            isOpen: true,
          };
        });
      },
      removeItem: (id: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },
      updateQuantity: (id: string, quantity: number) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
          ),
        }));
      },
      clearCart: () => set({ items: [] }),
      cartTotal: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'arredo-cart-storage',
    }
  )
);