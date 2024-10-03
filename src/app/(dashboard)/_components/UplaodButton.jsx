
"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"  
import { ImageUp } from 'lucide-react';
import { useState } from "react";
import { cn } from "@/lib/utils";


const UplaodButton = () => {
    // const [isFileDialogOpen, setIsFileDialogOpen] = useState(true);
  return (
    <Dialog    >
  <DialogTrigger asChild>
  <Button   className="bg-gradient-to-r from-gray-900 to-slate-600  text-white rounded-xl  mt-3 md:mt-0" > <ImageUp className="mr-2 h-4 w-4 "/>Uplaod!</Button>
  </DialogTrigger>
  <DialogContent className={cn(" bg-white ")}>
    <DialogHeader>
      <DialogTitle className="mb-8">Upload your File Here</DialogTitle>
      <DialogDescription>
        This action cannot be undone. 
      </DialogDescription>
    </DialogHeader>
    <div className="extraOutline p-4 bg-white w-max bg-whtie m-auto rounded-lg  ">
      <div
        className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg"
        style={{ width: 400 }}
      >
        <svg
          className="text-indigo-500 w-24 mx-auto mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <div className="input_field flex flex-col w-max mx-auto text-center">
          <label>
            <input
              className="text-sm cursor-pointer w-36 hidden"
              type="file"
              multiple=""
            />
            <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
              Select
            </div>
          </label>
          <div className="title text-indigo-500 uppercase">
            or drop files here
          </div>
        </div>
      </div>
    </div>
  </DialogContent>
</Dialog>

    
  )
}

export default UplaodButton


//<Button   className="bg-gradient-to-r from-gray-900 to-slate-600  text-white rounded-xl  mt-3 md:mt-0" > <ImageUp className="mr-2 h-4 w-4 "/>Uplaod!</Button>