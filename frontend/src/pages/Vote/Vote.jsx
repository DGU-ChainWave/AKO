import React, { useEffect, useState } from 'react';
import PageLayoutNavOrange from '../../components/PageLayoutNavOrange';
import LongButtonOrange from '../../components/Button/LongButtonOrange';

export const Vote = () => {
  const [AcoId, setAcoId] = useState(0);
  const AcoIds = [1, 2, 3, 4];

  const handleClick = imageName => {
    setAcoId(imageName);
  };

  return (
    <PageLayoutNavOrange>
      <div className="flex flex-col items-center mt-[89px]">
        <p className="text-center w-[303px] text-black font-[NanumSquare\ Neo\ OTF] text-[26.606px] font-extrabold leading-normal whitespace-pre-wrap">
          당신의 뿌우에게{'\n'}
          <span className="text-black font-[PyeongChangPeace-Bold] text-[26.606px] font-bold leading-normal">
            투표
          </span>
          하세요!
        </p>
        <div className="mt-[17px] grid grid-cols-2 gap-[12px]">
          {AcoIds.map(imageName => (
            <div
              key={imageName}
              onClick={() => handleClick(imageName)}
              className={`flex justify-center items-center w-[178px] h-[231px] rounded-[20px] ${imageName === AcoId ? 'bg-[#FF8A00]' : 'bg-light-orange'}`}
            >
              <img src={`아코/아코${imageName}.png`} alt="아코" />
            </div>
          ))}
        </div>
        <form action="/VoteComplete">
          <input type="hidden" name="AcoId" value={AcoId} />
          <LongButtonOrange type={'submit'} buttonName={'투표하기'} />
        </form>
      </div>
    </PageLayoutNavOrange>
  );
};
