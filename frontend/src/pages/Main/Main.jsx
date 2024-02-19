import React from "react";

export default function Main() {
    return (
      <div className="w-screen h-screen flex flex-col items-center relative">
        <div className="absolute top-3.5 flex items-center w-[363px] h-[39px]">
          <img src="Logo.png" alt="logo" className="absolute left-0"/>
          <img src="list.svg" alt="list icon" className="absolute right-0"/>
        </div>
        <div className="absolute top-[77px] flex flex-col gap-3">
          <p className="text-[28px] font-bold text-[#ff8a00]">뿌우와 놀아보자!</p>
          <p className="text-[14px] font-bold text-[#4e4e4e]">
            뿌우의 NFT를 발급받아보세요~!
          </p>
        </div>
        <div className="absolute top-[615px] flex flex-col items-center gap-7">
          <div className="flex justify-center items-center w-[318px] h-[42px] p-2.5 rounded-[30px] bg-[#ff971b]">
            <p className="text-[17px] font-bold text-center text-white"> 카카오톡 Klip 연동하기 </p>
          </div>
          <p className="text-[13px] font-bold text-center">
            <span> Klip 이 없다면 ? </span>
            <button className="text-[#06F] underline"> 알아보기 </button>
          </p>
        </div>
        <div className="absolute top-[752px] w-[360px]">
          <div className="flex gap-1 h-[36px] p-1">
            <img src="assets/sponsor_logo/spon-0.png" alt="spon logo" />
            <img src="assets/sponsor_logo/spon-1.png" alt="spon logo" />
            <img src="assets/sponsor_logo/spon-2.png" alt="spon logo" />
            <img src="assets/sponsor_logo/spon-3.png" alt="spon logo" />
            <img src="assets/sponsor_logo/spon-4.png" alt="spon logo" />
          </div>
          <div className="flex gap-1 h-[36px]">
            <img src="assets/sponsor_logo/spon-5.png" alt="spon logo" />
            <img src="assets/sponsor_logo/spon-6.png" alt="spon logo" />
            <img src="assets/sponsor_logo/spon-7.png" alt="spon logo" />
            <img src="assets/sponsor_logo/spon-8.png" alt="spon logo" />
            <img src="assets/sponsor_logo/spon-9.png" alt="spon logo" />
            <img src="assets/sponsor_logo/spon-10.png" alt="spon logo" />
          </div>        
        </div>   
      </div>
    );
}