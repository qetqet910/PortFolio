import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Room } from '../public/script/three'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>준비중</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Room></Room>
      </main>
    </div>
  )
}

export default Home
