import React from 'react';

const PageLayoutNavBlue = ({ children }) => {
  return (
    <main className="absolute top-0 z-[-1] pt-[60px] w-screen flex flex-col items-center bg-gradient-to-b from-[#cde5fe] from-0% via-[#ffffff] via-25% to-[#feecdf] to-100% overflow-x-hidden">
      {children}
    </main>
  );
};

export default PageLayoutNavBlue;
