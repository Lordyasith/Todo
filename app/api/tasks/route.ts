import {prisma} from "@/lib/db";

import { NextResponse } from "next/server";

export async function GET(){
    try{
        const todos=await prisma.task.findMany({
            orderBy:{
                createdAt:"desc",
            }

        });
        return NextResponse.json(todos,{status:200})
    }catch(error){
        console.log("[GET TODO]",error)
        return new NextResponse("Internal Server Error",{status:500})
    }

    

}