import React from 'react'
import Head from 'next/head'
import Footer from '../comps/footer/footregister'
import {useRouter} from 'next/router'
import styles from '../comps/Form/loginform.module.css'
import Link from 'next/link'
import {useState} from 'react'
// const login = (props) => {
//     const {Form} = props;
//     console.log(Form);
//     return ( 
//         <>
//         <Head>
//             <title>Laundromat|Login</title>
//             <metadata name='keywords' content='register'/>
//         </Head>

//   <Login props={props}/>
//    <Footer/>
//    </>
//     )
// }
// export default login;

const loginForm = (props) => {
  
 
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("") 
       const {Form} = props;
       console.log(Form);
    const router = useRouter();
    const onSubmit = (e)=>{
      if(e.target.value !== item.name || e.target.value !== item.password){
         alert('not correct')
      } else{
      if(!number){
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
        {
               Form.map((item)=> <>
           <div className={styles.inputt}> 
         <input className={styles.input} value={item.name} onChange={(e)=>setNumber(e.target.value)} placeholder='Reg Number' type='text' required/>
         </div>
          <div className={styles.inputt}>
         <input className={styles.input} value={item.password} placeholder='Password' type='password' required/>
      </div>
       </>
               )
}
      <div className={styles.btnlogcon}>
     <input type='submit' className={styles.btnlogin} pointer='cursor' value='Login'/>
      <p className={styles.p}>  Don't have an account ? sign up <br/> <Link href='/dashindex'><a className={styles.a}>Here </a></Link></p>
      </div>
    </form> 
    </div> 
    </>
    )

  }
  
  export default loginForm
  

export async function getStaticProps(context){
    const res = await fetch("http://localhost:3000/api/Form");
    const Form = await res.json();

    return {
      props: {Form}
    };
}
<Footer/>