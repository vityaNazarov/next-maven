import { NextResponse } from "next/server";
import connect from "../../mongoose";
import Project from "../../../../models/Project";

export const GET = async (request) => {
  // try {
  //   await connect();
  //   const projects = await Project.find();
  //   return new NextResponse(JSON.stringify(projects), { status: 200 });
  // } catch (error) {
  //   return new NextResponse("Error in fetching" + error, { status: 500 });
  // }
  try {
    await connect();
    const projects = await Project.find();

    // Добавляем заголовок Access-Control-Allow-Origin
    const headers = {
      "Access-Control-Allow-Origin": "*", // Замените * на конкретный домен, если это возможно
      "Content-Type": "application/json",
    };

    return new NextResponse(JSON.stringify(projects), {
      status: 200,
      headers,
    });
  } catch (error) {
    return new NextResponse("Error in fetching" + error, { status: 500 });
  }
};
