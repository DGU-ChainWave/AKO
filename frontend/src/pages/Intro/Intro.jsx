import React from 'react';
import { Link } from 'react-router-dom';

export default function Intro() {
  return (
    <Link to="/main">
      <div className="flex flex-col gap-[30px] justify-center items-center w-screen h-svh bg-gradient-to-b from-[#FECD93] to-[#FFA234]">
        <div className="flex gap-2 items-center pt-[15px]">
          <img
            src="assets/akologo.png"
            alt="ako logo"
            className="w-[73px] h-[69px]"
          />
          <p className="h-[69px] text-[45px] font-bold text-white">A-KO NFT</p>
        </div>
        <div className="w-full flex flex-col items-center gap-[25px]">
          <p className="text-[20px] font-bold text-white animate-pulse pt-[20px]">
            화면을 터치하세요!
          </p>
          <img src="assets/ako_3d.png" alt="ako" className="w-[280px]" />
          {/* <div className="absolute top-[448px] w-[297px] h-[136px] bg-[#D9D9D9]"></div> */}
        </div>
      </div>
    </Link>
  );
}
