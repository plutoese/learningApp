import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.User.create({
      data: {
        email: email,
        name: name,
        password: hashedPassword,
        group: "user",
        isActive: true,
        remark: "",
      },
    });

    return NextResponse.json(newUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "POST Error", error });
  }
}
