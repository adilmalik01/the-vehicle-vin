import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { PhoneLandscape } from "react-bootstrap-icons"

const ContactUs = () => {
    return (<>

        < Navbar />
        <div className="w-full min-h-[50vh] bg-[#28386F] flex justify-center items-center text-center ">
            <h1 className="text-[65px] text-white vinCheckFont">Contact</h1>
        </div>
        <div className="w-full min-h-[70vh] grid md:grid-cols-3  max-md:grid-cols-1 max-md:gap-5 max-md:py-5  place-items-center">
            <div className="w-[340px] max-md:w-4/5  h-[230px] border-2 border-[#cdcdce] rounded-3xl">

            </div>
            <div className="w-[340px]  max-md:w-4/5 h-[230px] border-2 border-[#cdcdce] rounded-3xl">

            </div>
            <div className="w-[340px] max-md:w-4/5  h-[230px] border-2 border-[#cdcdce] rounded-3xl">

            </div>
        </div>
        <div className="w-full min-h-screen flex justify-center ">
            <div className="w-[80%] max-sm:w-[95%] min-h-[100vh] rounded-[40px] p-5  shadow-2xl">
                <form className="flex flex-col  items-center">
                    <div className="w-4/5">
                        <h1 className="onlyFont py-3 text-[25px] font-bold">Feel Free To Contact & Reach Us !!</h1>
                    </div>
                    <div className="flex w-[80%]  flex-col gap-6 items-center">
                        <input placeholder="Your Name.." className="w-full h-[54px] rounded-3xl bg-[#F8F8F8] outline-none placeholder:text-gray-400 placeholder:onlyFont placeholder:font-medium placeholder:text-[16px]  p-3 border  " type="text" />
                        <input placeholder="Your Email.." className="w-full h-[54px] rounded-3xl bg-[#F8F8F8] outline-none placeholder:text-gray-400 placeholder:onlyFont placeholder:font-medium placeholder:text-[16px]  p-3 border  " type="text" />
                        <input placeholder="Phone Number.." className="w-full h-[54px] rounded-3xl bg-[#F8F8F8] outline-none placeholder:text-gray-400 placeholder:onlyFont placeholder:font-medium placeholder:text-[16px]  p-3 border  " type="text" />
                        <textarea placeholder="Enter Your Message.." className="w-full resize-none h-[150px] rounded-3xl bg-[#F8F8F8] outline-none placeholder:text-gray-400 placeholder:onlyFont placeholder:font-medium placeholder:text-[16px]  p-3 border  " name="" id=""></textarea>
                        <div className="w-full ">
                            <button className="w-[50%]  max-md:w-full   text-white h-[55px] rounded-3xl bg-[#303030] outline-none  p-3 border ">SUBMIT</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <Footer />
    </>);
}


export default ContactUs;