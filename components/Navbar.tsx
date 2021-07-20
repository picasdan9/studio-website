import React, { useState } from 'react';
import styles from 'styles/Home.module.css'

import NavButton from './NavButton';

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(true);

  return (
    <div className={`${styles.navbar} ${navbarState && styles.expanded}`}>
      {navButtons.map(button => (
        <NavButton
          key={button.path}
          path={button.path}
          label={button.label}
        />
      ))}
      <div
        className={styles['navbar-toggle']}
        onClick={() => setNavbarState(!navbarState)}
      >
        {navbarState ? 'v' : '^'}
      </div>
    </div>
  );
};

const navButtons = [
  {
    label: "dan n. tran",
    path: "/"
  },
  {
    label: "texts",
    path: "/texts"
  },
  {
    label: "works",
    path: "/works"
  },
  {
    label: "contact",
    path: "/contact"
  }
];