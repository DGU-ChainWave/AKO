import React, { useState } from 'react';
import InfoModal from '../../components/Modal/InfoModal';
import axios from 'axios'; // HTTP 통신
import { useNavigate } from 'react-router-dom'; // 카카오톡 Klip 연동 성공시 NFT 발급페이지 Random.jsx로 이동 위함

export default function Main() {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const clickInfo = () => setIsInfoModalOpen(!isInfoModalOpen);

  // 카카오톡 Klip 연동하기 관련
  const [loading, setLoading] = useState(false);
  const [klipAppDeepLink, setKlipAppDeepLink] = useState('');
  const navigate = useNavigate();

  const getAddress = callback => {
    setLoading(true);

    axios
      .post('https://a2a-api.klipwallet.com/v2/a2a/prepare', {
        bapp: {
          name: 'A-KO NFT',
        },
        type: 'auth',
      })
      .then(response => {
        const { request_key } = response.data;

        const deepLink = `kakaotalk://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
        setKlipAppDeepLink(deepLink);

        let timerId = setInterval(() => {
          axios
            .get(
              `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`,
            )
            .then(res => {
              if (res.data.result) {
                const walletAddress = res.data.result.klaytn_address;
                clearInterval(timerId);
                console.log('Wallet Address:', walletAddress);
                setLoading(false);
                navigate('/random'); // 연동 성공 시 NFT 발급 페이지로 이동
              }
            })
            .catch(err => {
              console.error('Error getting result:', err);
              clearInterval(timerId);
              setLoading(false);
            });
        }, 1000);
      })
      .catch(error => {
        console.error('Error preparing Klip request:', error);
        setLoading(false);
      });
  };

  // 카카오톡 Klip 연동하기 관련
  return (
    <div className="w-screen flex flex-col items-center bg-white overflow-hidden">
      <h1 className="text-[28px] font-bold text-[#ff8a00] mt-5">
        뿌우와 놀아보자!
      </h1>
      <h2 className="text-[14px] font-bold text-[#4e4e4e]">
        뿌우의 NFT를 발급받아보세요~!
      </h2>
      <main>
        <div className="flex relative max-w-[430px] w-screen min-h-[460px] bg-[url('./assets/bg_main.png')] bg-contain bg-no-repeat bg-center">
          <img
            src="/assets/story_ako_2.png"
            alt="ako"
            className="absolute top-[136px] left-[-40px] h-[244px] object-contain z-0"
          />
          <img
            src="/assets/story_ako_1.png"
            alt="ako"
            className="absolute top-[35px] right-[-10px] h-[234px] object-contain z-0"
          />
        </div>
        <div className="flex flex-col items-center gap-3">
          {klipAppDeepLink ? (
            <a
              href={klipAppDeepLink}
              className="flex justify-center items-center w-[318px] h-[42px] p-2.5 rounded-[30px] bg-[#ff971b] text-[17px] font-bold text-center text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              카카오톡 Klip 연동하기
            </a>
          ) : (
            <button
              className="flex justify-center items-center w-[318px] h-[42px] p-2.5 rounded-[30px] bg-[#ff971b]"
              onClick={getAddress}
            >
              <p className="text-[17px] font-bold text-center text-white">
                카카오톡 Klip 연동하기
              </p>
            </button>
          )}
          <p className="text-[13px] font-bold text-center mb-[50px]">
            <span> Klip 이 없다면 ? </span>
            <button className="text-[#06F] underline" onClick={clickInfo}>
              알아보기
            </button>
          </p>
        </div>
      </main>
      <footer className="mx-auto p-2">
        <div className="flex gap-2 justify-center items-center h-[36px] p-1">
          <img
            src="assets/sponsor_logo/spon-0.png"
            alt="spon logo"
            className="w-[80px] h-[34px]"
          />
          <img
            src="assets/sponsor_logo/spon-2.png"
            alt="spon logo"
            className="w-[49px] h-[29px]"
          />
          <img
            src="assets/sponsor_logo/spon-1.png"
            alt="spon logo"
            className="w-[55px] h-[23px]"
          />
          <img
            src="assets/sponsor_logo/spon-4.png"
            alt="spon logo"
            className="w-[79px] h-[22px]"
          />
          <img
            src="assets/sponsor_logo/spon-9.png"
            alt="spon logo"
            className="w-[65px] h-[28px]"
          />
        </div>
        <div className="flex justify-center items-center gap-2 h-[36px]">
          <img
            src="assets/sponsor_logo/spon-3.png"
            alt="spon logo"
            className="w-[81px] object-contain"
          />
          <img
            src="assets/sponsor_logo/spon-8.png"
            alt="spon logo"
            className="w-[32px] h-[32px]"
          />
          <img
            src="assets/sponsor_logo/spon-10.png"
            alt="spon logo"
            className="w-[54px] h-[30px]"
          />
          <img
            src="assets/sponsor_logo/spon-7.png"
            alt="spon logo"
            className="w-[75px] h-[25px]"
          />
          <img
            src="assets/sponsor_logo/spon-5.png"
            alt="spon logo"
            className="w-[34px] h-[29px]"
          />
          <img
            src="assets/sponsor_logo/spon-6.png"
            alt="spon logo"
            className="w-[48px] h-[18px] object-contain"
          />
        </div>
      </footer>
      {isInfoModalOpen && <InfoModal />}
    </div>
  );
}
