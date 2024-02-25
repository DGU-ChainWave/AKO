import React, { useState } from 'react';
import MenuModal from './Modal/MenuModal';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const clickInfo = () => setIsInfoModalOpen(!isInfoModalOpen);
  const clickMenu = () => setIsMenuModalOpen(!isMenuModalOpen);

  return (
    <div className="relative mx-auto max-w-[430px] flex justify-between items-center w-screen z-40 p-3">
      <Link to="/main" aria-label="go to main" className="left-0">
        <img src="Logo.png" alt="logo" className="w-[86px]" />
      </Link>
      <button onClick={clickMenu} className="right-0 flex justify-center pr-1">
        <img src="list.svg" alt="list icon" />
      </button>
      {isMenuModalOpen && <MenuModal onClose={setIsMenuModalOpen} />}
    </div>
  );
}
