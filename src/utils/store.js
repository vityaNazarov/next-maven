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
        // localStorage.setItem(`addedToCart_${item.id}`, "true");
      },
      removeFromCart(itemId) {
        set((state) => ({
          products: state.products.filter((product) => product.id !== itemId),
          totalItems: state.totalItems - 1,
        }));
        // Получаем текущее значение из localStorage
        // const currentLocalStorageValue = localStorage.getItem("false");
        // Разбираем текущее значение (если оно JSON)
        // const currentValueObject = JSON.parse(currentLocalStorageValue);
        // Фильтруем объект, удаляя элемент по ключу itemId
        // const updatedValueObject = Object.fromEntries(
        //   Object.entries(currentValueObject).filter(
        //     ([key, value]) => key !== itemId
        //   )
        // );
        // Записываем обновленное значение в localStorage
        // localStorage.setItem("false", JSON.stringify(updatedValueObject));
        // localStorage.removeItem(`addedToCart_${itemId}`);

        toast.error(
          i18next.language === "ua"
            ? "Продукт видалено з кошика!"
            : "Product removed from cart!",
          { autoClose: 1500 }
        );
      },
      removeProductLocaleStorage(itemId) {
        set((state) => ({
          products: state.products.filter((product) => product.id !== itemId),
          totalItems: state.totalItems - 1,
        }));
        // Получаем текущее значение из localStorage
        // const currentLocalStorageValue = localStorage.getItem("false");
        // Разбираем текущее значение (если оно JSON)
        // const currentValueObject = JSON.parse(currentLocalStorageValue);
        // Фильтруем объект, удаляя элемент по ключу itemId
        // const updatedValueObject = Object.fromEntries(
        //   Object.entries(currentValueObject).filter(
        //     ([key, value]) => key !== itemId
        //   )
        // );
        // Записываем обновленное значение в localStorage
        // localStorage.setItem("false", JSON.stringify(updatedValueObject));
        // localStorage.removeItem(`addedToCart_${itemId}`);
      },
      clearCart() {
        // const storedProducts = JSON.parse(localStorage.getItem("cart")) || [];
        storedProducts.forEach((product) => {
          useCartStore.getState().removeProductLocaleStorage(product.id);
        });
        // localStorage.removeItem("cart");
      },
    }),
    {
      name: "cart",
      // getStorage: () => localStorage,
    }
  )
);
