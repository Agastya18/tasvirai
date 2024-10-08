"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import UploadForm from '../../_components/uploadForm'
import { eventSubmit } from '@/actions/event.action'
import { TicketPercent,Search,Rocket } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

const CreateEvent = () => {
  const router = useRouter()
/* eslint-disable */
 const [name,setName]= useState('')
  const [date,setDate]= useState('')
  const [type,setType]= useState('')
  const [description,setDetails]= useState('')
  





  const handleSubmit = async(e) => {
    e.preventDefault()
   // console.log("test front->>>>",name,type,description)
  await eventSubmit(name,type,description);
  window.alert('Event created successfully')
  router.push('/event')
  router.refresh()

    
   
    
  }
  return (
    <div className='p-5 px-8 md:px-32  '>
      <div className=' flex md:flex-row flex-col  justify-between items-center'>
    <div>
    <h2 className=' text-[20px]  m-5 tracking-wide  '>
      My, <strong className=" text-purple-500">Events</strong>🤩
    </h2> 
    </div>
  
{/* 
   <Button onClick={handleSubmit}  className="bg-gradient-to-r from-gray-900 to-slate-600  text-white rounded-xl  mt-3 md:mt-0" > <TicketPercent className="mr-2 h-4 w-4 "/>Create event</Button> */}

    </div>
    <hr className=' mt-3 md:mt-0' />


    {/* <h1>--------------</h1> */}


    <div className="flex items-center justify-center  md:p-8">
  {/* Author: FormBold Team */}
  <div className="mx-auto w-full max-w-[550px]  bg-slate-100 rounded-lg shadow-lg p-4">
    <form>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Event Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}

          name="name"
          id="name"
          placeholder=" Name"
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
              value={date}
              onChange={(e)=>setDate(e.target.value)}
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
              Event Type
            </label>
            <input
              type="text"
              value={type}
              onChange={(e)=>setType(e.target.value)}
              name="time"
              id="time"
              placeholder='ex. Trip, wedding'
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
      <div className="mb-5 pt-3">
        <Label className="mb-5 block text-base  text-[#07074D] ">
          Event Details
        </Label>
        <textarea
          value={description}
          onChange={(e)=>setDetails(e.target.value)}
         className=" w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md " placeholder="[optional]  "  />
        
      </div>
      <div>
        <button onClick={handleSubmit} className="hover:shadow-form w-full rounded-full bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none flex items-center justify-center gap-2 ">
        <Rocket /> <p> Create</p>
        </button>
      </div>
    </form>
  </div>
</div>

    </div>
  )
}

export default CreateEvent