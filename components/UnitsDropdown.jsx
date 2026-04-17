import React from "react";

const UnitsDropdown = () => {
  return (
    <>
      <div
        aria-role='menu'
        className='units-dropdown-wrapper'
      >
        <div
          className='units-menu-top'
          aria-hidden='true'
        >
          <img
            src='../src/assets/images/icon-units.svg'
            alt='units menu'
          />
          <p>Units</p>
          <img
            src='../src/assets/images/icon-dropdown.svg'
            alt=''
          />
        </div>
      </div>
    </>
  );
};

export default UnitsDropdown;
