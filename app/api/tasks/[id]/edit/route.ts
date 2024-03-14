import { prisma } from "@/lib/db";

import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id) {
      return new NextResponse("Not found", { status: 404 });
    }

    const { title,description } = await req.json();

    // edit todo title
    const updatedTodo = await prisma.task.update({
      where: {
        id: params.id,
      },
      data: {
        title: title,
        description:description
      },
    });

    // Respond with the updated todo
    return NextResponse.json(updatedTodo, { status: 200 });
  } catch (error) {
    console.log("[UPDATE TODO]", error);

    // Handle errors
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}