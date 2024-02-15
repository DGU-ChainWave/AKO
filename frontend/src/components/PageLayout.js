import React from 'react';

function PageLayout({ children }) {
  return (
    <div className="w-screen h-screen flex justify-center overflow-x-hidden">
      <div className="relative w-[393px] max-h-[852px] flex flex-col items-center overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
