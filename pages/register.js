import React from 'react'
import {useState} from 'react'
import styles from '../comps/form/form.module.css'
import Head from 'next/head'
import Footer from '../comps/footer/footregister'
// import {Element} from 'next-scroll'
import Link from 'next/link'

function Register() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordreg,setPasswordreg] = useState("")
    return ( 
      // <Element id='register' name='register'>
        <>
        <Head>
            <title>Laundromat|Register</title>
            <metadata name='keywords' content='register'/>
        </Head>
        <div className={styles.containerform}>
           <form className={styles.form}>
         <div className={styles.formhead}>
    <h3>Sign Up</h3>
    </div>  
    <div className={styles.iinput}>
        <input type='text' className={styles.input} onChange={(e)=>setUsernameReg(e.target.value)} placeholder='Name' required/>
    </div>
    <div className={styles.iinput}>
        <input type='password' className={styles.input} onChange={(e)=>setPasswordreg(e.target.value)} placeholder='Password' required/>
    </div>
 <div className={styles.checked}>
     <input type='checkbox' required/> <p className={styles.p}>i read and agree to <a>Terms & Conditions</a></p>
 </div>
 <div className={styles.formbtn}>
 <button onClick={register} className={styles.createbtn}> Create Account </button>
     </div>
     <div className={styles.signin}>
         <p>Already have an account? <Link href='/login'><a>Sign in</a></Link></p>
     </div>   
     </form>
     </div>
          <Footer/>
          </>
     );
}
export default Register
