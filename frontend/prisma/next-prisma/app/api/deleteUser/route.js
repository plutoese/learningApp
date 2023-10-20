import prisma from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name } = await request.json();

    const user = await prisma.User.delete({
      where: {
        name: String(name),
      },
    });

    console.log("delete user: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Delete User Error", error });
  }
}
