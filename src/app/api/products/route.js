import { NextResponse } from "next/server";
import connect from "../../mongoose";
import Product from "../../../../models/Product";

export const GET = async (request) => {
  try {
    await connect();
    const products = await Product.find();
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching" + error, { status: 500 });
  }
};
