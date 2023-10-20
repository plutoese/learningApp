import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  const page_str = request.nextUrl.searchParams.get("page");
  const limit_str = request.nextUrl.searchParams.get("limit");

  const page = page_str ? parseInt(page_str, 10) : 1;
  const limit = limit_str ? parseInt(limit_str, 10) : 10;
  const skip = (page - 1) * limit;

  const feedbacks = await prisma.feedback.findMany({
    skip,
    take: limit,
  });

  return NextResponse.json({
    status: "success",
    results: feedbacks.length,
    feedbacks,
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const feedback = await prisma.feedback.create({
      data: body,
    });

    return NextResponse.json({
      status: "success",
      data: { feedback },
    });
  } catch (error) {
    console.log(error)
    return NextResponse.json({
        status: "error",
        message: error.message
    })
  }
}
