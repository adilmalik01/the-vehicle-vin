"use client";

import Image from "next/image";
import { useState } from "react";
import * as Icon from "react-bootstrap-icons";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-[9999999999]">
      <div className="max-w-7xl m-auto   sm:px-6 lg:px-6">
        <div className="flex items-center justify-between max-md:px-[40px] px-[120px] max-lg:h-[70px]  h-[90px]">
          <div className="flex justify-center">
            <div className="flex-shrink-0">
              <a href="/">
                <Image src="/logo.png" alt="logo" width={140} height={80} />
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center  space-x-3 text-black/80">
            <a
              href="/vin-check"
              className="border-b-[3px] transition-all duration-700 text-[14px] tracking-tight font-semibold border-transparent hover:border-black active:border-black px-3 py-2"
            >
              Vin check
            </a>
            <a
              href="/dealer-program"
              className="border-b-[3px] transition-all duration-700 text-[14px] tracking-tight font-semibold border-transparent hover:border-black px-3 py-2"
            >
              Dealer Program
            </a>
            <a
              href="/data-product"
              className="border-b-[3px] transition-all duration-700 text-[14px] tracking-tight font-semibold border-transparent hover:border-black px-3 py-2"
            >
              Data product
            </a>
            <a
              href="/contact-us"
              className="border-b-[3px] transition-all duration-700 text-[14px] tracking-tight font-semibold border-transparent hover:border-black px-3 py-2"
            >
              Contact us
            </a>
          </div>

          <div className="lg:hidden  flex items-center">
            {isClick ? (
              <button className=" bg-red-300" onClick={toggleNavbar}>
                <Icon.XLg size={25} />
              </button>
            ) : (
              <button onClick={toggleNavbar}>
                <Icon.List size={25} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 ease-out overflow-hidden ${
          isClick ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/vin-check"
            className="border-b-[3px] block transition-all duration-300 tracking-tight font-semibold border-transparent hover:bg-[#33373d] hover:text-white px-3 py-2"
          >
            Vin check
          </a>
          <a
            href="/dealer-program"
            className="border-b-[3px] block transition-all duration-300 tracking-tight font-semibold border-transparent hover:bg-[#33373d] hover:text-white px-3 py-2"
          >
            Dealer Program
          </a>
          <a
            href="/data-product"
            className="border-b-[3px] block transition-all duration-300 tracking-tight font-semibold border-transparent hover:bg-[#33373d] hover:text-white px-3 py-2"
          >
            Data product
          </a>
          <a
            href="/contact-us"
            className="border-b-[3px] block transition-all duration-300 tracking-tight font-semibold border-transparent hover:bg-[#33373d] hover:text-white px-3 py-2"
          >
            Contact us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
