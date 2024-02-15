import React from 'react';
import PageLayout from './PageLayout';
import { useNavigate } from 'react-router-dom';

const PageLayoutNav = ({ children }) => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="mt-[23px] flex w-[363px] h-[39px] justify-center items-center gap-[242px]">
        <img
          src="Logo.png"
          alt="로고"
          onClick={() => navigate('/')}
          className="cursor-pointer"
        />
        <img src="list.svg" alt="list" className="cursor-pointer" />
      </div>
      {children}
    </PageLayout>
  );
};

export default PageLayoutNav;
