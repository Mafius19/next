import React, { FC } from 'react'
import { Inter } from 'next/font/google'
import styles from './MainLayout.module.css'
import Head from 'next/head'
import { Navbar } from '../Navbar'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  children: JSX.Element
}

const MainLayout: FC<Props> = ({children}) => {
    return (
        <>
          <Head>
            <title>Contact - Matias</title>
            <meta name="contact" content="Contact Page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar/>
          <main className={`${styles.main} ${inter.className}`}>
            {children}
          </main>
        </>
      )
}


export default MainLayout

