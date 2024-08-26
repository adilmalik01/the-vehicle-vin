import CarSection from "../components/CarSection";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import Image from "next/image";

const DataProduct = () => {
  return (
    <div>
      < Navbar />
      <section className="px-[100px] max-md:px-[20px]">
        <div className="container   mx-auto">
          <h1 className="text-[65px] onlyFont font-bold max-md:text-[48px] ">Data Product</h1>
          <div className="flex items-center max-md:flex-col  max-md:gap-5  ">

            <div className=" flex flex-col gap-4 ">
              <h1 className="onlyFont text-[25px] font-bold">AUTOMOTIVE MARKET DATA FEEDS</h1>
              <p className="onlyFont font-light  text-[#414141] mt-4 text-[18px]">
                Our platform is continually synced with the Canadian and US automotive markets, systematically updating a database of over 15 million listings. Leverage a repository of more than 100 million data points obtained from 70,000 dealerships across North America. Access this rich pool of information effortlessly via our robust set of APIs, tailored to offer seamless access to a diverse range of data sources. Tapping into our vast database ensures that your business and customers can get comprehensive insights and make informed decisions.
              </p>
            </div>


            <Image
              className="mt-2"
              src="/corrola.png"
              alt="logo"
              width={550}
              height={100}
            />
          </div>
        </div>
      </section>
      <div className="line w-full h-10 border-b border-gray-300"></div>
      <div className="mt-3">
        <h1 className="onlyFont py-3 text-[25px] font-bold text-center  ">VEHICLE DATA APIS</h1>
        <p className="onlyFont font-light  text-[#414141] mt-4 text-[17px] text-center px-5">
          Streamline the integration of vehicle data into your systems with our APIs,
          tailored for Canadian auto industry businesses. Effortlessly integrate “brandless data” <br />
          such as vehicle specifications, values, history, and other essential information.
          With over a decade of experience, we’ve curated 30 billion exclusive records from <br />
          a wide range of sources.
          Our commitment to ensuring that you have access to the market’s
          cleanest and most dependable vehicle datasets.
        </p>
      </div>


      <div className="py-[70px]  ">
        <CarSection
          text="Gain access to an expansive database of unprocessed vehicle data sourced from the VinAudit vehicle history report, encompassing detailed information from both the United States and Canada. With bulk access, you can tap into a wealth of data, providing you with in-depth and comprehensive insights. This empowers you to make informed decisions with confidence, whether you’re in the automotive industry or need to access reliable vehicle information for various purposes."
          title="VEHICLE HISTORY API"
          path="/tesla.png"
          side={true}
        />
      </div>

      <div className="line w-full h-10 border-b border-gray-300"></div>
      <div className="py-[30px]">

        <CarSection
          text="Explore our extensive database of vehicle specifications by VIN, thoughtfully collected from our industry partners across Canada. Effortlessly incorporate VinAudit data into your customized applications by utilizing your personal API key. This integration empowers you to access precise and up-to-date specs wherever it is needed in the Canadian market"
          title="VEHICLE SPECIFICATION API"
          path="/pc-specifications.png"
          side={false}
        />
      </div>

      <div className="line w-full h-10 border-b border-gray-300"></div>


      <div className="py-[30px]">

        <CarSection
          text="Seamlessly incorporate authentic, high-quality vehicle images for any year, make, model, or trim into your product or website. This API is designed to enhance the visual experience of your users. Whether you’re managing an automotive website, creating a product, or engaging in marketing activities, we offer a wide range of images that contribute to a more engaging and informative experience for your Canadian audience."
          title="VEHICLE IMAGES API"
          path="/vehicle-mobile-images-ui-space.png"
          side={true}
        />
      </div>

      <div className="line w-full h-10 border-b border-gray-300"></div>




      <div className="py-[30px]">

        <CarSection
          text="Elevate the visual appeal and professionalism of vehicle images with our advanced Vehicle Background Removal tool. This tool seamlessly removes backgrounds from vehicle photos, resulting in clean and eye-catching visuals. Whether you’re a dealership, automotive website, or marketing agency in Canada, this feature enhances the presentation of vehicles."
          title="VEHICLE BACKGROUND REMOVAL"
          path="/tesla-background-removed.png"
          side={false}
        />
      </div>

      <div className="line w-full h-10 border-b border-gray-300"></div>


      <div className="py-[30px]">

        <CarSection
          text="Leveraging VinAudit’s vast sales database, which holds millions of historical vehicle sales data, this API helps you estimate accurate market values."
          title="VEHICLE MARKET VALUE API"
          path="/desktop-market-value.png"
          side={true}
        />
      </div>

      <div className="line w-full h-10 border-b border-gray-300"></div>

      <div className="py-[30px]">

        <CarSection
          text="Utilizing VinAudit’s extensive sales database of millions of historical vehicle sales records, this API can accurately estimate market values. By tapping into this wealth of data, users gain access to a comprehensive collection of historical vehicle sales information. Precise market value assessments for critical for various purposes, such as buying, selling, or evaluating vehicle worth in the Canadian market.."
          title="VEHICLE OWNERSHIP COST API"
          path="/laptop-ownership-cost.png"
          side={false}
        />
      </div>





      < Footer />
    </div>
  );
}


export default DataProduct;