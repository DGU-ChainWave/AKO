import React from "react";

export default function Intro() {
  return (
    <a href="/main">
      <div className="flex relative justify-center items-center w-screen h-screen bg-gradient-to-b from-[#FECD93] to-[#FFA234]">
        <div className="absolute top-[122px] flex gap-2">
          <img src="assets/akologo.png" alt="ako logo" className="w-[73px] h-[69px]"/>
          <p className="h-[69px] text-[53px] font-bold text-white">
          A-KO NFT
          </p>
        </div>
        <div className="absolute top-[282px] w-full flex flex-col items-center">
          <p className="text-[26px] font-bold text-white">
          화면을 터치하세요!
          </p>
          <img src="assets/ako_3d.png" alt="ako" className="absolute top-0 h-[490px]"/>
          <div className="absolute top-[448px] w-[297px] h-[136px] bg-[#D9D9D9]"></div>
        </div>
      </div>
    </a>
  );
}