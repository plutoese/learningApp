import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allUsers = await prisma.User.findMany();

    return NextResponse.json(allUsers);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "GET Error", error });
  }
}
