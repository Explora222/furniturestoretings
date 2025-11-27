export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  sku: string;
  isNew?: boolean;
  dimensions?: string;
  material?: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
}

export interface CartStore {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  toggleCart: () => void;
  cartTotal: () => number;
}