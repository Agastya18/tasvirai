"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Share2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function QRCodeDisplay() {
  const [url, setUrl] = useState('https://tasvirai-storages.blr1.cdn.digitaloceanspaces.com/qr-6865526_1280.png')



 

  return (
    <Card className="w-full max-w-md mx-auto bg-white rounded-lg">
      <CardContent className="p-2 ">
        <div className="flex justify-center mb-4">
          {/* <QRCodeSVG id="qr-code" value={url} size={200} /> */}
         <Image src="https://tasvirai-storages.blr1.cdn.digitaloceanspaces.com/qr-6865526_1280.png" alt='asda' width={220}  height={300} />

        </div>
        <Input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className={cn('mb-5 rounded-full ')}
        />
        <div className="flex justify-between">
          <Button  className={cn("flex-1 mr-2  bg-black text-white rounded-full  hover:bg-slate-800")}>
            <Download className="w-4 h-4 mr-2" />
            Download QR Code
          </Button>
          <Button  className={cn("flex-1 ml-2  bg-green-700 text-white rounded-full hover:bg-green-800")}>
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}