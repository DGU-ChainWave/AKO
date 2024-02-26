import React from 'react';
import BlueSubtitle from '../../components/BlueSubtitle';

export default function Story() {
  return (
    <main className="w-screen flex flex-col items-center gap-2.5 overflow-x-hidden">
      <img
        src="/assets/bg_story.png"
        className="absolute z-[-1] top-0 max-w-[430px] w-screen h-[130vh] max-h-fit"
      />

      <BlueSubtitle subtitle={'뿌우 이야기'} />

      <div className="flex relative items-center max-w-[430px] w-screen gap-3">
        <p className="absolute text-[28px] font-bold text-[#ff8a00] top-[21px] left-[26px]">
          친절한
        </p>
        <p className="text-[48px] text-[#ff8a00] font-extrabold top-[60px] left-[120px] absolute rotate-6">
          뿌우~
        </p>
        <div className="flex-1 w-[350px] h-[318px] rounded-r-full bg-[#FFF0CF] relative left-0 mt-20 z-[-1] overflow-hidden">
          <img
            src="/assets/story_ako_2.png"
            alt="ako"
            className="absolute top-1 right-10 h-[318px] object-contain scale-150"
          />
        </div>
        <p className="flex-1 text-[17px] mr-5 mt-20 break-keep">
          친절한 뿌우는 어느날 태어났어요. 이런! 뿌우가 너무 귀여워서 심장이
          터질 것 같아요. 흑흑
        </p>
      </div>

      <div className="relative flex items-center max-w-[430px] w-screen top-[-70px] gap-3">
        <p className="flex-1 text-[17px] text-right break-keep ml-5">
          친절한 뿌우는 어느날 태어났어요. 이런! 뿌우가 너무 귀여워서 심장이
          터질 것 같아요. 흑흑
        </p>
        <div className="flex-1 relative h-[380px] rounded-l-full bg-[#FFF0CF] overflow-hidden">
          <img
            src="/assets/story_ako_1.png"
            alt="ako"
            className="absolute top-[55px] left-[30px] w-[266px] h-[291px] object-contain scale-130"
          />
        </div>
      </div>
    </main>
  );
}
