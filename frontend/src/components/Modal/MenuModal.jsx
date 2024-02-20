import React, { useState } from "react";

export default function MenuModal( props ) {
    const { onClose } = props;
    return ( 
        <div className="w-[190px] h-[484px] bg-[#ffffff] border-2 border-[#ffca8b] absolute top-[-14px] right-0">
            <button onClick={() => onClose(false)} className="w-6 h-6 ml-[13px] mt-5 flex justify-center">
                <img src="assets/arrow_left_2.svg" alt="close icon" />    
            </button>
            <div className="mt-4 flex flex-col items-center gap-4">
                <div className="w-[125px] h-[123px] rounded-lg bg-[#FFE8BD]"> image </div>
                <div className="text-[10px] font-bold text-center text-[#585858]">
                    <p>지갑주소</p>
                    <p>000000</p>
                </div>
            </div>
            <div className="mt-6 gap-2 flex flex-col items-center text-[15px] font-bold">
                <a href="/story"> 뿌우의 이야기 </a>
                <div className="w-[157px] h-[1px] bg-[#000000]"></div>
                <a href="/aboutus"> 학회 소개 </a>
                <div className="w-[157px] h-[1px] bg-[#000000]"></div>
                <a href="/vote"> 투표하기 </a>
                <div className="w-[157px] h-[1px] bg-[#000000]"></div>
                <a href="/aboutsponsor"> 협력사 소개 </a>
                <div className="w-[157px] h-[1px] bg-[#000000]"></div>
                <a href="/howtouse"> 이용안내 </a>
                <div className="w-[157px] h-[1px] bg-[#000000]"></div>
            </div>      
        </div>
    );
}