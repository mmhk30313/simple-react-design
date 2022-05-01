import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import PrimaryLayout from '../components/Layouts/PrimaryLayout/PrimaryLayout';
import MainContent from '../components/MainContent/MainContent';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <body>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <React.Fragment>
        <PrimaryLayout>
          <div className={styles.nav_parent}>
            <div className={styles.side_nav}>
            </div>
            <div className={styles.container + " " + styles.main_bg}>
              <div className={styles.head_nav}>
              </div>
              <MainContent />
            </div>
          </div>
        </PrimaryLayout>
      </React.Fragment>
      
    </body>
  )
}

export default Home
