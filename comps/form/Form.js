import Link from 'next/link'
import styles from '../form/form.module.css'
import {useState} from 'react'
import Loginform from '../form/loginform'
import { useRouter } from 'next/router'
const form =()=>{
    const router = useRouter();
    const [Name,setName] = useState('')
    const [number,setNumber] = useState('')
    const [password, setPassword] = useState(' ')
    const [checkbox, setCheckbox] = useState(false)  
    const [showForm, setShowForm] = useState(true)

    const onSubmit = (e)=>{
        e.preventDefault()
        if(!Name) {   
            alert('There is an empty field') 
        } if(!number){
            alert('There is an empty field')
        } if(!password){
            alert('There is an empty field')
        } if(!checkbox){
            alert('Click on the checkbox')
        }
        else{
            setTimeout(() => {
                setShowForm(false) 
                router.push("/login") 
 
            }, 500);
            
        }
        }
    return(
        <> 

         {showForm ? (
                 
             <div className={styles.containerform}>
<form className={styles.form} onSubmit={onSubmit}>
<div className={styles.formhead}>
    <h3>Sign Up</h3>
    </div>  
    {/* adding mapping here */}
    {/* { Form.map ((item) => <> */}
    <div className={styles.iinput}>
        <input value={Name} type='text' className={styles.input} onChange={(e)=>setName(e.target.value)} placeholder='Name' required/>
    </div>
    <div className={styles.iinput}>
        <input value={number} type='number' className={styles.input} onChange={(e)=>setNumber(e.target.value)} placeholder='Registration Number' required/>
    </div>
    <div className={styles.iinput}>
        <input value={password} type='password' onChange={(e)=>setPassword(e.target.value)} className={styles.input} placeholder='Password' required/>
    </div>
 <div className={styles.checked}>
     <input value={checkbox} type='checkbox' onChange={(e)=>setCheckbox(e.currentTarget.checked)} required/> <p className={styles.p}>i read and agree to <a>Terms & Conditions</a></p>
 </div>
 <div className={styles.formbtn}>
 < input type='submit' name='create Account'  value='create account'onClick={onSubmit} className={styles.createbtn}/>
     </div>
     <div className={styles.signin}>
         <p>Already have an account? <Link href='/login'><a>Sign in</a></Link></p>
     </div>   
</form>
</div> 
         )
       :  (
   <Loginform RegNumber={number} password={password} />   )  }
   {/* </>
    ) */}
     </>  
    )
}
    async function getStaticProps(context){
         const res = await fetch("https://localhost:3000/api/Form");
         const Form = await res.json();

         return {
             props: {Form}
         }
    };
   
export default form 