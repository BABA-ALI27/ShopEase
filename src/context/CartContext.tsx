import React, { createContext, useContext, useMemo, useReducer } from "react";
import { Product } from "../data/products";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD_ITEM"; product: Product; quantity: number }
  | { type: "REMOVE_ITEM"; productId: string }
  | { type: "INCREASE"; productId: string }
  | { type: "DECREASE"; productId: string };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(
        (item) => item.product.id === action.product.id
      );
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.product.id === action.product.id
              ? { ...item, quantity: item.quantity + action.quantity }
              : item
          ),
        };
      }
      return {
        items: [...state.items, { product: action.product, quantity: action.quantity }],
      };
    }
    case "REMOVE_ITEM":
      return { items: state.items.filter((item) => item.product.id !== action.productId) };
    case "INCREASE":
      return {
        items: state.items.map((item) =>
          item.product.id === action.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREASE":
      return {
        items: state.items
          .map((item) =>
            item.product.id === action.productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
    default:
      return state;
  }
}

type CartContextValue = {
  items: CartItem[];
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: string) => void;
  increase: (productId: string) => void;
  decrease: (productId: string) => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const value = useMemo<CartContextValue>(() => {
    const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = state.items.reduce(
      (sum, item) => sum + item.quantity * item.product.price,
      0
    );
    return {
      items: state.items,
      addItem: (product, quantity) => dispatch({ type: "ADD_ITEM", product, quantity }),
      removeItem: (productId) => dispatch({ type: "REMOVE_ITEM", productId }),
      increase: (productId) => dispatch({ type: "INCREASE", productId }),
      decrease: (productId) => dispatch({ type: "DECREASE", productId }),
      totalItems,
      totalPrice,
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
