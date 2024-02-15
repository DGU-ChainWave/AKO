import React from 'react';
import { useNavigate } from 'react-router';

export const RandomOngoing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 w-full">
      <img className="sm:h-[100px] w-full h-[130px]" src="Bgtop.png" alt="위 배경" />
      </header>

      <div className="flex-1 flex items-center justify-center">
        <div className="fixed bg-white flex flex-col items-center justify-center">
          <img
            className="ml-10 w-[400px] h-[325px]  object-cover"
            alt="Image"
            src="box.png"
          />
          <button
            className="m-3 w-[318px] h-[42px] bg-[#ff8900] font-bold text-white text-[17px] text-center tracking-[-0.30px] leading-[normal] p-[10px] rounded-[30px]"
            onClick={() => navigate('/issueComplete')}
          >
            열기
          </button>
        </div>
      </div>
      <footer className="fixed bottom-0 w-full">
      <img className="sm:h-[100px] w-full h-[130px]" src="Bgbottom.png" alt="아래 배경" />
      </footer>
    </div>
  );
};
