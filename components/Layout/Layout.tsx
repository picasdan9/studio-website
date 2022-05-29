import Navbar from 'components/Navbar';
import Head from 'next/head';
import React from 'react';

const Layout: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
    </Head>

    <Navbar />
    <main>{children}</main>
  </>
);

export default Layout;
