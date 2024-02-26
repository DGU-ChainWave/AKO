import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import PageLayoutNavOrange from '../../components/PageLayoutNavOrange';
import LongButtonOrange from '../../components/Button/LongButtonOrange';

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
    <PageLayoutNavOrange>
      <div className="relative flex flex-col items-center mt-[140px] mb-[120px]">
        <div className="text-[22px] text-[#FF6F50] absolute top-[-30px] left-4 font-extrabold animate-scaleUpDown">
          두근두근
        </div>
        <div className="text-[22px] text-[#FF6F50] absolute top-[-60px] right-4 font-extrabold animate-scaleUpDownRight">
          콩닥콩닥
        </div>
        <div className="md:text-10xl lg:text-22xl xl:text-2xl font-extrabold text-[#ff8900] text-[28.4px] tracking-[0] leading-loose underline underline-offset-12 decoration-wavy">
          &nbsp;랜덤 BOX 열기&nbsp;
        </div>
        <img
          className="ml-10 w-[315px] h-[253px]  object-cover"
          alt="Image"
          src="assets/box.png"
        />
        <div className="m-5 top-0 left-0 font-bold text-black text-[14.2px] tracking-[0] leading-[normal] mt-11">
          Tip. {randomTip}
        </div>
        <LongButtonOrange
          type={'submit'}
          buttonName={'NFT 발급받기'}
          onClick={() => navigate('/randomOngoing')}
        />
      </div>
    </PageLayoutNavOrange>
  );
};
