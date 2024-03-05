import React from "react";
import BlueSubtitle from '../../components/BlueSubtitle';
import PageLayoutNavBlue from '../../components/PageLayoutNavBlue';
import SponsorBox from "../../components/SponsorBox";

export default function AboutSponsor() {
  return (
    <PageLayoutNavBlue>
      <BlueSubtitle subtitle={'협력사 소개'} />
      <p className="w-[334px] text-[15px] text-center mt-2 mb-4">
        이번 ChainWave의 NFT 프로젝트에 많은 분들이 함께 해주셨습니다. 감사말씀 드립니다.
      </p>
      <div className="gap-[17px] h-[670px] flex flex-wrap justify-center mb-3">
        <SponsorBox color='#75e6ff' name='Red Bull' logo='/assets/sponsor_logo/spon-2.png' link='https://www.redbull.com/kr-ko/' />
        <SponsorBox color='#75e6ff' name='Red Bull' logo='/assets/sponsor_logo/spon-2.png' link='https://www.redbull.com/kr-ko/' />
        <SponsorBox color='#75e6ff' name='Red Bull' logo='/assets/sponsor_logo/spon-2.png' link='https://www.redbull.com/kr-ko/' />
        <SponsorBox color='#75e6ff' name='Red Bull' logo='/assets/sponsor_logo/spon-2.png' link='https://www.redbull.com/kr-ko/' />
        <SponsorBox color='#75e6ff' name='Red Bull' logo='/assets/sponsor_logo/spon-2.png' link='https://www.redbull.com/kr-ko/' />
        <SponsorBox color='#75e6ff' name='Red Bull' logo='/assets/sponsor_logo/spon-2.png' link='https://www.redbull.com/kr-ko/' />
        <SponsorBox color='#75e6ff' name='Red Bull' logo='/assets/sponsor_logo/spon-2.png' link='https://www.redbull.com/kr-ko/' />
        <SponsorBox color='#75e6ff' name='Red Bull' logo='/assets/sponsor_logo/spon-2.png' link='https://www.redbull.com/kr-ko/' />
      </div>
    </PageLayoutNavBlue>
  );
}