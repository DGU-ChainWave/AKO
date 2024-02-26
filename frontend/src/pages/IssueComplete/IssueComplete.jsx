import React from 'react';
import { useNavigate } from 'react-router';
import FireworkBackground from '../../components/FireworkBackground';

export const IssueComplete = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center h-svh">
      <FireworkBackground />
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-[270px] h-[270px] bg-gradient-to-br from-white to-rose-300 rounded-[20px]">
          <img
            className="w-[220px] object-contain mx-auto"
            src="assets/아코/아코4.png"
            alt="아코 이미지"
          />
        </div>
        <h1 className="text-2xl m-5 w-[245px] text-black font-bold">
          나는야 멋쟁이 아코!
        </h1>

        <button
          className="justify-center items-center inline-flex gap-2"
          onClick={() => navigate('/vote')}
        >
          <div className="text-xl text-black font-bold">다음으로</div>
          <img src="assets/right.svg" alt="SVG 이미지" />
        </button>
      </div>
    </div>
  );
};
