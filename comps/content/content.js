import React from 'react';
import styles from '../content/content.module.css'
import {useRouter} from 'next/router'
const content = () => {
  const route = useRouter()
  const onClick = ()=>{
      route.push("/flowone")
  }
  return (
  <div className="ml-28 flex flex-wrap">
       <div className="flex gap-20 items-center mx-auto mt-10">
         <div className="flex justify-evenly items-center shadow-xl br-15">
         <input onClick={onClick} className={styles.tabs} type='submit' value='Machine One'/>
           </div>

           <div className={styles.tab}>
           <input onClick={onClick} className={styles.tabs} type='submit' value='Machine Two'/>
           </div>

           <div className={styles.tab}>
           <input onClick={onClick} className={styles.tabs} type='submit' value='Machine Three'/>
           </div>
          
       </div>

  </div>
  )
}

export default content
