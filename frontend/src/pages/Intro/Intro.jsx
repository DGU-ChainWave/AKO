import React from "react";
import { Link } from "react-router-dom";
import aco from "../../assets/아코.png";
import aco3 from "../../assets/아코３ｄ.png";

export default function Intro() {
    return (
        <div
  className="items-center w-[393px] h-[852px] relative overflow-hidden"
  style={{
    background:
      "linear-gradient(to bottom, #fecd93 0%, rgba(255,174,76,0.58) 0.01%, #ffa234 99.98%)",
  }}
>
  <Link to="/main">
  <img
    src={aco3}
    className="w-[369px] h-[490px] absolute left-1 top-[274px] object-cover"
  />
  </Link>
  <p className="w-[335.68px] h-[69px] absolute left-[93px] top-[133px] text-[52.86956024169922px] font-bold text-left text-white">
    A-KO NFT
  </p>
  <p className="w-[223px] h-[31px] absolute left-[104px] top-[282px] text-[25.25615882873535px] font-bold text-left text-white">
    화면을 터치하세요!
  </p>
  <div className="w-[297px] h-[136px] absolute left-[45px] top-[729px] bg-[#d9d9d9]" />
  <img src={aco} className="w-[73px] h-[69px] absolute left-[11px] top-[121px] object-cover" />
</div>
    );
}