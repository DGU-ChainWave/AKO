import React from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../../assets/images/Ppoo';

export default function Intro() {
  return (  
    <Link to="/main">
      <div className="max-w-[430px] mx-auto flex flex-col gap-[30px] justify-center items-center w-screen h-svh bg-gradient-to-b from-[#FECD93] to-[#FFA234]">
        <div className="flex gap-2 items-center pt-[15px]">
          <img
            src="assets/akologo.png"
            alt="ako logo"
            className="w-[73px] h-[69px]"
          />
          <p className="h-[69px] text-[45px] font-bold text-white">A-KO NFT</p>
        </div>
        <div className="w-full flex flex-col items-center gap-[25px]">
          <p className="text-[20px] font-bold text-white animate-pulse pt-[20px]">
            화면을 터치하세요!
          </p>
          {/* <img src="assets/ako_3d.png" alt="ako" className="w-[280px]" />*/}
          <Canvas style={{height: '50vh' }}>
            <OrbitControls autoRotate={true}/>
            <ambientLight intensity={7} />
            <group scale={[1.5,1.5,1.5]} rotation-y={-Math.PI / 2}>
              <Model />
            </group>
          </Canvas>
          {/* <div className="absolute top-[448px] w-[297px] h-[136px] bg-[#D9D9D9]"></div> */}
        </div>
      </div>
    </Link>
  );
}
