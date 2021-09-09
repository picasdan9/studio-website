import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from 'styles/Home.module.css';

const hasWindow = typeof window !== 'undefined';

function getIsSmallScreen() {
  return hasWindow ? window.innerWidth < 576 : null;
}

const Navbar: React.FC<Object> = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(getIsSmallScreen());
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(getIsSmallScreen());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <div
      className={
        styles['navbar'] + (isExpanded ? ` ${styles['expanded']}` : '')
      }
    >
      <div className={styles['navbar-button']}>
        {!isSmallScreen ? (
          <Link href='/'>
            <a>dan n. tran</a>
          </Link>
        ) : isExpanded ? (
          <Link href='/'>
            <a onClick={() => setIsExpanded(false)}>home</a>
          </Link>
        ) : (
          <a onClick={() => setIsExpanded(true)}>dan n. tran</a>
        )}
      </div>
      {navButtons.map(({ label, path }) => (
        <div key={path} className={styles['navbar-button']}>
          <Link href={path}>
            <a onClick={() => setIsExpanded(false)}>{label}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;

const navButtons = [
  {
    label: 'texts',
    path: '/texts',
  },
  {
    label: 'works',
    path: '/works',
  },
  {
    label: 'about',
    path: '/about',
  },
];
