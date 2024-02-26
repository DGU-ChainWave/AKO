import React from 'react';

const BlueSubtitle = ({ subtitle }) => {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex justify-center items-center gap-[7px] mt-2">
        <hr className="w-[144px] h-[3px] bg-[#1428EB]" />
        <div className="w-[7px] h-[7px] border-2 border-[#1428eb]" />
        <hr className="w-[144px] h-[3px] bg-[#1428EB]" />
      </div>
      <p className="text-3xl text-center text-[#0041ff]">{subtitle}</p>
    </div>
  );
};

export default BlueSubtitle;
