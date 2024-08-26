import Image from "next/image";

const CarSection = (props: any) => {
    return (
        <div>
            {
                props.side ?
                    (
                        <section className="px-[100px] max-md:px-[20px] mt-5">
                            <div className="container   mx-auto">

                                <div className="flex gap-4  max-md:flex-col  max-md:gap-5 ">

                                    <Image
                                        className="mt-2"
                                        src={props.path}
                                        alt="logo"
                                        width={450}
                                        height={100}
                                    />


                                    <div className=" flex flex-col  ">
                                        <h1 className="onlyFont text-[25px] font-bold">{props.title}</h1>
                                        <p className="onlyFont font-light  text-[#414141] mt-2 text-[18px]">
                                            {props.text}
                                        </p>
                                    </div>



                                </div>
                            </div>
                        </section>
                    )

                    :
     
                    (
                        <section className="px-[100px] max-md:px-[20px] mt-5">
                            <div className="container   mx-auto">

                                <div className="flex gap-6 max-md:flex-col  max-md:gap-5 ">

                                    <div className=" flex flex-col  ">
                                        <h1 className="onlyFont text-[25px] font-bold">{props.title}</h1>
                                        <p className="onlyFont font-light  text-[#414141] mt-2 text-[18px]">
                                            {props.text}
                                        </p>
                                    </div>


                                    <Image
                                        className="mt-2"
                                        src={props.path}
                                        alt="logo"
                                        width={450}
                                        height={100}
                                    />
                                </div>
                            </div>
                        </section>
                    )

            }
        </div>
    )
}

export default CarSection;