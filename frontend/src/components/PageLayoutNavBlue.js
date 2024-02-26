import React from 'react';

const PageLayoutNavBlue = ({ children }) => {
  return (
    <main className="max-w-[430px] absolute top-0 left-1/2 transform -translate-x-1/2 z-[-1] pt-[60px] w-screen flex flex-col mx-auto items-center bg-gradient-to-b from-[#cde5fe] from-0% via-[#ffffff] via-25% to-[#feecdf] to-100% overflow-x-hidden">
      {children}
    </main>
  );
};

export default PageLayoutNavBlue;
