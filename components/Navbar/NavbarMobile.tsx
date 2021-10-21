import Link from 'next/link';
import React, { useState } from 'react';

import { navButtons } from './constants';
import NavbarStyles from './NavbarStyles.module.css';

const NavbarMobile: React.FC<Object> = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={NavbarStyles['navbar-mobile']}>
      <div
        className={NavbarStyles['navbar-button']}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Link href=''>
          <a>dan n. tran</a>
        </Link>
      </div>
      {isExpanded ? (
        navButtons.map(({ label, path }) => (
          <div key={path} className={NavbarStyles['navbar-button']}>
            <Link href={path}>
              <a>{label}</a>
            </Link>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavbarMobile;
