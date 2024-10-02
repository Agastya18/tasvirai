
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import moment from "moment";
import Link from "next/link";
  
  import { FileTextIcon, GanttChartIcon, ImageIcon, UserPlus, Download,  Settings, Trash2,CloudUpload } from "lucide-react";

  import Image from "next/image";

   

 
 const EventCard = ({data}) => {
  console.log("data",data)
   return (
   <>
     <Link href={`/event/gallery/${data?.id}`} className="block rounded-2xl bg-slate-100    p-5 shadow-sm shadow-indigo-100">
  <Image
    alt="ada"
    width={'200'}
    height={'100'}
    src={data?.cover}
    className="h-56 w-full rounded-md object-cover"
  />

  <div className="mt-2">
    <dl>
    <div>
        <dt className="sr-only">Event name</dt>

        <dd className="font-medium">{data?.name}</dd>
      </div>
      <div>
        <dt className="sr-only">Day</dt>

        <dd className="text-sm text-gray-500"> {moment(data.createdAt).format("DD-MM-YYYY")}</dd>
      </div>

     
    </dl>

    <div className="mt-6 flex items-center gap-8 text-xs">
    <div className="flex justify-between w-full">
          <Button className="bg-gray-300 rounded-full hover:bg-gray-700  hover:text-white" variant="ghost" size="icon">
            <UserPlus className="w-5 h-5" />
          </Button>
          <Button className="bg-gray-300 rounded-full  hover:bg-gray-700  hover:text-white" variant="ghost" size="icon">
            <Download className="w-5 h-5" />
          </Button>
          <Button className="bg-gray-300 rounded-full  hover:bg-gray-700  hover:text-white" variant="ghost" size="icon">
          <CloudUpload />
          </Button>
          <Button className="bg-gray-300 rounded-full  hover:bg-gray-700  hover:text-white" variant="ghost" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
          <Button  variant="ghost" size="icon" className="text-red-500 hover:text-white bg-gray-300 rounded-full  hover:bg-gray-700  ">
            <Trash2 className="w-5 h-5" />
          </Button>
        </div>

     
    </div>
  </div>
</Link>
   </>
   )
 }
 
 export default EventCard