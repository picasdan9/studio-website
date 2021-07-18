import Head from "next/head";

import NavBar from "components/Navbar";
import styles from 'styles/Home.module.css'

const Layout = (props: PageContent) => (
  <div className="Layout">
    <Head>
      <title>Dan N. Tran</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>

    <main className={styles.main}>
      <NavBar />
      <div className="Content">{props.children}</div>
    </main>
  </div>
);

interface PageContent {
  children: React.ReactNode
}

export default Layout