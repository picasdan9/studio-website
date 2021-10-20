import Link from 'next/link';
import React, { useState } from 'react';
import styles from 'styles/Home.module.css';
import { navButtons } from './constants';

const NavbarMobile: React.FC<Object> = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles['navbar-mobile']}>
      <div
        className={styles['navbar-button']}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Link href=''>
          <a>dan n. tran</a>
        </Link>
      </div>
      {isExpanded ? (
        navButtons.map(({ label, path }) => (
          <div key={path} className={styles['navbar-button']}>
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
