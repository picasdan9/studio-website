import Head from "next/head";

import NavBar from "components/Navbar";
import styles from 'styles/Home.module.css'
import { Page } from "lib/models";

const Layout = (props: Page) => (
  <div className="Layout">
    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>

    <main className={styles.main}>
      <NavBar />
      <div className="Content">{props.children}</div>
    </main>
  </div>
);

export default Layout