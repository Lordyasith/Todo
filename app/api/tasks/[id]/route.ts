import { prisma } from "@/lib/db";

import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id) {
      return new NextResponse("Not found", { status: 404 });
    }

    // delete todo
    const deletedTodo = await prisma.task.delete({
      where: {
        id: params.id,
      },
    });

    // Respond with the updated todo
    return NextResponse.json(deletedTodo, { status: 200 });
  } catch (error) {
    console.log("[DELETE TODO]", error);

    // Handle errors
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}




export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id) {
      return new NextResponse("Not found", { status: 404 });
    }

    // update todo
    const updatedTodo = await prisma.task.update({
      where: {
        id: params.id,
      },
      data: {
        completed: true,
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








