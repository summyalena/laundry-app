import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/register.module.css'
import {useState} from 'react'
const Register = () => {
   const onSubmit = ()=>{
        if(!text) {
            alert('input all fields')
        }
    }
    const [text,setText] = useState('')
    return ( 
        <>
        <Head>
            <title>Laundromat|Register</title>
            <metadata name='keywords' content='register'/>
        </Head>
        <div className={styles.containerform}>
          <div className={styles.form}>
          <div className={styles.formhead}>
              <h3>Sign Up</h3>
              </div>  
              <div className={styles.iinput}>
                  <input type={text} className={styles.input} placeholder='Name'/>
              </div>
              <div className={styles.iinput}>
                  <input type='number' className={styles.input} placeholder='Registration Number'/>
              </div>
              <div className={styles.iinput}>
                  <input type='password' required='required' className={styles.input} placeholder='password'/>
              </div>
           <div className={styles.checked}>
               <input type='checkbox'/> <p className={styles.p}>i read and agree to <a>Terms & Conditions</a></p>
           </div>
           <div className={styles.formbtn}>
                <button onClick={()=>onSubmit} className={styles.createbtn}>CREATE ACCOUNT</button>
               </div>
               <div className={styles.signin}>
                   <p>Already have an account? <Link href='login.com'><a>Sign in</a></Link></p>
               </div>
        </div>
        </div>
        </>
     );
}
export default Register
