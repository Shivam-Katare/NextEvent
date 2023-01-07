import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({title}) {
  return (
    <div className={styles.container} >
      <Head>
        <title>{title}</title>
        <meta name="description" content="next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <img />
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/about-us">About Us</a>
        </nav>
      </header>

      <main className={styles.main}>
        <a href="/">
          <img />
          <h2> Events In London </h2>
          <p>lorem23 ytuu eieu nivnvnnvn ifijr jdnnd fhfhf rhfh vvh eooe ejejje kbkkb 3teb c jjgjgjjgj</p>
        </a>

          <a href="/india">
          <img />
          <h2> Events In India </h2>
          <p>lorem23 ytuu eieu nivnvnnvn ifijr jdnnd fhfhf rhfh vvh eooe ejejje kbkkb 3teb c jjgjgjjgj</p>
        </a>

          <a href="/usa">
          <img />
          <h2> Events In USA </h2>
          <p>lorem23 ytuu eieu nivnvnnvn ifijr jdnnd fhfhf rhfh vvh eooe ejejje kbkkb 3teb c jjgjgjjgj</p>
        </a>
      </main>

      <footer className={styles.footer}></footer>

    </div>
  )
}

export function getServerSideProps() {
  return  {
    props: {
      title: "Hello"
    }
  }
}