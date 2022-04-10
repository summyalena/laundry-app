import React from 'react'
import Head from 'next/head'
import styles from '../styles/dashboard.module.css'
import Header from '../comps/header/Header'
import Headers from '../comps/headers/headers'
import Navbar from '../comps/navbar/navbar'
import Flow from '../comps/flow/flow'
const flowone = () => {
  return (
      <>
      <Head>
          <title> Laundromat|Dashboard</title>
          <meta name='keywords' content='Project'/>
      </Head>
      <Header/>
     
      <div className={styles.dashcontainer}>
        <div className={styles.header}>
      <Navbar/> 
      <Headers/>
       <Flow/>
      
       </div>
          </div> 
          </>
 
  )
};

export default flowone;
