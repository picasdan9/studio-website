import { GetIsMobile } from 'components/utils';
import React from 'react';

import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const Navbar: React.FC<Object> = () => {
  const isMobile = GetIsMobile();
  return isMobile === null ? (
    <div />
  ) : isMobile === true ? (
    <NavbarMobile />
  ) : (
    <NavbarDesktop />
  );
};

export default Navbar;
