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
    <div className="w-screen h-screen flex flex-col items-center relative bg-white">
      <div className="absolute top-[77px] flex flex-col gap-3 z-0">
        <p className="text-[28px] font-bold text-[#ff8a00]">뿌우와 놀아보자!</p>
        <p className="text-[14px] font-bold text-[#4e4e4e]">
          뿌우의 NFT를 발급받아보세요~!
        </p>
      </div>
      {isInfoModalOpen && <InfoModal />}
      <div className="absolute top-[615px] flex flex-col items-center gap-7">
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
        <p className="text-[13px] font-bold text-center">
          <span> Klip 이 없다면 ? </span>
          <button className="text-[#06F] underline" onClick={clickInfo}>
            {' '}
            알아보기{' '}
          </button>
        </p>
      </div>
      <div className="absolute top-[752px] w-[360px]">
        <div className="flex gap-1 h-[36px] p-1">
          <img src="assets/sponsor_logo/spon-0.png" alt="spon logo" />
          <img src="assets/sponsor_logo/spon-1.png" alt="spon logo" />
          <img src="assets/sponsor_logo/spon-2.png" alt="spon logo" />
          <img src="assets/sponsor_logo/spon-3.png" alt="spon logo" />
          <img src="assets/sponsor_logo/spon-4.png" alt="spon logo" />
        </div>
        <div className="flex gap-1 h-[36px]">
          <img src="assets/sponsor_logo/spon-5.png" alt="spon logo" />
          <img src="assets/sponsor_logo/spon-6.png" alt="spon logo" />
          <img src="assets/sponsor_logo/spon-7.png" alt="spon logo" />
          <img src="assets/sponsor_logo/spon-8.png" alt="spon logo" />
          <img src="assets/sponsor_logo/spon-9.png" alt="spon logo" />
          <img src="assets/sponsor_logo/spon-10.png" alt="spon logo" />
        </div>
      </div>
    </div>
  );
}
