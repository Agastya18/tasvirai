import React from 'react'
import { Button } from '@/components/ui/button'
import UploadForm from '../../_components/uploadForm'
import { TicketPercent,Search } from 'lucide-react';
import { Input } from "@/components/ui/input"
const page = () => {
  return (
    <div className='p-5 px-8 md:px-32  '>
    <div className=' flex md:flex-row flex-col  justify-between items-center'>
    <div>
    <h2 className=' text-[20px]  m-5 tracking-wide  '>
      My, <strong className=" text-purple-500">Events</strong>🤩
    </h2> 
    </div>
    <div className="flex w-full max-w-sm items-center bg-slate-200 rounded-xl  ">
      <Input type="text" placeholder="search event" className=" bg-white  rounded-xl" />
      <Button type="submit" className=" bg-slate-200 rounded-xl "> <Search className='   '/> </Button>
    </div>
   <Button className="bg-gradient-to-r from-gray-900 to-slate-600  text-white rounded-xl  mt-3 md:mt-0" > <TicketPercent className="mr-2 h-4 w-4 "/>Create event</Button>
    </div>
    <hr className=' mt-3 md:mt-0' />

    {/* ---------------- */}
    
   
        <div className=' mt-8'>
        <UploadForm/>
        </div>
    </div>
  )
}

export default page