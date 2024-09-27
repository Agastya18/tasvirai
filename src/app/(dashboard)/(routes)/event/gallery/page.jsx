import React from 'react'
import logo from "@/public/rock.png"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import Image from 'next/image';
import { TicketPercent,Search } from 'lucide-react';
import { Button } from '@/components/ui/button'
import GalleryForm from '@/app/(dashboard)/_components/GalleryForm';
const page = () => {
  return (
    <div className='p-5 px-8 md:px-32 '>
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
    <div className='flex gap-2'>
    <Link href={'/create'}>
   <Button   className="bg-gradient-to-r from-gray-900 to-slate-600  text-white rounded-xl  mt-3 md:mt-0" > <TicketPercent className="mr-2 h-4 w-4 "/>Share</Button>
   </Link>
   <Button   className="bg-gradient-to-r from-gray-900 to-slate-600  text-white rounded-xl  mt-3 md:mt-0" > <TicketPercent className="mr-2 h-4 w-4 "/>Share</Button>
    </div>
    </div>
    <hr className=' mt-3 md:mt-0' />

     
     
    <div className='text-center '>
    
    <div className="flex items-center justify-center w-full">
<label
  htmlFor="dropzone-file"
  className="flex flex-col items-center justify-center w-full   border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50    "
>
  <div className="flex flex-col items-center justify-center pt-5 pb-6">
    <Image src={logo} alt='s' className='  w-44     '/>
    <p className="mb-2 md:text-2xl text-sm text-gray-500 dark:text-gray-400">
      <span className="font-semibold">Create an event and start sharing them instantly.</span> 
    </p>
    <p className="text-xs text-gray-500 dark:text-gray-400">
       PNG, JPG  (MAX. 2MB)
    </p>
  </div>
  <input id="dropzone-file" type="file" className="hidden" onChange={(e)=>onFileSelect(e.target.files[0])} />
</label>
</div>
{/* {
file?  <FilePreview file={file} removeFile={()=>setFile(null)} /> : null
} */}


{
<button onClick={()=>uploadFile(file)} disabled={!file} className=" p-2 hover:cursor-pointer  bg-purple-600 text-white w-[30%] rounded-full mt-5

">Get Started!</button>
}

  </div>
     

    </div>
  )
}

export default page