import Head from 'next/head'
import styles from '../styles/About.module.css'

const About = () => {
    return ( 
    <>  <Head>
      <title>Laundromat|About</title>
      <meta name='Keywords' content='Home'/>
    </Head>
        <div className={styles.about}> 
            <h2 className={styles.h2}>About Page</h2>
         
         <p>Here all you need to know about about page </p>
            </div>
            </>
     );
}
 
export default About