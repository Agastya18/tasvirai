"use client";
import logo from '@/public/logo1.svg'
import Link from "next/link";
import Image from "next/image";
// import { Montserrat } from 'next/font/google'
import { Code, ImageIcon, BookImage, FilePlus2, Music, Settings, UserRoundPen } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
// import { FreeCounter } from "@/components/free-counter";

// const poppins = Montserrat ({ weight: '600', subsets: ['latin'] });

const routes = [
  {
    label: 'My Events',
    icon: BookImage,
    href: '/event',
    color: "text-sky-400"
  },
  {
    label: 'Create Event',
    icon: FilePlus2,
    href: '/create',
    color: "text-violet-400",
  },
 

  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full shadow-xl   bg-white  text-black">
      <div className="px-3 py-2 flex-1">
        <Link href="/event" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src={logo} />
          </div>
          <h1 className={cn("text-2xl font-bold")}>
            Tasvirai
          </h1>
        </Link>
        <hr />
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href} 
              href={route.href}
              className={cn(
                "text-md group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white  hover:bg-purple-600  rounded-full transition",
                pathname === route.href ? "text-white bg-purple-700" : "text-zinc-600",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* <FreeCounter 
        apiLimitCount={apiLimitCount} 
        isPro={isPro}
      /> */}
      freecounter
    </div>
  );
};