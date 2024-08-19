import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="bg-[#28386F]  lg:h-[75vh] w-full min-lg:h-[60vh]  lg:flex">
        <div className="w-[60%] max-lg:h-[80vh] flex  justify-center items-center max-lg:w-[100%]">
          <div className=" flex w-[72%] max-lg:h-full  max-lg:justify-center max-lg:text-center max-lg:items-center h-[80%] justify-start lg:items-start flex-col gap-8 ">
            <h1 className="text-[4vw] font max-md:text-[4.2vw] leading-tight text-white font-[600]">
              EVERY VEHICLE <br /> HAS A STORY
            </h1>
            <p className="text-gray-200 font text-[15px] font-medium">
              Avoid buying a vehicle with costly hidden problems.
            </p>
            <ol className="text-white font  text-[17px]">
              <li> 1.More Than 100 Other Checks</li>
              <li> 2.Title & Ownership History</li>
              <li> 3.Previous Accidents</li>
            </ol>
          </div>
        </div>
        <div className="bg-[#303030] w-[35%]  max-lg:w-full max-lg:h-[40vh] flex  justify-center items-center  ">
          <Image
            className="absolute top-[160px] "
            src="/home-pic-1.png"
            alt="logo"
            width={600}
            height={180}
          />
        </div>                                                                                                                                                                                                    
        <div className="w-[10%]  max-lg:w-full max-lg:h-[30vh]"> </div>
      </div>

      <section className="  z-10 relative  flex justify-center items-center h-[48vh] w-full ">
        <div className="w-[850px] mt-[-150px]  rounded-3xl h-full bg-white shadow-lg">
          <div className="flex  justify-center items-center py-5">
            <h1 className="text-[38px] max-md:text-[4.2vw] leading-tight font">Get Vehicle History</h1>
          </div>
        </div>
      </section>

    </main>
  );
}
