import type { NextPage } from 'next'

import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Piyawat Resume
        </h1>

        <p className={styles.description}>
          Choose Pages
        </p>
        <div className={styles.grid}>
          <Link href="/resume">
          <a className={styles.card}>
            <h2>Resume</h2>
            <p>Go to resume page prefetch</p>
          </a>
          </Link>
          <Link href="/news">
          <a className={styles.card}>
            <h2>News</h2>
            <p>Go to News page</p>
          </a>
          </Link>
          
        </div>
      </main>

    </div>
  )
}

export default Home
