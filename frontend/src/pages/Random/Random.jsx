import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

export const Random = () => {
  const [randomTip, setRandomTip] = useState('');

  useEffect(() => {
    // 랜덤한 팁 생성 함수
    const getRandomTip = () => {
      const tips = [
        'NFT는 주점에서 사용이 가능해요!',
        '뿌우는 2024년에 태어났어요.',
        '카카오톡 클립에서 NFT를 확인할 수 있어요.',
      ];

      const randomIndex = Math.floor(Math.random() * tips.length);
      return tips[randomIndex];
    };

    setRandomTip(getRandomTip());
  }, []);

  const navigate = useNavigate();
  /*@media (min-width: 800px) {
    font-size: 30px;
  }*/

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 w-full ">
        <img
          className="sm:h-[70px] w-full h-[130px]"
          src="Bgtop.png"
          alt="위 배경"
        />
      </header>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="fixed flex flex-col items-center justify-center  ">
          <div className="md:text-10xl lg:text-22xl xl:text-2xl font-extrabold text-[#ff8900] text-[28.4px] tracking-[0] leading-[normal] ">
            랜덤 BOX 열기
          </div>
          <img
            className="ml-10 w-[315px] h-[253px]  object-cover"
            alt="Image"
            src="box.png"
          />
          <div className="m-5 top-0 left-0  font-bold text-black text-[14.2px] tracking-[0] leading-[normal]">
            Tip. {randomTip}
          </div>
          <button
            className="m-3 w-[318px] h-[42px] bg-[#ff8900] font-bold text-white text-[17px] text-center tracking-[-0.30px] leading-[normal] p-[10px] rounded-[30px]"
            onClick={() => navigate('/randomOngoing')}
          >
            NFT 발급받기
          </button>
        </div>
      </div>
      <footer className="fixed bottom-0 w-full">
        <img
          className="sm:h-[70px] w-full h-[130px]"
          src="Bgbottom.png"
          alt="아래 배경"
        />
      </footer>
    </div>
  );
};
