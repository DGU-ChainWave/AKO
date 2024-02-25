import React from 'react';

function PageLayout({ children }) {
  return (
    <div className="w-screen h-svh flex justify-center overflow-x-hidden">
      {children}
    </div>
  );
}

export default PageLayout;
