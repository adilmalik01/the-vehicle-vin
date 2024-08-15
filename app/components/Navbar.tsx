import Image from "next/image";
import * as Icon from "react-bootstrap-icons"


const Navbar = () => {
  return <nav className="w-full  h-[13vh] flex justify-between px-5 items-center bg-[#FFFFFF]">
    <div className="logo  px-5">
        <Image src="/logo.png" alt="" width={140} height={100}  />
    </div>

    <div className="hamburger">
        <button className=" bg-[#F2F2F2] p-1">
         <Icon.List size={23} fontWeight={900} />
        </button>
    </div>
  </nav>;
};

export default Navbar;
