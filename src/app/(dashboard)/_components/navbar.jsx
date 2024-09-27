

import { MobileSidebar } from "@/app/(dashboard)/_components/mobile-sidebar";
// import { getApiLimitCount } from "@/lib/api-limit";
// import { checkSubscription } from "@/lib/subscription";
import ProfileDropDown from "@/components/ProfileDrop";
const Navbar = async () => {
//   const apiLimitCount = await getApiLimitCount();
//   const isPro = await checkSubscription();

  return ( 
    <div className="flex items-center p-4  bg-slate-100">
      <MobileSidebar  />
      <div className="flex w-full md:justify-end  justify-between">
      <div className=" md:hidden ">
       Tasvirai
      </div>
        {/* <UserButton afterSignOutUrl="/" /> */} <ProfileDropDown/>
      </div>
    </div>
   );
}
 
export default Navbar;