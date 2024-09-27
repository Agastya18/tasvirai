'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaGoogle } from 'react-icons/fa6'
import Logo from '@/public/logo1.svg'
import UserImage from './UserImage'
import { FaWallet } from 'react-icons/fa6'
import { LogOut, Menu, UserRound } from 'lucide-react'
import ProfileDropDown from '../ProfileDrop'
import LoginWithGoogleButton from '../loginWithGoogle'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from '@/components/ui/dropdown-menu'
  const dropDownData = [
    {
      name: 'Profile',
      icon: <UserRound size={15} />,
      href: '/profile',
    },
  ]
const Navbar = () => {
    const router = useRouter()
    const { data } = useSession()
    console.log(data)
  //  const [isMounted, setIsMounted] = useState(false)
  return (
    <header className="w-screen py-4 border-b md:border-none fixed top-0 left-0 right-0 bg-[#f3dff6] md:bg-white/0 z-40 ">
    <div className="container pl-32 px-4   ">
      <div className="  flex justify-between items-center md:border md:p-2.5 rounded-full max-w-2xl lg:max-w-4xl mx-auto  md:bg-slate-100 md:backdrop:blur-xl ">
        <div>
          <div className="border  h-10 w-10 rounded-lg inline-flex justify-center items-center">
            {/* <Logo className="h-8 w-8" fill="#000000" /> */}
            <Image src={Logo} alt='logo' className=' ' />
          </div>
        </div>
        <div className="hidden md:block">
          <nav className="flex gap-8 text-sm">
            <Link
              className="text-black/70 hover:text-black transition"
              href="#"
            >
              Products
            </Link>
            <Link
              className="text-black/70 hover:text-black transition"
              href="#"
            >
              Feature
            </Link>
            <Link href={'#faq'}
              className="text-black/70 hover:text-black transition"
              
            >
              FAQ
            </Link>
            <Link
              className="text-black/70 hover:text-black transition"
              href="#"
            >
              Company
            </Link>
            <Link
              className="hidden lg:block text-black/70 hover:text-black transition"
              href="#"
            >
              Blogs
            </Link>
          </nav>
        </div>
        <div className="flex gap-4 items-center">
          {/*{data && data?.user ? (*/}
          {/*  <Button size="sm" variant="default">*/}
          {/*    Sign out*/}
          {/*  </Button>*/}
          {/*) : (*/}
          {/*  <>*/}
          {/*    <Button variant="outline">*/}
          {/*      <FaWallet className="hover:text-black/80" />*/}
          {/*    </Button>*/}
          {/*    <LoginWithGoogleButton />*/}
          {/*  </>*/}
          {/*)}*/}
         
          {data && data?.user ? <ProfileDropDown/>: (
            <>
              {/* {isMounted && (
                <WalletMultiButton
                  style={{
                    backgroundColor: 'black',
                    height: '40px',
                    borderRadius: '8px',
                  }}
                  endIcon={<FaWallet />}
                />
              )} */}
            <div className=' bg-black text-white rounded-2xl'>
              <LoginWithGoogleButton />
            </div>
            </>
          )}
          <span className="md:hidden">
            <Menu />
          </span>
        </div>
      </div>
    </div>
  </header>

  )
}

export default Navbar