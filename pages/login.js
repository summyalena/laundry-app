import React from 'react'
import Head from 'next/head'
import axios from "axios"
import Footer from '../comps/footer/footregister'
import {useRouter} from 'next/router'
import LoginForm from '../comps/form/loginform'
import styles from '../comps/Form/loginform.module.css'
import Link from 'next/link'
import {useEffect} from 'react'
const login = () => {
    const onSubmit = (e)=>{
        if(!name){
          alert('Please input Reg Number')
         } if(!password){
           alert('Please input Password')
         } 
         else {
           // e.preventDefault()
          router.push("/dashindex")
          alert('This has gone')
         }
         
       }     
    const Effect=()=>{
   useEffect(()=>{
       axios.get("http://localhost:3001/users").then((response)=>{
           console.log(response);
       })
   }, []);
}
    return (
      <>
      <Head>
          <title>Laundromat|Login</title>
          <metadata name="keywords" content="register"/>
      </Head>       
       
      <div className={styles.containerlogin}>
<form className={styles.login} onSubmit={onSubmit}>
      <div className={styles.loginhead}><h3>Login</h3></div>
      
         <div className={styles.inputt}>
       <input className={styles.input} value="name" placeholder='name' type='text' required/>
       </div>
        <div className={styles.inputt}>
       <input className={styles.input} value="passowrd" placeholder='Password' type='password' required/>
    </div>
     
    <div className={styles.btnlogcon}>
   <input type='submit' className={styles.btnlogin} pointer='cursor' value='Login'/>
    <p className={styles.p}>  Don't have an account ? sign up <br/> <Link href='/dashindex'><a className={styles.a}>Here </a></Link></p>
    </div>
  </form> 
  </div> 
<Footer/>
</>
    )
}

export default login;