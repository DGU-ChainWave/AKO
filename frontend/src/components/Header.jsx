import React, { useState } from "react";
import MenuModal from "./Modal/MenuModal";

export default function Header() {
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
    const clickInfo = () => setIsInfoModalOpen(!isInfoModalOpen);
    const clickMenu = () => setIsMenuModalOpen(!isMenuModalOpen);

    return(
        <div className="flex justify-center">
            <div className="absolute top-3.5 flex items-center w-[363px] h-[39px] z-40">
        <a href="/main" aria-label="go to main" className="absolute left-0">
          <img src="Logo.png" alt="logo"/>
        </a>
        <button onClick={clickMenu} className="absolute right-0 flex justify-center">
          <img src="list.svg" alt="list icon" />
        </button>
        {isMenuModalOpen && <MenuModal onClose={setIsMenuModalOpen} />}
      </div>
        </div>
    );
}