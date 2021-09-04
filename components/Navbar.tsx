import Link from 'next/link';
import React, { useState } from 'react';
import styles from 'styles/Home.module.css';

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={
        styles['navbar'] + (isExpanded ? ` ${styles['expanded']}` : '')
      }
    >
      <div
        className={styles['navbar-button']}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Link href='/'>dan n. tran</Link>
      </div>
      {navButtons.map((button) => (
        <div key={button.path} className={styles['navbar-button']}>
          <Link href={button.path}>{button.label}</Link>
        </div>
      ))}
    </div>
  );
}

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
