import React from 'react'
import UploadImages from '@/app/(dashboard)/_components/uploadImages';
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { TicketPercent,Search } from 'lucide-react';
import { Button } from '@/components/ui/button'

const GalleryPage =  async({params}) => {

    // const session = await getServerSession(authOptions)
    //console.log(params)
  //  console.log("this is sess---->",session)
  return (
    <div className='p-5 px-8 md:px-32  '>
    <div className=' flex md:flex-row flex-col  justify-between items-center'>
    <div>
    <h2 className=' text-[20px]  m-5 tracking-wide  '>
      Hi, <strong className=" text-purple-500">Agastya</strong>🤩
    </h2> 
    </div>
    <div className="flex w-full max-w-sm items-center bg-slate-200 rounded-xl  ">
      <Input type="text" placeholder="search event" className=" bg-white  rounded-xl" />
      <Button   className=" bg-slate-200 rounded-xl "> <Search /> </Button>
    </div>
   <Link href={'/create'}>
   <Button   className="bg-gradient-to-r from-gray-900 to-slate-600  text-white rounded-xl  mt-3 md:mt-0" > <TicketPercent className="mr-2 h-4 w-4 "/>Uplaod!</Button>
   </Link>
    </div>
    <hr className=' mt-3 md:mt-0' />

    {/* ---------------- */}
    
   
    <div className=' mt-8    '>
        <UploadImages/>
        </div>
       
    </div>
  )
}

export default GalleryPage