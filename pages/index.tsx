import Navbar from 'components/Navbar'
import Head from 'next/head'
import React from 'react'
import styles from 'styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dan N. Tran</title>
      </Head>
      
      <main className={styles.main}>
        <Navbar />
      </main>

    </div>
  )
}
