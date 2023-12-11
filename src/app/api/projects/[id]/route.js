import { NextResponse } from "next/server";
import connect from "../../../mongoose";
import Project from "../../../../../models/Project";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();
    const projects = await Project.findById(id);
    return new NextResponse(JSON.stringify(projects), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching" + error, { status: 500 });
  }
};
