import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Navbar />
      <div className="homePage w-full flex gap-7 text-center flex-col justify-center items-center min-h-[82vh] bg-[#28386F]">
        <h1 className="text-[38px] font-semibold text-white">
          EVERY VEHICLE <br /> HAS A STORY
        </h1>
        <h3 className="text-[16px] font-semibold text-[#D9D9D9]">
          Avoid buying a vehicle with costly hidden problems.
        </h3>
        <div className="list-text flex gap-3 text-center flex-col justify-center items-center">
          <h3 className="text-[15px] font-semibold text-white">
            1. More Than 100 Other Checks
          </h3>
          <h3 className="text-[15px] font-semibold text-white">
            2. Title & Ownership History
          </h3>
          <h3 className="text-[15px] font-semibold text-white">
            3. Previous Accidents
          </h3>
        </div>
      </div>
      <div className="homePage w-full relative h-[30vh] bg-[#303030] flex justify-center item-center">
        <Image className=" absolute to-0" src="/home-pic-1.png" alt="" width={700} height={400} />
      </div>
      <div className="homePage w-full min-h-[40vh] bg-[#28386F]"></div>
    </main>
  );
}
