import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#334276] min-h-[80vh] text-[14px] footerFont text-white p-10 flex justify-between flex-col">
      <div className="w-[100%] flex  justify-center items-center">
        <a href="/">
          <Image src="/white-logo.png" alt="logo" width={170} height={80} />
        </a>
      </div>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4  gap-12">
        {/* Left Section */}
        <div>
          <h4 className="text-white font-light	 text-[18px]">THE VEHICLEVIN</h4>
          <p className="mt-2 text-white/75">
            Unlock the history of any vehicle with "TheVehicleVin," offering
            transparent and reliable VIN lookup services for buyers and sellers
            alike.
          </p>
        </div>

        {/* Contact Section */}
        <div className="">
          <h4 className=" text-white font-light	 text-[18px]">CONTACT US</h4>
          <p className="mt-2 text-white/75">info@thevehiclevin.com</p>
          <p className=" text-white/75">+1 (613) 912-3633</p>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="text-white font-light	 text-[18px] ">SERVICES</h4>
          <ul className="mt-2 space-y-2 text-white/75">
            <li>Vin Check</li>
            <li>Dealer Programme</li>
            <li>Data Product</li>
            <li>Contacts</li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="w-[200px] flex flex-col  flex-wrap">
          <h4 className=" text-white font-light	 text-[18px]">SUBSCRIBE</h4>
          <p className="mt-2 text-white/75 break-words">
            Get our weekly newsletter for latest car news, exclusive offers and
            deals, and more.
          </p>
          <div className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Your Email..."
              className="px-2 w-[150px] outline-none h-[40px]  rounded-[50px] text-gray-900"
            />
            <button className=" text-white/75  h-[40px] text-[14px]  bg-[#303030] text-white px-2  rounded-[50px] hover:bg-gray-700">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex w-[100%]  justify-center items-center  mt-10 text-white/75">
        <div className="flex w-[80%] text-[15px]  justify-between border-gray-700 border-t  items-center">
          <div>
            <p className="text-center text-sm">
              Copyright © 2024. All rights reserved.
            </p>
          </div>
          <div className="flex justify-center space-x-6 mt-2 ">
            <a href="#" className="hover:text-gray-300">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-gray-300">
              Refund Policy
            </a>
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
