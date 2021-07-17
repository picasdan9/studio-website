import { useState } from 'react';
import styles from 'styles/Home.module.css'

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(true);

  return (
    <div className={`${styles.navbar} ${navbarState && styles.responsive}`}>
      <div>dan n. tran</div>
      <div>texts</div>
      <div>images</div>
      <div>contact</div>
      <div
        className={styles['navbar-button']}
        onClick={() => setNavbarState(!navbarState)}
      >
        {navbarState ? 'v' : '^'}
      </div>
    </div>
  );
};

