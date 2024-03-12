import { prisma } from "@/lib/db";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { todoTitle,todoDesc,dueDate,priority,completed,createdAt } = await req.json(); // detsrtucture todoTitle from the request

    if (!todoTitle) {
      return new NextResponse("Title required", { status: 400 });
    }

    // Create a new todo in the database
    const todo = await prisma.task.create({
      data: {
        title: todoTitle,
        description:todoDesc,
        dueDate:dueDate,
        priority:priority,
        completed:completed,
        createdAt:createdAt
    },
    });

    return NextResponse.json(todo, { status: 200 }); // Respond with the created todo
  } catch (error) {
    console.log("[POST TODO]", error);

    return new NextResponse("Internal Server Error", { status: 500 }); // Handle errors
  }
}