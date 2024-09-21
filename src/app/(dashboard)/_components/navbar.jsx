

import { MobileSidebar } from "@/app/(dashboard)/_components/mobile-sidebar";
// import { getApiLimitCount } from "@/lib/api-limit";
// import { checkSubscription } from "@/lib/subscription";

const Navbar = async () => {
//   const apiLimitCount = await getApiLimitCount();
//   const isPro = await checkSubscription();

  return ( 
    <div className="flex items-center p-4 bg-red-600">
      <MobileSidebar  />
      <div className="flex w-full md:justify-end  justify-between">
      <div className=" md:hidden ">
       Tasvirai
      </div>
        {/* <UserButton afterSignOutUrl="/" /> */} logout
      </div>
    </div>
   );
}
 
export default Navbar;