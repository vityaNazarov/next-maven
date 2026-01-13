import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Используем API НБУ для получения курса EUR
    const response = await fetch(
      "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json",
      {
        next: { revalidate: 3600 }, // Кешируем на 1 час
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch exchange rate");
    }

    const data = await response.json();

    // Находим курс EUR
    const eurRate = data.find((currency) => currency.cc === "EUR");

    if (!eurRate) {
      throw new Error("EUR rate not found");
    }

    return NextResponse.json({
      rate: eurRate.rate,
      date: eurRate.exchangedate,
    });
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    // Возвращаем дефолтный курс в случае ошибки
    return NextResponse.json(
      { rate: 49.5, error: "Using default rate" },
      { status: 200 }
    );
  }
}
