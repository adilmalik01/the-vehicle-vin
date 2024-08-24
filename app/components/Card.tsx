"use client";

const Card = ({ text, icon,title }: any) => {
  return (
    <div className="bg-[#F7F9FB] w-[290px] h-[350px] card">
      <div className="head w-full h-[35%] flex flex-col justify-end pt-3 items-center gap-2">
        {/* <i className="bi bi-check-circle"></i> */}
        {icon}
        <h1 className="font">{title}</h1>
      </div>
      <div className="body text-center  flex justify-center items-center h-[70%] w-full">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
