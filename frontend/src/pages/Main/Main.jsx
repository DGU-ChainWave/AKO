import React from "react";
import { Link } from "react-router-dom";
import logoimage from "../../assets/image-20.png";
import aco2 from "../../assets/아코２.png";
import aco3 from "../../assets/아코３.png";

export default function Main() {
    return (
        <div className="w-[393px] h-[852px] relative overflow-hidden bg-white">
  <div className="w-[318px] h-[42px]">
    <div className="flex justify-center items-center w-[318px] h-[42px] absolute left-[43px] top-[615px] gap-2.5 p-2.5 rounded-[30px] bg-[#ff971b]">
      <p className="flex-grow-0 flex-shrink-0 text-[17px] font-bold text-center text-white">
        카카오톡 Klip 연동하기
      </p>
    </div>
  </div>
  <p class="absolute left-[136px] top-[685px] text-[13px] font-bold text-center">
    <span class="text-[13px] font-bold text-center text-black">Klip 이 없다면 ? </span>
    <span class="text-[13px] font-bold text-center text-[#06f]">알아보기</span>
    <span class="text-[13px] font-bold text-center text-black"> </span>
  </p>
  <svg
  width="393"
  height="460"
  viewBox="0 0 393 460"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
  class="absolute top-[143px]"
>
  <path
    d="M133.612 413.538C-65.3529 531.8 -185.428 253.409 -86.8818 96.2272C-44.9467 29.3407 12.3977 -43.3669 99.8768 32.0186C171.335 93.5977 207.81 8.39184 268.547 21.7349C320.623 33.1754 384.46 10.5247 428.787 46.1585C521.451 120.651 583.922 125.214 514.163 305.821C503.424 333.625 523.372 427.661 435.334 455.642C330.175 489.064 279.171 316.171 133.612 413.538Z"
    fill="url(#paint0_linear_5_580)"
    fill-opacity="0.4"
  />
  <defs>
    <linearGradient
      id="paint0_linear_5_580"
      x1="291.913"
      y1="452.863"
      x2="8.31602"
      y2="144.922"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FF9900" />
      <stop offset="0.615" stop-color="#FFCA74" />
      <stop offset="1" stop-color="#FFE8BD" />
    </linearGradient>
  </defs>
</svg>
  <p className="absolute left-[126px] top-[78px] text-[28.350341796875px] font-bold text-left text-[#ff8a00]">
    아코코코코코코
  </p>
  <p className="w-[292px] h-8 absolute left-28 top-[120px] text-[13.921875px] font-bold text-left text-[#4e4e4e]">
    뿌우의 NFT를 발급받아보세요~!
  </p>
  <img
    src={aco3}
    className="w-[254px] h-[234px] absolute left-[-51px] top-[300px] object-cover"
  />
  <svg
    width={48}
    height={1}
    viewBox="0 0 48 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[219px] top-[694px]"
    preserveAspectRatio="none"
  >
    <line y1="0.5" x2="47.0425" y2="0.5" stroke="#0066FF" />
  </svg>
  <img src={aco2} className="w-[196px] h-56 absolute left-[237px] top-[211px] object-cover" />
  <div className="w-[363px] h-[39px] absolute left-[15px] top-3.5">
    <svg
      width={35}
      height={30}
      viewBox="0 0 35 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[35px] h-[30px] absolute left-[328px] top-1"
      preserveAspectRatio="none"
    >
      <path
        d="M11.6666 7.5L30.625 7.5"
        stroke="#121219"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M11.6666 15L30.625 15" stroke="#121219" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M11.6666 22.5L30.625 22.5"
        stroke="#121219"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4.73954 16.5625C5.74631 16.5625 6.56246 15.8629 6.56246 15C6.56246 14.1371 5.74631 13.4375 4.73954 13.4375C3.73277 13.4375 2.91663 14.1371 2.91663 15C2.91663 15.8629 3.73277 16.5625 4.73954 16.5625Z"
        fill="#121219"
      />
      <path
        d="M4.73954 9.0625C5.74631 9.0625 6.56246 8.36295 6.56246 7.5C6.56246 6.63706 5.74631 5.9375 4.73954 5.9375C3.73277 5.9375 2.91663 6.63706 2.91663 7.5C2.91663 8.36295 3.73277 9.0625 4.73954 9.0625Z"
        fill="#121219"
      />
      <path
        d="M4.73954 24.0625C5.74631 24.0625 6.56246 23.3629 6.56246 22.5C6.56246 21.6371 5.74631 20.9375 4.73954 20.9375C3.73277 20.9375 2.91663 21.6371 2.91663 22.5C2.91663 23.3629 3.73277 24.0625 4.73954 24.0625Z"
        fill="#121219"
      />
    </svg>
    <img
      src={logoimage}
      className="w-[86px] h-[39px] absolute left-[-1px] top-[-1px] object-cover" 
    />
  </div>
</div>
    );
}