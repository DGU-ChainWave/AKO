import React from 'react';
import PageLayout from '../../components/PageLayout';
import FireworkBackground from '../../components/FireworkBackground';
import { Link } from 'react-router-dom';

export const VoteComplete = () => {
  return (
    <PageLayout>
      <FireworkBackground />
      <div className="mt-[130px] flex flex-col items-center justify-center text-center">
        <img
          className="flex-shrink-0 pb-[39px] w-[279px] h-[320px] object-contain"
          src="투표.png"
          alt="투표 이미지"
        />
        <p className="pb-[40.95px] text-black font-[NanumSquare\ Neo\ OTF] text-[26.606px] font-extrabold leading-normal">
          <span className="text-black font-[PyeongChangPeace-Bold] text-[26.606px] font-bold leading-normal">
            투표
          </span>
          가 완료되었어요!
        </p>
        <p className="pb-[21px] text-black font-[NanumSquare\ Neo\ OTF] text-[15px] font-bold leading-normal whitespace-pre-wrap">
          {
            '축제가 끝난 후 결과가 공개됩니다! \n 1등을 선택한 분들께 NFT가 하나씩 더 제공됩니다.'
          }
        </p>
        <Link
          to="/home" //후에 홈화면 정해지면 바꾸기
          className="text-black font-[Montserrat] text-[20px] text-[extrabold] underline"
        >
          홈으로
        </Link>
      </div>
    </PageLayout>
  );
};
