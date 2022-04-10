import React from 'react'
import Form from '../comps/form/Form'
import Head from 'next/head'
import Footer from '../comps/footer/footregister'
// import {Element} from 'next-scroll'

function Register() {
    return ( 
      // <Element id='register' name='register'>
        <>
        <Head>
            <title>Laundromat|Register</title>
            <metadata name='keywords' content='register'/>
        </Head>
          <Form/>
          <Footer/>
        </>
        // </Element>
     );
}
export default Register
