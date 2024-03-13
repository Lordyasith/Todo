import { prisma } from "@/lib/db";

import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { taskId: string } }
) {
  try {
    if (!params.taskId) {
      return new NextResponse("Not found", { status: 404 });
    }

    // delete todo
    const deletedTodo = await prisma.task.delete({
      where: {
        id: params.taskId,
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