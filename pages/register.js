import React from 'react'
import styles from '../comps/form/form.module.css'
import Head from 'next/head'
import Footer from '../comps/footer/footregister'
import Form from '../comps/form/Form'
import Link from 'next/link'

function Register() {
  // const [usernameReg, setUsernameReg] = useState("");
  // const [passwordreg,setPasswordreg] = useState("")
    return ( 
      // <Element id='register' name='register'>
        <>
        <Head>
            <title>Laundromat|Register</title>
            <metadata name='keywords' content='register'/>
        </Head>
        <div className={styles.containerform}>
          <Form/>
          <Footer/>
          </div>
          </>
     );
}
export default Register
