import { NextResponse } from "next/server";
import connect from "../../../mongoose";
import Individual from "../../../../../models/Individual";

export const GET = async (request, { params }) => {
  const { id } = params;

  // try {
  //   await connect();
  //   const products = await Product.findById(id);
  //   return new NextResponse(JSON.stringify(products), { status: 200 });
  // } catch (error) {
  //   return new NextResponse("Error in fetching" + error, { status: 500 });
  // }
  try {
    await connect();
    const individuals = await Individual.findById(id);

    // Добавляем заголовок Access-Control-Allow-Origin
    const headers = {
      "Access-Control-Allow-Origin": "*", // Замените * на конкретный домен, если это возможно
      "Content-Type": "application/json",
    };

    return new NextResponse(JSON.stringify(individuals), {
      status: 200,
      headers,
    });
  } catch (error) {
    return new NextResponse("Error in fetching" + error, { status: 500 });
  }
};
