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
      // hide only when the viewport is mobile-sized and navbar is not expanded
      let classname = NavbarStyles['navbar-button'];
      if (isMobile && !isExpanded) classname += ' hidden';
      return classname;
    }
    return '';
  }

  function computeMobileNavMenuClassName() {
    if (isMobile !== null) {
      // hide only when the viewport is not mobile-sized or navbar is expanded
      let classname = NavbarStyles['mobile-nav-menu'];
      if (!isMobile || isExpanded) classname += ' hidden';
      return classname;
    }
    return '';
  }

  return (
    <nav>
      {isMobile === null ? (
        <div />
      ) : (
        <>
          <div
            onClick={() => isMobile && setIsExpanded(!isExpanded)}
            className={computeMobileNavMenuClassName()}
          >
            <a href='#'>dt</a>
          </div>
          <ol className={!isMobile ? NavbarStyles['navbar-desktop'] : ''}>
            {navButtons.map(({ label, path }) => (
              <li key={path} className={computeNavButClassName()}>
                <Link href={path}>
                  <a>{label}</a>
                </Link>
              </li>
            ))}
          </ol>
        </>
      )}
    </nav>
  );
};

export default Navbar;
