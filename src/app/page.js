import Image from "next/image";
import Navbar from "@/components/Appbar/Navbar";
import { Footer } from "@/components/Appbar/Footer";
import Home from "@/components/Home/Home";
export default function Page() {
  return (
   <>
    <Navbar/>
     <Home/>
    <Footer/>
   </>
  );
}
