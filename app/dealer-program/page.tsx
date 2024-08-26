import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import Image from "next/image";

const DealerProgram = () => {
    return (
        <div>
            <Navbar />
            <h1 className="text-[55px] px-[110px] onlyFont font-extrabold">Dealer Program</h1>
            <div className="bg-[#334276] flex justify-center items-center text-center w-full h-[23vh]">
                <h1 className="text-[25px] text-white onlyFont font-bold" >DEALER PROGRAM: OVERVIEW</h1>
            </div>
            <div className="w-full justify-center min-h-[100vh] flex ">

                <div className="w-[300px] min-h-[70vh] pr-10 flex flex-col items-center gap-9 ">
                    <h1 className="onlyFont mt-8 py-5 text-[19px] font-extrabold">FEATURED PARTNERS</h1>
                    <Image
                        className="object-cover "
                        src="/dealerwebsites.png"
                        alt="logo"
                        width={180}
                        height={100}
                    />
                    <Image
                        className="object-cover "
                        src="/dodah2.png"
                        alt="logo"
                        width={180}
                        height={100}
                    />

                    <Image
                        className="object-cover "
                        src="/asns-resized-2.jpg"
                        alt="logo"
                        width={180}
                        height={100}
                    />

                    <Image
                        className="object-cover "
                        src="/AutoSoft-Icon-For-Site.jpg"
                        alt="logo"
                        width={180}
                        height={100}
                    />
                    <Image
                        className="object-cover "
                        src="/vinviper.png"
                        alt="logo"
                        width={180}
                        height={100}
                    />
                </div>

                <div className="w-[780px] min-h-[70vh]">
                    <div className="">
                        <h1 className="onlyFont mt-8 py-5 text-[22px] font-bold">A FRESH TAKE ON VEHICLE HISTORY</h1>
                        <p className="footerFont text-[#414141] mt-2 text-[17px]">
                            Considering vehicle history options for your dealership? The good news is that there’s a new player in town. Now you can subscribe to VinAudit’s vehicle history reports from official Canada government sources, with enhanced coverage of critical issues, without the big-name cost. It’s about time!
                        </p>

                        <h1 className="onlyFont mt-5 py-5 text-[20px] font-semibold">Features and Benefits</h1>
                    </div>

                    <div className="flex items-start bg-white p-4">
                        <div className="mr-4 flex justify-center h-[90px] w-[20%]  items-center">
                            <Image src="/title-icon.gif" alt="Checklist Icon" width={78} height={48} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Official Government Data Sources</h3>
                            <p className="text-gray-600 mt-2">
                                Offer reports sourced from provincial departments of transportation and other official agencies from 12 provinces and territories (excluding NT).
                            </p>
                        </div>
                    </div>


                    <div className="flex items-start bg-white p-4">
                        <div className="mr-4 flex justify-center h-[90px] w-[20%]  items-center">
                            <Image src="/title-icon.gif" alt="Checklist Icon" width={78} height={48} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Official Government Data Sources</h3>
                            <p className="text-gray-600 mt-2">
                                Offer reports sourced from provincial departments of transportation and other official agencies from 12 provinces and territories (excluding NT).
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start bg-white p-4">
                        <div className="mr-4 flex justify-center h-[90px] w-[20%]  items-center">
                            <Image src="/title-icon.gif" alt="Checklist Icon" width={78} height={48} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Official Government Data Sources</h3>
                            <p className="text-gray-600 mt-2">
                                Offer reports sourced from provincial departments of transportation and other official agencies from 12 provinces and territories (excluding NT).
                            </p>
                        </div>
                    </div>


                    <div className="flex items-start bg-white p-4">
                        <div className="mr-4 flex justify-center h-[90px] w-[20%]  items-center">
                            <Image src="/title-icon.gif" alt="Checklist Icon" width={78} height={48} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Official Government Data Sources</h3>
                            <p className="text-gray-600 mt-2">
                                Offer reports sourced from provincial departments of transportation and other official agencies from 12 provinces and territories (excluding NT).
                            </p>
                        </div>
                    </div>
                </div>


            </div>

            < Footer />
        </div>
    );
}


export default DealerProgram;