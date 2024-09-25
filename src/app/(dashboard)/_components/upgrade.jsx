import { Cloud, Rocket,ShieldEllipsis } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"



export default function Upgrade({ usedStorage, totalStorage }= { usedStorage: 285.22, totalStorage: 10000 }) {
  const usedPercentage = (usedStorage / totalStorage) * 100

  return (
    <div className="bg-gray-200 p-4 rounded-2xl shadow-sm mx-auto   w-52">
      <div className="flex items-center mb-2">
        <Cloud className="w-5 h-5 mr-2 text-gray-600" />
        <h2 className="text-lg font-semibold text-gray-800">My Storage</h2>
      </div>
      <Progress value={usedPercentage} className="h-2 mb-2 bg-black" />
      <div className="flex justify-between text-sm text-gray-600 mb-4">
        <span>{usedStorage.toFixed(2)} KB</span>
        <span>{(totalStorage / 1024).toFixed(0)} GB</span>
      </div>
      <Button  className="w-full rounded-2xl  bg-gradient-to-r from-teal-600 to-fuchsia-500 hover:bg-green-600 text-white">
        <ShieldEllipsis className="w-4 h-4 mr-2" />
        Upgrade
      </Button>
    </div>
  )
}