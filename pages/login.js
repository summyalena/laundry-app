import React from 'react'
import Head from 'next/head'
import Footer from '../comps/footer/footregister'
import LoginForm from '../comps/form/loginform'
import styles from '../comps/Form/loginform.module.css'
const login = () => {
    return (
      <>
      <Head>
          <title>Laundromat|Login</title>
          <metadata name="keywords" content="register"/>
      </Head>       
       
      <div className={styles.containerlogin}>
        <LoginForm/>
        <Footer/>
</div>

</>
    )
}

export default login;