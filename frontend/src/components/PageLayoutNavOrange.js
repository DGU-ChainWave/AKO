import React from 'react';
import PageLayoutNav from './PageLayoutNav';

const PageLayoutNavOrange = ({ children }) => {
  return (
    <PageLayoutNav>
      <header className="absolute z-[-1] top-0 w-full">
        <img
          className="sm:h-[70px] w-full h-[130px]"
          src="Bgtop.png"
          alt="위 배경"
        />
      </header>
      {children}
      <footer className="absolute z-[-1] bottom-0 w-full">
        <img
          className="sm:h-[70px] w-full h-[130px]"
          src="Bgbottom.png"
          alt="아래 배경"
        />
      </footer>
    </PageLayoutNav>
  );
};

export default PageLayoutNavOrange;
