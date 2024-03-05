import React from "react";

export default function SponsorBox({ color, name, logo, link }) {
    return (
        <div className="relative flex h-[150px]">
            <div className={`w-[103px] h-[59px] rounded-t-[10px] bg-[${color}]`} />
            <div className={`w-[68px] h-[16px] rounded-[10px] bg-[${color}] z-50 absolute left-[107px]`}>
                <p className="text-[10px] font-extrabold text-center text-black">{name}</p>
            </div>
            <div className="w-[72px] h-[19px] bg-[#FFF] rounded-[10px] z-10" />
            <div className={`w-[150px] h-[129px] rounded-tr-lg rounded-br-[5px] bg-[${color}] absolute top-2.5`} />
            <div className={`w-[73px] h-[98px] rounded-tr-lg rounded-br-[5px] bg-[${color}] absolute top-[19px] right-0`} />
            <div className={`w-[144px] h-[39px] rounded-b-[10px] bg-[${color}] absolute top-[111px]`} />
            <div className="w-[33px] h-[33px] bg-[#FFF] rounded-tl-[10px] z-50 absolute top-[116px] right-0 flex justify-center items-center">
                <a href={link}>
                    <div className="w-6 h-6 bg-[#000] rounded-full flex justify-center items-center">
                        <img src="/assets/arrow_white.svg" alt="arrow icon" />
                    </div>
                </a>
            </div>
            <img src={logo} alt="logo" className="absolute w-[91px] h-[56px] top-[48px] left-[44px]" />
        </div>
    );
}