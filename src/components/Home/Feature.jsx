// import React from 'react'
// import FeatureCard from '../ui/feature-card'

// const features = [
//   {
//     title: 'TipLink Wallet',
//     description:
//       'Create or login to your secured TipLink wallet with just 2 clicks.',
//     image: "https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236917/wallet_krzexr.png",
//   },
//   {
//     title: 'TipLink Pro',
//     description:
//       'TipLink makes distributing digital assets as simple as clicking a link.',
//     image: "https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236917/pro_odeyp5.png"
//   },
//   {
//     title: 'TipLink Wallet Adapter',
//     description:
//       'Let your users login with just a Google account and start signing transactions.',
//     image: "https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236913/addapter_zq3why.png"
//   },
//   {
//     title: 'TipLink Swap Token',
//     description:
//       'Experience Effortless Token Swaps with TipLink, Simplifying Crypto Transactions for All Users',
//     image: "https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236916/token_t1atps.png"
//   },
// ]

// const Feature = () => {
//   return (
//     <section>
//       <div className="md:mt-20 mt-10 max-w-[1000px] mx-auto ">
//         <div className="flex justify-center">
//           <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight shadow-inner">
//             Features
//           </div>
//         </div>
//         <div className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-black/70 text-transparent bg-clip-text text-center mt-5">
//         <span className="bg-gradient-to-r from-slate-900 to-yellow-500 bg-clip-text text-transparent">
//         Core functionality!
//             </span> 
//         </div>
//         <div className="text-lg tracking-tighter text-black/70 text-center mt-5">
//           Explore the Core Features of Our Tool!
//         </div>
//       </div>
//       <div className="my-10 max-w-[1200px] mx-auto">
//         <div className="px-4 grid gap-8 md:grid-cols-2">
//           {features.map((feature, index) => (
//             <FeatureCard
//               key={index}
//               title={feature.title}
//               description={feature.description}
//               image={feature.image}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Feature

import Image from "next/image"
import Balancer from "react-wrap-balancer"
import l1 from '@/public/1.jpeg'
import l2 from '@/public/2.jpeg'
import l3 from '@/public/3.jpeg'


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Feature = () => {
  return (
    <section id="about-section" aria-label="about section" className=" my-32 max-w-[1200px] mx-auto">
    <div className="container grid max-w-6xl justify-center gap-16 px-4">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <Balancer>
            Why{" "}
            <span className="relative bg-gradient-to-r from-pink-600 to-purple-400 bg-clip-text font-extrabold text-transparent">
              Should You Care?
            </span>
          </Balancer>
        </h2>
        <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
          <Balancer>
            Your competitors are already using tasvirai and similar products{" "}
            
            
          </Balancer>
        </h3>
      </div>

      <div className="grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        <div className="space-y-4 md:mt-20 md:space-y-6">
          <Card
            id="1"
            className="h-fit bg-gradient-to-br from-pink-600/10 to-purple-400/10 transition-all duration-1000 ease-out md:hover:-translate-y-3"
          >
            <CardHeader>
              <CardDescription className="py-2 text-base font-medium tracking-wide text-muted-foreground">
                Incredible Time Saver
              </CardDescription>
              <CardTitle className="font-urbanist text-3xl font-black tracking-wide">
                <Balancer>
                  Get a Head Start <br className="hidden md:inline-block" />{" "}
                  on Your Competitors
                </Balancer>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-base leading-8 tracking-wide text-muted-foreground">
                <Balancer>
                Share photos with thousands of attendees using Face Recognition.
                Reduce the hassle of sharing photos and focus on what you do the best!
                </Balancer>
              </p>
              <div>
                <div className="pr-8">
                  <div className="relative z-10 flex flex-col gap-3 rounded-xl bg-background p-4 text-center shadow-xl">
                    <p className="text-3xl font-bold text-pink-800 dark:text-pink-600">
                      162.9k
                    </p>
                    <p className="text-xs font-bold tracking-wide text-purple-600 dark:text-purple-300">
                      Last 7 Days Website Visits
                    </p>
                    <p className="text-xs text-muted-foreground">
                      23% Increase from Last Week
                    </p>
                  </div>
                </div>
                {/* <div className="-mt-14 pl-8">
                  <div className="flex flex-col gap-3 rounded-xl bg-background p-4 text-center opacity-30 shadow-xl">
                    <p className="text-3xl font-bold">132.7k</p>
                    <p className="text-xs font-bold tracking-wide">
                      Last 14 Days Website Visits
                    </p>
                    <p className="text-xs text-muted-foreground">
                      17% Increase from Last Week
                    </p>
                  </div>
                </div> */}
              </div>
            </CardContent>
          </Card>

          <Card
            id="2"
            className="h-fit bg-gradient-to-br from-pink-600/10 to-purple-400/10 transition-all duration-1000 ease-out md:hover:-translate-y-3"
          >
            <CardHeader>
              <CardDescription className="py-2 text-base font-medium tracking-wide text-muted-foreground">
                Latest and Greatest in Tech
              </CardDescription>
              <CardTitle className="font-urbanist text-3xl font-black tracking-wide">
                <Balancer>Take Advantage of Modern Technologies</Balancer>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-0">
              <p className="px-4 text-base leading-8 tracking-wide text-muted-foreground">
                <Balancer>
                  We are constantly updating our templates to take advantage
                  of the latest and greatest technologies, so you can be sure
                  that your website is always up to date and as fast as
                  possible.
                </Balancer>
              </p>
              <Image
                width={600}
                height={400}
                alt="illustration"
                src={l3}
                className="overflow-hidden rounded-b-xl"
              />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4 md:space-y-6">
          <Card
            id="3"
            className="h-fit bg-gradient-to-br from-pink-600/10 to-purple-400/10 transition-all duration-1000 ease-out md:hover:-translate-y-3"
          >
            <CardHeader>
              <CardDescription className="py-2 text-base font-medium tracking-wide text-muted-foreground">
                High Quality Implementation
              </CardDescription>
              <CardTitle className="font-urbanist text-3xl font-black tracking-wide">
                <Balancer>Know Everything Works As Expected</Balancer>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-0">
              <p className="px-4 text-base leading-8 tracking-wide text-muted-foreground">
                <Balancer>
                  We spent countless hours researching, exploring docs and
                  testing the best way to implement the most important
                  features. We have done the hard work so you don&apos;t have
                  to.
                </Balancer>
              </p>
              <Image
                width={600}
                height={400}
                alt="illustration"
                src={l2}
                className="overflow-hidden rounded-b-xl"
              />
            </CardContent>
          </Card>

          <Card
            id="4"
            className="h-fit w-full bg-gradient-to-br from-pink-600/10 to-purple-400/10 transition-all duration-1000 ease-out md:hover:-translate-y-3"
          >
            <CardHeader>
              <CardDescription className="py-2 text-base font-medium tracking-wide text-muted-foreground">
                Flexibility and Support
              </CardDescription>
              <CardTitle className="font-urbanist text-3xl font-black tracking-wide">
                <Balancer>
                  Easily Customize <br /> Every Single Detail
                </Balancer>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-0">
              <p className="px-4 text-base leading-8 tracking-wide text-muted-foreground">
                <Balancer>
                  With the help of our detailed documentation, you can now
                  easily customize every single detail of the template. Should
                  you need any help, we are a message away.
                </Balancer>
              </p>
              <Image
                width={600}
                height={400}
                alt="illustration"
                src={l1}
                className="overflow-hidden rounded-b-xl"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Feature
