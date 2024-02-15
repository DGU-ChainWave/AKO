import React from 'react';

function FireworkBackground() {
  return (
    <div className="absolute z-[-1] w-full h-full bg-gradient-to-b from-orange-300 via-amber-100 to-amber-100 ">
      {/* 폭죽 이미지 */}
      <img className="-z-1 w-full h-full" src="폭죽.png" alt="폭죽 이미지" />
    </div>
  );
}

export default FireworkBackground;
