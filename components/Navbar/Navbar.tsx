import useWindowDimensions from '@hooks/useDimensions';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { navBtns } from './constants';
import NavbarStyles from './NavbarStyles.module.css';

const Navbar: React.FC<Object> = () => {
  const { width } = useWindowDimensions();
  const isMobile = width === undefined ? null : width < 768;

  const [isExpanded, setIsExpanded] = useState(false);
  const [mobileNavMenuClassname, setMobileNavMenuClassname] = useState('');
  const [navBtnClassname, setNavBtnClassname] = useState('');

  useEffect(() => {
    setIsExpanded(false);
  }, [isMobile]);

  useEffect(() => {
    function computeNavButClassname() {
      if (isMobile !== null) {
        // hide only when the viewport is mobile-sized and navbar is not expanded
        let classname = NavbarStyles['nav-btn'] + ' sans';
        if (isMobile && !isExpanded) classname += ' hidden';
        return classname;
      }
      return '';
    }

    function computeMobileNavMenuClassname() {
      if (isMobile !== null) {
        // hide only when the viewport is not mobile-sized or navbar is expanded
        let classname = NavbarStyles['nav-menu'] + ' sans';
        if (!isMobile) classname += ' hidden';
        if (isExpanded) classname += ' ' + NavbarStyles['nav-menu-expanded'];
        return classname;
      }
      return '';
    }

    setMobileNavMenuClassname(computeMobileNavMenuClassname());
    setNavBtnClassname(computeNavButClassname());
  }, [isMobile, isExpanded]);

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
