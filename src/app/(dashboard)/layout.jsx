import Navbar from "@/app/(dashboard)/_components/navbar";
import { Sidebar } from "@/app/(dashboard)/_components/sidebar";
// import { checkSubscription } from "@/lib/subscription";
// import { getApiLimitCount } from "@/lib/api-limit";

const DashboardLayout = async ({children}) => {

  return ( 
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-[230px] md:flex-col md:fixed md:inset-y-0 z-80  ">
        <Sidebar  />
      </div>
      <main className="md:pl-[230px] pb-10 ">
        <Navbar />
        {children}
      </main>
    </div>
   );
}
 
export default DashboardLayout;