import React from "react";

export default function InfoModal() {
    return (
        <div className="w-[334px] h-[360px] relative rounded-[30px] bg-white border-2 border-[#ffb876] absolute top-[242px] flex flex-col items-center z-50">
          <div className="my-[26px] h-auto flex flex-col gap-[20px]">
            <p className="text-xl font-bold text-center text-[#ff8a00]">Klip이란?</p>
            <div className="h-[74px] flex gap-[11px]">
                <img src="assets/klip_logo.png" alt="klip logo" className="w-[94px] h-[75px] rounded-[14px] object-cover"/>
                <div className="flex flex-col gap-[9px]">
                    <p className="w-[190px] text-[11px] font-bold text-[#4e4e4e]">
                    클립이란 클레이튼과 이더리움, 폴리곤 네트워크 등의 디지털 자산을 안전하고 편리하게 관리할 수 있는 지갑입니다.
                    </p>
                    <a href="/useInfo" className="flex justify-center items-center w-[186px] h-[21px] p-1 rounded-[5px] bg-[#ff971b]">
                        <p className="text-[9px] font-bold text-center text-white">
                        자세히 알아보기
                        </p>
                    </a>
                </div>
            </div>
          </div>
          <div className="w-[290px] h-0.5 bg-[#FF971B]"></div>
          <div className="flex flex-col mt-[16.5px] gap-[10px] justify-center">
            <p className="text-xl font-bold text-[#ff8a00] text-center">사용법</p>
            <img src="assets/manual_modal.png" alt="manual" className="w-[312px] h-[114px] ml-[20px]"/>
          </div>
        </div>
    );
}