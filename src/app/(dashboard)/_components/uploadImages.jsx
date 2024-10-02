"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { uploadImages,getImages } from "@/actions/s3Upload";
// import FilePreview from './FilePreview';
// import ProgressBar from './ProgressBar';
import Image from "next/image";
import logo from "@/public/rock.png";
import { useSession } from "next-auth/react";
const UploadImages = () => {

    const { data: session } = useSession()
    console.log("session-->>",session)
  const [file, setFile] = useState();
  const formdata = new FormData();

  //const console.log("file",file)
  const onFileSelect = async (file) => {
    formdata.append("file", file);
    setFile(file);
    if (file && file.size > 2 * 1024 * 1024) {
      alert("File size should be less than 2MB");
      setFile(null);

      return;
    }
    setFile(file);
    // console.log(file)

   
    await uploadImages(formdata,session);
    await getImages()
  };
  return (
    <div className="text-center  ">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-80 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 "
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-12 h-12 mb-4 text-blue-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 md:text-2xl text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Start Uploading now.</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Drop files here (MAX. 2MB)
            </p>

            <button
              onClick={() => uploadFile(file)}
              disabled={!file}
              className=" p-2 hover:cursor-pointer bg-purple-600 text-white w-full rounded-full mt-8

"
            >
              Browse Images!
            </button>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(e) => onFileSelect(e.target.files[0])}
          />
        </label>
      </div>
      {/* {
file? <FilePreview file={file} removeFile={()=>setFile(null)} /> : null
} */}

      {
        //button
      }
    </div>
  );
};

export default UploadImages;
