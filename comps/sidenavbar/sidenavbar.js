import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faComment, faSignOutAlt, faTachometerAlt} from '@fortawesome/free-solid-svg-icons'
const navbar = () => {
  return (
  <div className={styles.navcontainer}>
         <div className={styles.logo}>
             <h2>Home</h2>
         </div>
     <div className={styles.wrapper}>
         <ul className={styles.ul}>
         <li className={styles.li}>    <FontAwesomeIcon icon={faTachometerAlt} className={styles.icon} style={{width:"20px", height:"20px",cursor:"pointer"}}/>    <Link href='/profile'>Profile</Link></li>
       <li className={styles.li}>    <FontAwesomeIcon icon={faComment} className={styles.icon} style={{width:"20px", height:"20px",cursor:"pointer"}}/>   <Link href='/chatbox'>Complaint</Link></li>
       <li className={styles.li}>   <FontAwesomeIcon icon={faSignOutAlt} className={styles.icon} style={{width:"20px", height:"20px",cursor:"pointer"}}/>   <Link href='/logout'>Logout</Link></li>
         </ul>
     </div>
  </div>
  )
}

export default navbar

    