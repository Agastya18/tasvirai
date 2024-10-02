"use server"
import prisma from "../../db";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export const eventSubmit= async(name,type,description)=>{
    //console.log(name,date,type,details)
    const session = await getServerSession(authOptions);
   // console.log(session)
    if(!session && !session.user){
        return null
    }

    const event = await prisma.event.create({
        data:{
            name,
            type:type,
           description,
            userId:session.user.id
        }
    })
   return event
    
    
}


export const getEvents = async(userId)=>{
    const events = await prisma.event.findMany()
    return events
}