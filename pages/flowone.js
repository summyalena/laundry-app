import React from 'react'
import Head from 'next/head'
import styles from '../styles/dashboard.module.css'
import Flow from '../comps/flow/flow'
const flowone = () => {
  return (
      <>
      <Head>
          <title> Laundromat|Dashboard</title>
          <meta name='keywords' content='Project'/>
      </Head>
     
      <div className={styles.dashcontainer}>
        <div className={styles.header}>
      {/* <Navbar/>  */}
       <Flow/>
      
       </div>
          </div> 
          </>
 
  )
};

export default flowone;
