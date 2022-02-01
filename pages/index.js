import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Home = () => {
  return ( 
   <>
   <Head>
      <title>Laundromat|Home</title>
      <meta name='Keywords' content='Home'/>
    </Head>
    <div className={styles.containerindex}>
    <div className={styles.imageslider}>
       <div className={styles.bg}>
           <h3 className={styles.h3}>DO YOUR DRY CLEANING AND LAUNDRY ONLINE</h3>
         <button className={styles.btns}> Order Now</button>
       </div>
    </div>
    <div className={styles.section}>
      <h3 className={styles.h33}>  Ensuring Clean Clothes and Peace of Mind
      </h3>

      <div className={styles.holding}>
        <div className={styles.one}>
           <img src='/bookspace.jpg' width={190} height={190} className={styles.img}/>
          <a className={styles.h5}> Book Spaces  </a> 
          <p className={styles.p}>
            We're a supreme at allowing individuals book laundry machines with ease and convenience
          </p>
          </div>
          <div className={styles.one}>
            <img src='/elaundry.jpeg' width={190} height={190} className={styles.img}/>
        <a className={styles.h5}>   Excellent Results     </a>  
          <p className={styles.p}>
            Provide High Quality laundry machines and take custom orders so you can look and feel jus
          </p>
          </div>
          <div className={styles.one}>
            <img src='/notify.jpg' width={190} height={190} className={styles.img}/>
              <a className={styles.h5}>   Notifications  </a>  
          <p className={styles.p}>
            Current at ensuring you don't miss out on reservations that have been made
          </p>
          </div>  
      </div>
     <div className={styles.btncon}><button className={styles.btnx}> More about us</button> </div> 
    </div>

    <div className={styles.services}>
      <div className={styles.servicehead}>
              <h2 className={styles.h2}> Clean Clothes Have Been This Easy</h2>
             <p className={styles.ps}> How our Services Work: </p>
             </div>
          <div className={styles.servicehold}>
          <div className={styles.signup}>
              <div className={styles.signuphead}>
                  {/* <FaSignInAlt/> */}
                  </div>
                  <div className='signwrite'>
                    <a>Sign Up </a> 
                  </div>
              <div className='signupcont'>
                  <p>In order to order online, you have to sign Up</p>
              </div>
          </div>
        {/* <div className='arrow'><FaArrowRight/> </div>   */}
          <div className={styles.signup}>
              <div className={styles.signuphead}>
                  {/* <FaBook/> */}
              </div>
              <div className='bookwrite'>
                  <a>Book Machines </a> 
                  </div>
              <div className='bookcont'>
                  <p>Once sign up has been made, with ease, you can book any available laundry machine</p>
              </div>
          </div>
          {/* <div className='arrow'><FaArrowRight/> </div>   */}
          <div className={styles.signup}>
              <div className={styles.signuphead}>
                  {/* <FaPaypal/> */}
              </div>
              <div className='paywrite'>
              <a>Cleaning </a> 
                  </div>
              <div className='paycont'>
                  <p>With the use of premium materials, technologies and machines, washing has been made easy</p>
              </div>
          </div>
          </div>
      </div>
      <div className={styles.email}>
             <div className={styles.leftemail}>
               <h2 className={styles.h22}>Don't miss any action!</h2>
               <p className={styles.pp}> Always stay tuned with us at all times.</p>
             </div>
             <div className={styles.rightemail}>
                  <input placeholder='your email address' className={styles.input}/>
                  <button className={styles.emailbtn}> Subscribe</button>
               </div>
      </div>
      
      </div>
    </>  
   )
}  
     
export default Home

