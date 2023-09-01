import React, { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <div>
      <header className="bg-pink-200">
        <div>Header</div>
        <div onClick={() => setIsOpen(!isOpen)}>
          <BsBag />
        </div>
      </header>
    </div>
  );
};

export default Header;
