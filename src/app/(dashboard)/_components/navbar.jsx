
import LoginWithGoogleButton from "@/components/loginWithGoogle";
import { MobileSidebar } from "@/app/(dashboard)/_components/mobile-sidebar";
// import { getApiLimitCount } from "@/lib/api-limit";
import { getServerSession } from 'next-auth'
import { authOptions } from "@/lib/auth";
// import { checkSubscription } from "@/lib/subscription";
import ProfileDropDown from "@/components/ProfileDrop";
const Navbar = async () => {
//   const apiLimitCount = await getApiLimitCount();
//   const isPro = await checkSubscription();
const  data = await getServerSession(authOptions)
//console.log("this is data:",data)

  return ( 
    <div className="flex items-center p-4  bg-slate-100">
      <MobileSidebar  />
      <div className="flex w-full md:justify-end  justify-between">
      <div className=" md:hidden ">
       Tasvirai
      </div>
      {data && data?.user ? <ProfileDropDown/>: (
            <>
             
            <div className=' bg-black text-white rounded-2xl'>
              <LoginWithGoogleButton />
            </div>
            </>
          )}
      </div>
    </div>
   );
}
 
export default Navbar;