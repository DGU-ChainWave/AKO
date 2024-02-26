import React from 'react';
import { useNavigate } from 'react-router';
import PageLayoutNavOrange from '../../components/PageLayoutNavOrange';
import LongButtonOrange from '../../components/Button/LongButtonOrange';

export const RandomOngoing = () => {
  const navigate = useNavigate();

  return (
    <PageLayoutNavOrange>
      <div className="bg-white flex flex-col items-center justify-center h-svh">
        <img
          className="ml-10 w-[380px] object-contain mt-5"
          alt="Image"
          src="assets/box.png"
        />
        <LongButtonOrange
          type={'submit'}
          buttonName={'열기'}
          onClick={() => navigate('/issueComplete')}
        />
      </div>
    </PageLayoutNavOrange>
  );
};
