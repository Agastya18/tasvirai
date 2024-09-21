'use client'
import React from 'react'
import Navbar from '../Appbar/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import logo from '@/public/logo.svg'
import { Button } from '@/components/ui/button'
import { FaGoogle } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'
import { FaGithub } from "react-icons/fa";
import cam from '@/public/cam.svg'
const Hero = () => {
    const session=null
    const gitHubStars=1
  return (
    <section className="items-center md:mt-40 mt-28">
      {/* <Navbar/> */}
      <div className="container relative mx-auto px-4">
        <Image
          src={cam}
          alt=""
          className="relative left-[10%] lg:left-[30%]"
          width={50}
          height={50}
        />
        
        <Image
          src={logo}
          alt=""
          className="absolute md:right-[20%] right-[10%] lg:right-[28%] rotate-12 md:top-[26%] top-[34%] lg:top-[34%] mt-8"
          width={40}
          height={40}
        />
        
        <div className="max-w-[600px] lg:max-w-[900px] mx-auto">
       <div className=' flex items-center justify-center mb-2 '>
      <div className='rounded-full bg-slate-200 mb-4'>
      {gitHubStars ? (
          <Link
            href={'https://github.com/agastya18'}
            target="_blank"
            rel="noreferrer"
            className="z-10"
          >
            <Badge
              variant="outline"
              aria-hidden="true"
              className="rounded-md px-3.5 py-1.5 text-sm transition-all duration-1000 ease-out hover:opacity-80 md:text-base md:hover:-translate-y-2"
            >
              {/* <Icons.gitHub className="mr-2 size-3.5" aria-hidden="true" /> */}
              <FaGithub className="mr-2 size-3.5" />
              {gitHubStars} Stars on GitHub
            </Badge>
            <span className="sr-only">GitHub</span>
          </Link>
        ) : null}
      </div>
       </div>
        
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-black/70 text-transparent bg-clip-text text-center">
           Experience Face-Exclusive  <span className="bg-gradient-to-r from-pink-800 to-purple-500 bg-clip-text font-extrabold text-transparent ">
           Photo Access!
            </span> 
          </h1>

          <p className="text-lg tracking-tighter text-black/70 text-center mt-5">
          A privacy-first platform for securely uploading photos from events, trips, or linking your Google Drive. Share <br className="hidden md:block" />  effortlessly  with  QR codes or links, while advance facial recognition ensures everyone accesses <br className="hidden md:block" />  only their personal memories.
          </p>
        </div>
        <div className="flex items-center justify-center mt-5">
          {!session?.data?.user ? (
            <Button
              className="pl-2 py-6 text-sm md:text-base"
              onClick={async () => {
               // await signIn('google')
              }}
            >
              <span className="flex items-center gap-2">
                <div className="px-3 py-2 rounded-lg border bg-white text-black">
                  <FaGoogle />
                </div>
                Sign up with Google
              </span>
            </Button>
          ) : (
            <Button
              className="pl-3 py-6 text-sm bg-black md:text-base"
              onClick={() => {
                router.push('/wallet')
              }}
            >
              <span className="flex items-center gap-2">
                <div className="px-3 py-2 rounded-lg bg-white text-black">
                  <svg
                    className="size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="128"
                    height="128"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M4 3a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3v-1.77c.63-.57 1-1.38 1-2.23v-5c0-.85-.37-1.66-1-2.23V6a3 3 0 0 0-3-3zm0 1h13a2 2 0 0 1 2 2v1.17c-.32-.11-.66-.17-1-.17h-6a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h6c.34 0 .68-.06 1-.17V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8 4h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m2.5 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5m0 1a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"
                    />
                  </svg>
                </div>
                Go to wallet
              </span>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero