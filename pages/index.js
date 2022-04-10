import react from 'react'
import Head from 'next/head'
import ImageSlider from './imageslider'
import MainNav from '../comps/mainnav'
import AboutServices from './aboutservice'
import Services from './service'
import Email from './email'
import Footer from '../comps/footer/footerindex'
const Home = () => {
  return ( 
   <>
   <Head>
      <title>Laundromat|Home</title>
      <link rel="icon" href="/laundro.ico"/>
      <link rel="stylesheet" href="./globals.css"/>
      <meta name='Keywords' content='Home'/>
    </Head>

    <main>
      <MainNav/>
         <ImageSlider/>
        <AboutServices/> 
        <Services/>
        <Email/>
      <Footer/>
      </main>
    </>  
   )
}  
     
export default Home
