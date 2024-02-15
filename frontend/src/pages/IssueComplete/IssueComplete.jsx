import React from 'react';
import { useNavigate } from 'react-router';

export const IssueComplete = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen ">
      <div
        style={{ zIndex: '-2' }}
        className="fixed w-full h-full bg-gradient-to-b from-orange-300 via-amber-100 to-amber-100"
      >
        {/* 폭죽 이미지 */}
        <img
          className="fixed w-full h-full"
          src="폭죽.png"
          alt="폭죽 이미지"
          style={{ zIndex: '-1' }}
        />
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <div className="mt-[150px] w-[270px] h-[270px] bg-gradient-to-br from-white to-rose-300 rounded-[20px]">
          <img
            className="w-[270px] h-[290px]"
            src="아코/아코1.png"
            alt="아코 이미지"
          />
        </div>
        <h1 className="text-2xl m-5 w-[245px] text-black font-bold">
          나는야 멋쟁이 아코!
        </h1>

        <div className="justify-center items-center inline-flex gap-2">
          <div className="text-xl text-black font-bold">다음으로</div>
          <button
            onClick={() => navigate('/issueComplete')}
            className="rounded-full"
          >
            <img src="right.svg" alt="SVG 이미지" />
          </button>
        </div>
      </div>
    </div>
  );
};
