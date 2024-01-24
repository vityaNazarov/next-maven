import i18next from "i18next";
import { toast } from "react-toastify";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const INITIAL_STATE = {
  products: [],
  totalItems: 0,
};

export const useCartStore = create(
  persist(
    (set, get) => ({
      products: INITIAL_STATE.products,
      totalItems: INITIAL_STATE.totalItems,
      addToCart(item) {
        set((state) => ({
          products: [...state.products, item],
          totalItems: state.totalItems + 1,
        }));
      },
      removeFromCart(itemId) {
        set((state) => ({
          products: state.products.filter((product) => product.id !== itemId),
          totalItems: state.totalItems - 1,
        }));

        toast.error(
          i18next.language === "ua"
            ? "Продукт видалено з кошика!"
            : "Product removed from cart!",
          { autoClose: 1500 }
        );
      },
      clearCart: () => set({ totalItems: 0, products: [] }),
    }),
    {
      name: "cart",
    }
  )
);
