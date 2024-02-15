import React from 'react';

const LongButtonOrange = ({ type, onClick, buttonName }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="m-3 w-[318px] h-[42px] bg-[#ff8900] font-bold text-white text-[17px] text-center tracking-[-0.30px] leading-[normal] p-[10px] rounded-[30px]"
    >
      {buttonName}
    </button>
  );
};

export default LongButtonOrange;
