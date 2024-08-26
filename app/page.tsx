import Image from "next/image";
import {
  CarFrontFill,
  HandThumbsUpFill,
  CheckCircle,
  HandThumbsUp,
  Umbrella,
} from "react-bootstrap-icons";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import AccordionUsage from "./components/accorddin";
import Footer from "./components/footer";


export default function Home() {

  const features = [
    {
      title: 'Uncover Title Brands',
      description: 'Avoid risks associated with salvage, rebuilt, or irreparable car',
      icon: '📄', // Replace with actual icon component or SVG
    },
    {
      title: 'Check Registration Records',
      description: 'Track registration history and issuing jurisdiction',
      icon: '📝',
    },
    {
      title: 'Verify Mileage History',
      description: 'Check any signs of odometer rollback or tampering',
      icon: '⏰',
    },
    {
      title: 'Flag Stolen Vehicles',
      description: 'Detect active and previous theft recoveries',
      icon: '🚗',
    },
    {
      title: 'Expose Recalls & Buybacks',
      description: 'Examine records of known vehicle defects',
      icon: '⚠️',
    },
    {
      title: 'Run US Vehicle History',
      description: 'Check any matching vehicle records in the United States',
      icon: '🔑',
    },
  ];


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
        <div className="w-[65%] mt-[-70px]  rounded-3xl h-full bg-white shadow-lg">
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
      <section className="w-full min-h-[30vh] sm:gap-5  min-sm:gap-5  grid  lg:grid-cols-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1   place-items-center bg-white ">
        <Image
          className="object-cover "
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
      <section className=" h-[120vh]  bg-[#F7F9FB]">
        <div className=" w-full h-[30%] flex justify-center items-center py-12 text-center  flex-col">
          <h1 className="text-[28px] max-md:text-[4vw]  font">
            THE CANADIAN VEHICLE HISTORY AUTHORITY
          </h1>
          <p className="font-extrabold flex  justify-center  text-center items-center">
            . . . ______
          </p>
          <p className="text-gray-600  text-[17px] lightFont">
            In partnership with the Canadian government, non-profit, and auto industry entities, ThevehicleVin delivers a full vehicle history report for a thorough vehicle
            <br /> assessment:
          </p>
        </div>

        <div className=" w-full min-h-[70%] flex  justify-center  text-center items-center ">
          <div className="w-[80%] h-full ">
            <div className=" flex flex-col items-center justify-center p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-[#ffffff]  px-2 h-[170px] w-[330px]    flex items-center">
                    <div className=" h-[50%] px-2">
                      <div className="w-16 h-16 rounded-full bg-[#2D438E] flex items-center justify-center text-white text-2xl">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="ml-4 flex flex-col gap-3 item-start text-start">
                      <h3 className="text-[18px]  mainFont text-[#2D438E]">{feature.title}</h3>
                      <p className="text-sm text-gray-600 mainFont">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex space-x-4">
                <button className="bg-[#172862] lightFont text-white py-2 px-4 rounded-full">Check Vin</button>
                <button className="bg-[#172862] lightFont  text-white py-2 px-4 rounded-full">View Sample</button>
              </div>
            </div>

          </div>
        </div>
      </section>




      <section className="h-[80vh] w-full ">
        <div className="w-full h-[65vh] bg-[#28386F] max-lg:flex-col flex">
          <div className="bgOverlay h-full relative">
            <div className="w-full h-full flex absolute z-0 top-0 text-center  justify-center items-center bg-black/80">
              <p className=" font text-[50px] text-white relative z-10">
                Our Reports Will <br />
                Check For
              </p>
            </div>
          </div>
          <div className=" w-[50%] h-full	flex">
            <div className="h-full  w-[50%] flex  justify-center items-center">
              <ul className="flex  justify-center text-white items-start gap-2 font flex-col">
                <li>Previous Accidents</li>
                <li>Branded Title History</li>
                <li>Lien & Repossession Records</li>
                <li>Sale Records</li>
                <li>Salvage & Reconstruction</li>
                <li>Vehicle Specifications</li>
              </ul>
            </div>
            <div className="h-full  w-[50%] flex  justify-center items-center">
              <ul className="flex  justify-center  text-white items-start gap-2 font flex-col">
                <li>Previous Accidents</li>
                <li>Branded Title History</li>
                <li>Lien & Repossession Records</li>
                <li>Sale Records</li>
                <li>Salvage & Reconstruction</li>
                <li>Vehicle Specifications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col  items-center">
        <div className="flex justify-center items-center flex-col ">
          <h1 className="font text-[40px]">How to Decode a VIN Number</h1>
          <p className="font-extrabold flex  justify-center  text-center items-center">
            . . . ______
          </p>
        </div>

        <Image
          className="object-cover"
          src="/vin-decoder.jpeg"
          alt="logo"
          width={1120}
          height={100}
        />
      </section>

      <section className="w-full h-[65vh] mt-10  text-center flex flex-col items-center gap-3 justify-center text-white bg-[#121F52] ">
        <h1 className="font text-[40px]"> Get Your Report</h1>
        <p className="font-extrabold flex  justify-center  text-center items-center">
          . . . ______
        </p>
        <p className="text-gray-200 font text-[18px] font-medium">
          VINReport reports are easy to access and use. Get your report in under 5 minutes with these 3 simple steps.
        </p>
        <ol className="text-white font  text-[17px]">
          <li>1.Enter the VIN number in the search bar above</li>
          <li>2.Register and Download your Report!</li>
          <li>3.Review Preliminary Results</li>
        </ol>
      </section>

      <section className="w-full h-[100vh] mt-10  bg-[#FFFFFF]">
        <div className="flex  justify-center flex-col text-center items-center  py-10 h-[30%]">
          <h1 className="text-[37px] max-md:text-[4.2vw] leading-tight font">
            What You Will Find in a Vin Report
          </h1>
          <p className="font-extrabold flex  justify-center text-center items-center">
            . . . ______
          </p>
        </div>
        <div className="min-h-[70%]  w-full items-center flex justify-center gap-5">
          <Card
            icon={<CarFrontFill size={38} />}
            title="Fast Service"
            text=" Get your reports within minutes with our fast searching
                capabilities and quick sign up process. Don’t wait days for your
                report on other sites. Go with VinreportsPro!"
          />
          <Card
            icon={<HandThumbsUp size={38} />}
            title="Reliable"
            text=" Get your reports within minutes with our fast searching
                capabilities and quick sign up process. Don’t wait days for your
                report on other sites. Go with VinreportsPro!"
          />
          <Card
            icon={<CheckCircle size={38} />}
            title="In-Depth"
            text=" Get your reports within minutes with our fast searching
                capabilities and quick sign up process. Don’t wait days for your
                report on other sites. Go with VinreportsPro!"
          />
          <Card
            icon={<Umbrella size={38} />}
            title="Affordable"
            text=" Get your reports within minutes with our fast searching
                capabilities and quick sign up process. Don’t wait days for your
                report on other sites. Go with VinreportsPro!"
          />
        </div>
      </section>

      <section className="w-full min-h-screen flex  justify-center items-center ">
        <div className=" h-[60vh] w-[62%] ">
          <div className="flex  justify-center flex-col text-center items-center  py-10 h-[30%]">
            <h1 className="text-[32px] max-md:text-[4.2vw] leading-tight font">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="font-extrabold flex  justify-center text-center items-center">
              . . . ______
            </p>
          </div>
          <div className="gap-5 min-h">
            <AccordionUsage />
          </div>
        </div>
      </section>

      <Footer />




    </main >
  );
}
