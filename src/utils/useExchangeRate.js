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

  return { rate, loading };
}
