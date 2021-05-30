import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>De'shon Mcneil</title>
      </Head>

      <section className={styles.navigation}>
        <div className={styles.nav1}>
          <div className={styles.nav2}>
            <div className={styles.nav3}>
              <div className={styles.navName}>
                <a aria-label="Go to De'shon.gg" href="/" title="Go to De'shon.gg" className={styles.navNameLink}>
                <img src="/DMLogo.png" alt="DM Logo" className={styles.dmlogo} />
                </a>
              </div>
              <div className={styles.navButtons}>
                <a href="/about/" className={styles.navLink}>About Me</a>
                <a href="/contact/" className={styles.navLink}>Contact</a>
              </div>
            </div>
          </div>
        </div>
        <section className={styles.navDropDown} style={{height: 0, boxShadow: 0 }}>
          <div style={{height: 120}}></div>
          <section className={styles.navDropMenu}>
            <div className={styles.navDropGrid}></div>
          </section>
        </section>
      </section>

      <main className={styles.main}>
        <div style={{paddingTop: 168, paddingBottom: 72}}>
          <div>
            <h1 className={styles.title}>
              Welcome!
            </h1>
          </div>
          <div className={styles.spacer}/>
          <div>
            <p className={styles.description}>
              I'm De'shon McNeil, a wearer of many hats including:<br></br>
              software developer, artist, and game developer.<br></br>
              I strive to provide engaging experiences that inspire<br></br>
              others to be creative and think outside the norm.
            </p>
          </div>
          <div className={styles.spacer}/>
        </div>
  
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
      </main>
    </div>
  )
}
