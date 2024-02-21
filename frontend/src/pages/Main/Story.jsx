import React from "react";

export default function Story() {
  return (
    <div className="w-screen h-screen flex flex-col items-center relative gap-2.5">
      <img src="/assets/bg_story.png" className="absolute z-0 h-screen" />
      <div className="relative mt-[76px] flex items-center gap-[7px]">
        <hr className="w-[144px] h-[3px] bg-[#1428EB]" />
        <div className="w-[7px] h-[7px] border-2 border-[#1428eb]" />
        <hr className="w-[144px] h-[3px] bg-[#1428EB]" />
      </div>
      <p className="relative text-3xl text-center text-[#0041ff]">뿌우 이야기</p>
      <div className="relative flex flex-col items-start w-[390px]">
        <p className="text-[28px] font-bold text-[#ff8a00] mt-[21px] ml-[26px]">친절한</p>
        <div className="w-[380px] h-[318px] rounded-full bg-[#FFF0CF] absolute left-[-190px] top-[79px]"></div>
        <img src="/assets/story_ako_2.png" alt="ako" className="absolute top-[106px] left-[-109px] w-[311px] h-[277px] object-cover"/>
        <p className="relative text-[55px] text-[#ff8a00] ml-[127px]">뿌우~</p>
        <p className="relative w-[183px] text-[17px] mt-[30px] ml-[206px]">
          친절한 뿌우는 어느날 태어났어요 이런! 뿌우가 너무 귀여워서 심장이 터질 것 같아요 흑흑
        </p>  
        <div className="w-[350px] h-[390px] rounded-full bg-[#FFF0CF] absolute left-[206px] top-[320px]"></div>
        <img src="/assets/story_ako_1.png" alt="ako" className="absolute top-[383px] left-[193px] w-[266px] h-[291px] object-cover"/>
        <p className="relative w-[183px] text-[17px] mt-[230px] ml-[18px]">
          친절한 뿌우는 어느날 태어났어요 이런! 뿌우가 너무 귀여워서 심장이 터질 것 같아요 흑흑
        </p>
      </div>
    </div>
    );
}