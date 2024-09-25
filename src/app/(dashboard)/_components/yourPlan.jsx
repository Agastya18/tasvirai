import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"

export default function YourPlan() {
  return (
    <div className="max-w-6xl mx-auto p-3 bg-slate-100 shadow-lg md:px-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Your Plan</h1>
          <p className="text-muted-foreground">Manage Your Fotoowl Subscription</p>
        </div>
        <Button>Activate</Button>
      </div>
      <div className="bg-white shadow-md rounded-2xl p-6   ">
        <div className="flex items-center space-x-6 mb-6">
          <Image
            src="https://tasvirai-storages.blr1.cdn.digitaloceanspaces.com/pngegg%20(3).png"
            alt="Rider avatar"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold">Rider</h2>
            <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
              ACTIVE
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Storage</h3>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">285.22 KB</span>
              <span className="text-sm font-medium">10 GB</span>
            </div>
            <Progress value={2.8522} className="h-2 bg-black" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">WhatsApp Messages</h3>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <span className="text-sm font-medium mr-2">1 / 5</span>
                <Progress value={20} className="w-24 h-2 bg-black" />
              </div>
              <Button size="sm" variant="outline">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Buy More
              </Button>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-6">Valid Till: October 17, 2024</p>
      </div>
    </div>
  )
}