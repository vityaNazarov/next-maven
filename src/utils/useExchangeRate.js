import { useState, useEffect } from "react";

export function useExchangeRate() {
  const [rate, setRate] = useState(49.5); // Дефолтный курс
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const response = await fetch("/api/exchange-rate", {
          cache: "no-store",
        });
        if (response.ok) {
          const data = await response.json();
          setRate(data.rate);
        }
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
        // Оставляем дефолтный курс при ошибке
      } finally {
        setLoading(false);
      }
    };

    fetchRate();
  }, []);

  // Функция для форматирования числа с пробелами для тысяч
  const formatPrice = (price) => {
    return price.toLocaleString("ua-UA").replace(/,/g, " ");
  };

  // Функция для конвертации цены из EUR в UAH
  const convertToUAH = (eurPrice) => {
    const price =
      typeof eurPrice === "string"
        ? parseFloat(eurPrice.replace(/\s/g, "").replace(",", "."))
        : parseFloat(eurPrice);
    const uahPrice = Math.round(price * rate);
    return formatPrice(uahPrice);
  };

  // Функция для форматирования цены в EUR
  const formatEUR = (eurPrice) => {
    const price =
      typeof eurPrice === "string"
        ? parseFloat(eurPrice.replace(/\s/g, "").replace(",", "."))
        : parseFloat(eurPrice);
    return formatPrice(Math.round(price));
  };

  return { rate, loading, convertToUAH, formatEUR };
}
