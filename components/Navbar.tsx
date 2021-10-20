import React from 'react';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const Navbar: React.FC<Object> = () => {
  return (
    <div>
      <NavbarDesktop />
      <NavbarMobile />
    </div>
  );
};

export default Navbar;
