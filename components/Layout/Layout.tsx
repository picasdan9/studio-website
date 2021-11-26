import Head from 'next/head';
import React from 'react';
import styles from './LayoutStyles.module.css';

import Navbar from 'components/Navbar';

const Layout: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className='Layout'>
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
    </Head>

    <main className={styles.main}>
      <Navbar />
      <div className={styles['page-container']}>{children}</div>
    </main>
  </div>
);

export default Layout;
