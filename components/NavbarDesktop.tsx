import Link from 'next/link';
import React from 'react';
import styles from 'styles/Home.module.css';
import { navButtons } from './constants';

const NavbarDesktop: React.FC<Object> = () => {
  return (
    <div className={styles['navbar-desktop']}>
      <div className={styles['navbar-button']}>
        <Link href='/'>
          <a>dan n. tran</a>
        </Link>
      </div>
      {navButtons.map(({ label, path }) => (
        <div key={path} className={styles['navbar-button']}>
          <Link href={path}>
            <a>{label}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavbarDesktop;
