import React from "react";
import PageLayoutNavBlue from "../../components/PageLayoutNavBlue";
import BlueSubtitle from "../../components/BlueSubtitle";

export default function HowToUse() {
  return (
    <PageLayoutNavBlue>
        <BlueSubtitle subtitle={'이용안내'} />
        <div className="absolute w-[380px] h-[800px]">
            <div className="absolute w-[19px] h-[19px] bg-[#0041FF] rounded-full flex justify-center items-center top-[70px]">
                <p className="w-[7.81px] h-[14.5px] text-[12.187760353088379px] font-black text-left text-white">
                    1
                </p>
            </div>
            <div className="absolute w-[19px] h-[19px] bg-[#0041FF] rounded-full flex justify-center items-center top-[320px]">
                <p className="w-[7.81px] h-[14.5px] text-[12.187760353088379px] font-black text-left text-white">
                    2
                </p>
            </div>
            <div className="absolute w-[19px] h-[19px] bg-[#0041FF] rounded-full flex justify-center items-center top-[580px]">
                <p className="w-[7.81px] h-[14.5px] text-[12.187760353088379px] font-black text-left text-white">
                    3
                </p>
            </div>
        </div>
        <div className="flex flex-col gap-3 m-3">
            <div className="w-[360px] h-[243px] rounded-[10px] bg-[#fff] border border-[#e5f2ff] flex justify-center items-center p-1" >
                <img src="/assets/howtouse/step1.png" alt="step 1" className="w-full object-cover" />
            </div>
            <div className="w-[360px] h-[243px] rounded-[10px] bg-[#fff] border border-[#e5f2ff] flex justify-center items-center p-1">
                <img src="/assets/howtouse/step2.png" alt="step 2" className="w-full object-cover" />
            </div>
            <div className="w-[360px] h-[243px] rounded-[10px] bg-[#fff] border border-[#e5f2ff] flex justify-center items-center p-1">
                <img src="/assets/howtouse/step3.png" alt="step 3" className="w-full object-cover" />
            </div>
        </div>
    </PageLayoutNavBlue>
  );
}