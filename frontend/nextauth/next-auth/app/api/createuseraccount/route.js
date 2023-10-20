import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const body = await request.json();
    body.password = await bcrypt.hash(body.password, 10);

    const newUser = await prisma.UserAccount.create({
      data: body,
    });

    return NextResponse.json(newUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "POST Error", error });
  }
}
