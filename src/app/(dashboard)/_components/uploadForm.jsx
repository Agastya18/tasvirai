"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
// import FilePreview from './FilePreview';
// import ProgressBar from './ProgressBar';
import Image from 'next/image'
import logo from "@/public/rock.png"
const UploadForm = () => {
  const [file,setFile]= useState();
  
  const onFileSelect = (file)=>{
    setFile(file)
    if(file && file.size > 2*1024*1024){
      alert('File size should be less than 2MB')
      setFile(null)
     
      return
    }
    setFile(file)
   // console.log(file)
  }
  return (
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
  )
}

export default UploadForm