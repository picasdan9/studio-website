import { GetIsMobile } from 'components/utils';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { navButtons } from './constants';
import NavbarStyles from './NavbarStyles.module.css';

const Navbar: React.FC<Object> = () => {
  const isMobile = GetIsMobile();

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(false);
  }, [isMobile]);

  function computeNavButClassName() {
    if (isMobile !== null) {
      // hide navbar-button only when the viewport is mobile-sized and navbar is not expanded
      if (isExpanded || !isMobile) return NavbarStyles['navbar-button'];
      return NavbarStyles['navbar-button'] + ' hidden';
    }
  }

  return (
    <nav>
      {isMobile === null ? (
        <div />
      ) : (
        <ol className={!isMobile ? NavbarStyles['navbar-desktop'] : ''}>
          <li
            className={NavbarStyles['navbar-button']}
            onClick={() => isMobile && setIsExpanded(!isExpanded)}
          >
            <Link href=''>
              <a>dan n. tran</a>
            </Link>
          </li>
          {navButtons.map(({ label, path }) => (
            <li key={path} className={computeNavButClassName()}>
              <Link href={path}>
                <a>{label}</a>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
};

export default Navbar;
