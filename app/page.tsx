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
            <p className="text-gray-200 font text-[16px] font-medium">
              Avoid buying a vehicle with costly hidden problems.
            </p>
            <ol className="text-white font  text-[16px]">
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

      <section className="  z-10 relative  flex justify-between flex-col  items-center h-[54vh] w-full ">
        <div className="w-[830px] mt-[-70px]  rounded-3xl h-full bg-white shadow-lg">
          <div className="flex  justify-center flex-col text-center items-center py-5">
            <h1 className="text-[37px] max-md:text-[4.2vw] leading-tight font">
              Get Vehicle History
            </h1>
            <p className="font-extrabold flex  justify-center text-center items-center">
              . . . ______
            </p>
          </div>
          <div className=" w-full flex justify-center text-center items-center">
            <form className="flex   w-[90%] flex-col  h-[150px] justify-between text-center items-start">
              <input
                type="text"
                name=""
                placeholder="E.g.JM1CW2BL9C0108880"
                id=""
                className=" w-[100%] h-[40px] border-black/45 bg-gray-400/25 border hover:border-[#17A8E3] outline-[#17A8E3] rounded-sm px-2 py-1"
              />
              <button className="font bg-[#17A8E3] py-2 px-3 text-white rounded-sm">
                Search Vin
              </button>
            </form>
          </div>
          <div className="flex gap-5 font underline justify-center items-center py-5">
            <a href="#"> Where Can I Find My Vin ?</a>
            <a href=""> View Report Sample? </a>
          </div>
        </div>
      </section>
      <section className="w-full h-[30vh]  flex justify-evenly items-center bg-white">
        <Image
          className="object-cover"
          src="/first-section-images/ekomi-logo.png"
          alt="logo"
          width={110}
          height={100}
        />

        <Image
          className="object-cover"
          src="/first-section-images/NMVTIS-Logo.jpg"
          alt="logo"
          width={200}
          height={100}
        />

        <Image
          className="object-cover"
          src="/first-section-images/fmcsa-logo.png"
          alt="logo"
          width={200}
          height={100}
        />

        <Image
          className="object-cover"
          src="/first-section-images/NHTSA-logo.png"
          alt="logo"
          width={200}
          height={100}
        />
      </section>
      <section className="w-full h-[120vh]  bg-[#f7f9fb]"></section>
    </main>
  );
}
