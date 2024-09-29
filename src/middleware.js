import { NextRequest, NextResponse } from "next/server"


 

export function middleware(NextRequest,res) {


    const path= NextRequest.nextUrl.pathname
     //console.log("this sis--------->",res)
    //  console.log("rhis is ---------",res)
   

    const isPublicPath= path==='/'
    const token = NextRequest.cookies.get("next-auth.session-token")?.value || ""
    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/event', NextRequest.url))
    }
    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/', NextRequest.url)) // redirect to login page
    }
 
}


export const config = {
    matcher: [
        '/',
        
        
        '/event/:path*',

    ],
  }

