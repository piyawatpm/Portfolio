import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Piyawat's Resume
        </h1>

        <p className={styles.description}>
          Choose Pages
  
        </p>

        <div className={styles.grid}>
          <Link href="/resume">
          <a className={styles.card}>
            <h2>Resume</h2>
            <p>Go to resume page</p>
          </a>
          </Link>
         
        </div>
      </main>

    </div>
  )
}

export default Home
