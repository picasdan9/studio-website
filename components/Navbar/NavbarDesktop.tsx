import Link from 'next/link';
import React from 'react';

import { navButtons } from './constants';
import NavbarStyles from './NavbarStyles.module.css';

const NavbarDesktop: React.FC<Object> = () => {
  return (
    <div className={NavbarStyles['navbar-desktop']}>
      <div className={NavbarStyles['navbar-button']}>
        <Link href='/'>
          <a>dan n. tran</a>
        </Link>
      </div>
      {navButtons.map(({ label, path }) => (
        <div key={path} className={NavbarStyles['navbar-button']}>
          <Link href={path}>
            <a>{label}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavbarDesktop;
