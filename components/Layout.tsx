import NavBar from 'components/Navbar';
import { Page } from 'lib/models';
import Head from 'next/head';
import styles from 'styles/Home.module.css';

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
      <NavBar />
      <div className={styles['page-container']}>{children}</div>
    </main>
  </div>
);

export default Layout;
