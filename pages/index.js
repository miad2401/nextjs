import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>De'shon Mcneil</title>
      </Head>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>
            Welcome!
          </h1>
        </div>
        <div className={styles.spacer}></div>
        <div>
          <p className={styles.description}>
            I'm De'shon Mcneil, a wearer of many hats including:<br></br>
            software developer, artist, and game developer.<br></br>
            I strive to provide engaging experiences that inspire<br></br>
            others to be creative and think outside the norm.
          </p>
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.grid}>
          <a href="https://miad2401.itch.io/" className={styles.card}>
            <h3>Games</h3>
            <p>Find all of my current publicly released games.</p>
          </a>

          <a href="https://github.com/miad2401" className={styles.card}>
            <h3>Programming</h3>
            <p>Find all of my current and past software projects.</p>
          </a>

          <a href="https://www.deviantart.com/miad2401" className={styles.card}>
            <h3>Art</h3>
            <p>Discover my artwork.</p>
          </a>
        </div>
        <div className={styles.spacer}></div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
