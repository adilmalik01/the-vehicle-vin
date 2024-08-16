import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className=" w-full h-[55vh] max-lg:min-h-[100vh]  flex max-lg:flex-col ">
        <div className="bg-[#28386F] lg:w-[60%] max-lg:h-[100vh] max-lg:w-[100%]"></div>
        <div className="bg-[#303030] lg:w-[35%] flex  justify-center items-center   max-lg:h-[60vh]       max-lg:w-[100%] ">
          <Image src="/home-pic-1.png" alt="logo"  width={1900} height={180} />
        </div>
        <div className="bg-[#28386F] lg:w-[10%]  max-lg:h-[3vh]     max-lg:w-[100%]"></div>
      </div>
    </main>
  );
}
