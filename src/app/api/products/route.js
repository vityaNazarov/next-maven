import { NextResponse } from "next/server";
import connect from "../../mongoose";
import Product from "../../../../models/Product";

export const GET = async (request) => {
  // try {
  //   await connect();
  //   const products = await Product.find();
  //   return new NextResponse(JSON.stringify(products), { status: 200 });
  // } catch (error) {
  //   return new NextResponse("Error in fetching" + error, { status: 500 });
  // }
  try {
    await connect();
    const products = await Product.find();

    // Добавляем заголовок Access-Control-Allow-Origin
    const headers = {
      "Access-Control-Allow-Origin": "*", // Замените * на конкретный домен, если это возможно
      "Content-Type": "application/json",
    };

    return new NextResponse(JSON.stringify(products), {
      status: 200,
      headers,
    });
  } catch (error) {
    return new NextResponse("Error in fetching" + error, { status: 500 });
  }
};
