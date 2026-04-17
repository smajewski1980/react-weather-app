import React from "react";
import UnitsDropdown from "./UnitsDropdown";

const Header = () => {
  return (
    <>
      <header>
        <img
          src='../src/assets/images/logo.svg'
          alt='weather now'
        />
        <UnitsDropdown />
      </header>
    </>
  );
};

export default Header;
