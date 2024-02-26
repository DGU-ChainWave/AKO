import React from 'react';
import BlueSubtitle from '../../components/BlueSubtitle';
import PageLayoutNavBlue from '../../components/PageLayoutNavBlue';
import { members } from '../../utils/members';

export const AboutUs = () => {
  return (
    <PageLayoutNavBlue>
      <BlueSubtitle subtitle={'학회 소개'} />
      <img src="assets/Logo2.png" alt="logo" className="w-[129px] mt-3" />
      <h1 className="text-[35px] font-extrabold">
        Chain<span className="text-blue">Wave</span>
      </h1>
      <h2 className="w-[361px] text-[16.55px] text-center break-keep mt-2 px-2">
        ChainWave는{' '}
        <strong className="text-blue font-semibold">
          블록체인 개발 중심의 학회
        </strong>
        로, <span className="text-blue">Web3.0 시대</span>에 맞춰 깊이 있는 이론
        및 실습을 중심으로 공부하며 나아가{' '}
        <span className="text-blue">‘차세대 블록체인 생태계 리더’</span>로서
        성장을 목표로 하는 학회입니다.
      </h2>
      <div className="max-w-[430px] w-screen flex flex-wrap justify-evenly gap-y-5 gap-x-2 my-10 px-5">
        {members.map(item => (
          <div>
            <div className="flex justify-center items-center text-[#F18434] text-center">
              <img
                src={`assets/role/${item.role}.png`}
                alt={item.role}
                className="inline-block w-[28px] pb-1 pr-1"
              />
              {item.role}
            </div>
            <div
              className={
                item.members.length != 1 &&
                'grid grid-cols-3 place-items-center justify-items-center gap-y-2'
              }
            >
              {item.members.map(member => (
                <div className="flex flex-col justify-center text-center">
                  <img
                    src={`assets/member/${member.name}.png`}
                    alt={member.name}
                    className="h-[115px] object-contain object-bottom"
                  />
                  <div className="text-[12px] mt-2">{member.department}</div>
                  <div>{member.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageLayoutNavBlue>
  );
};
