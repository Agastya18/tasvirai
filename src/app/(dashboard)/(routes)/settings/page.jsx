import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import UploadForm from '../../_components/uploadForm'
import { TicketPercent,Search,Rocket,Save } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { cn } from '@/lib/utils'
import QRCodeDisplay from '../../_components/qrCode'
import YourPlan from '../../_components/yourPlan'
const page = () => {
  return (
    <div>
        <div className='p-5 px-8 md:px-32  '>
    <div className=' flex md:flex-row flex-col  justify-between items-center'>
  <div>
  <h2 className=' text-[20px]  m-5 tracking-wide  '>
    <strong className=" text-purple-500">Settings</strong>
  </h2> 
  </div>
  
 <Button className="bg-gradient-to-r from-gray-900 to-slate-600  text-white rounded-xl  mt-3 md:mt-0" > <TicketPercent className="mr-2 h-4 w-4 "/>Button</Button>
  </div>
  <hr className=' mt-3 md:mt-0' />


  {/* <h1>--------------</h1> */}


  <div className="flex flex-col md:flex-row items-center justify-center gap-4  md:p-8">
{/* Author: FormBold Team */}

<div className="mx-auto w-full max-w-[550px]  bg-slate-100 rounded-lg shadow-lg p-4">
  <form>
    <div className="mb-5">
      <label
        htmlFor="name"
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
        Full Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Full Name"
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
    </div>
   
   
    <div className="-mx-3 flex flex-wrap">
      <div className="w-full px-3 sm:w-1/2">
        <div className="mb-5">
          <label
            htmlFor="date"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
      </div>
      <div className="w-full px-3 sm:w-1/2">
        <div className="mb-5">
          <label
            htmlFor="time"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Time
          </label>
          <input
            type="time"
            name="time"
            id="time"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
      </div>
    </div>
    <div className="mb-5 pt-3">
      <Label className="mb-5 block text-base  text-[#07074D] ">
        Description
      </Label>
      <Textarea className={cn(" bg-white border-[#e0e0e0]")} placeholder="Type your message here." id="message" />
      
    </div>
    <div>
      <button className="hover:shadow-form w-full rounded-full bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none flex items-center justify-center gap-2 ">
     <Save/> <p> Save</p>
      </button>
    </div>
  </form>
</div>

{/* <h1>-------------</h1> */}

<div className=' bg-slate-100 p-6 shadow-lg'>
<div className=' items-center flex  justify-center'>
   <p className=' font-mono font-semibold mb-4'>My Qr Code</p>
</div>
<QRCodeDisplay/>
</div>
</div>
{/* <div>
    <YourPlan/>
</div> */}
</div>

<div className='p-4 px-8 md:px-32 '>
    <YourPlan/>
</div>
    </div>

  
  )
}

export default page