import React from 'react';
import PageLayoutNav from './PageLayoutNav';

const PageLayoutNavOrange = ({ children }) => {
  return (
    <>
      <div className="absolute z-[-1] top-0 w-full">
        <img
          className="sm:h-[100px] w-full h-[130px]"
          src="Bgtop.png"
          alt="위 배경"
        />
      </div>
      {children}
      <div className="z-[-1] w-full">
        <img
          className="sm:h-[70px] w-full h-[130px]"
          src="Bgbottom.png"
          alt="아래 배경"
        />
      </div>
    </>
  );
};

export default PageLayoutNavOrange;
