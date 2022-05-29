import { GetIsMobile } from 'components/utils';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { navBtns } from './constants';
import NavbarStyles from './NavbarStyles.module.css';

const Navbar: React.FC<Object> = () => {
  const isMobile = GetIsMobile();

  const [isExpanded, setIsExpanded] = useState(false);
  const [mobileNavMenuClassname, setMobileNavMenuClassname] = useState('');
  const [navBtnClassname, setNavBtnClassname] = useState('');

  useEffect(() => {
    setIsExpanded(false);
  }, [isMobile]);

  useEffect(() => {
    setMobileNavMenuClassname(computeMobileNavMenuClassname());
    setNavBtnClassname(computeNavButClassname());
  }, [isMobile, isExpanded]);

  function computeNavButClassname() {
    if (isMobile !== null) {
      // hide only when the viewport is mobile-sized and navbar is not expanded
      let classname = NavbarStyles['nav-btn'];
      if (isMobile && !isExpanded) classname += ' hidden';
      return classname;
    }
    return '';
  }

  function computeMobileNavMenuClassname() {
    if (isMobile !== null) {
      // hide only when the viewport is not mobile-sized or navbar is expanded
      let classname = NavbarStyles['nav-menu'];
      if (!isMobile) classname += ' hidden';
      if (isExpanded) classname += ' ' + NavbarStyles['nav-menu-expanded'];
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
          <ol className={!isMobile ? NavbarStyles['nav-btn-list-desktop'] : ''}>
            <li className={navBtnClassname}>
              <Link href='/'>
                <a>
                  <b>{isMobile ? 'home' : 'dan n. tran'}</b>
                </a>
              </Link>
            </li>
            {navBtns.map(({ label, path }) => (
              <li key={path} className={navBtnClassname}>
                <Link href={path}>
                  <a>{label}</a>
                </Link>
              </li>
            ))}
          </ol>
          <div
            onClick={() => isMobile && setIsExpanded(!isExpanded)}
            className={mobileNavMenuClassname}
          >
            <a href='#'>
              <b>
                dan n. tran
                <span className={NavbarStyles['nav-menu-btn-icon']}>
                  {isExpanded ? '∧' : '∨'}
                </span>
              </b>
            </a>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
