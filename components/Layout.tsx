import CustomNavBar from 'components/Navbar';
import { Page } from 'lib/models';
import Head from 'next/head';
import styles from 'styles/Home.module.css';

const Layout = (props: Page) => (
  <div className='Layout'>
    <Head>
      <title>{props.title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
    </Head>

    <main className={styles.main}>
      <CustomNavBar />
      <div>{props.children}</div>
    </main>
  </div>
);

export default Layout;
