import React from 'react';
import Head from 'next/head'
import styles from '../styles/dashboard.module.css'
import MainNav from '../comps/mainnav'
import Headers from '../comps/headers/headers'
import Navbar from '../comps/navbar/navbar'
import Invoice from '../comps/invoice/invoice'
const invoice = () => {
  return (
      <> 
      <Head>
          <title>Laundromat|Invoice</title>
          <meta name='keywords' content='project'/>
      </Head>
      <MainNav/>
       <div className={styles.dashcontainer}> 
           <div> 
         <Navbar/>
         <Headers/>
         <Invoice/>
         </div>
       </div>
       </>
  )
}

export default invoice;
