import React from 'react';
import PageLayoutNav from './PageLayoutNav';

const PageLayoutNavOrange = ({ children }) => {
  return (
    <main className="flex flex-col max-w-[430px] w-screen items-center mx-auto">
      <div className="absolute z-[-1] top-0 max-w-[430px] w-screen">
        <img
          className="sm:h-[100px] w-full h-[130px]"
          src="Bgtop.png"
          alt="위 배경"
        />
      </div>
      {children}
      <div className="z-[-1] w-full">
        <img className="w-full h-[70px]" src="Bgbottom.png" alt="아래 배경" />
      </div>
    </main>
  );
};

export default PageLayoutNavOrange;
