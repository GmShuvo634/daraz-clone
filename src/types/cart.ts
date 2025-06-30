export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  selectedVariant?: string;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: any, quantity?: number, variant?: string) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  clearCart: () => void;
}