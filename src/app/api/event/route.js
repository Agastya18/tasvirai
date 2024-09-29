import { NextResponse,NextRequest } from "next/server";
import prisma from "../../../../db";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { authOptions } from "@/lib/auth";
export async function POST(req){
  //  const url = new URL(request.url);
  
   
    // console.log("thi sis rrr --->",request)
    // console.log("this is res --->",NextResponse)
     console.log("this is req --->",NextRequest)
    

    const {name,date,type,details}= await request.json()
    console.log(name,date,type,details)
    // const newdata = await prisma.event.create({
    //     data:{
    //         name,
    //         date,
    //         type,
    //         details
    //     }
    // })
    

   

    




    
    return NextResponse.json({
        message: "hi three"
    })
    }
