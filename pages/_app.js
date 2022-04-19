import Head from 'next/head'
import Layout from '../comps/Layout'
import {AuthContextProvider} from '../stores/authContext'

function MyApp({ Component, pageProps }) {
    return (
        <>
        <Head>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" referrerPolicy="no-referrer"/>
            <link href="/dist/output.css" rel="stylesheet"/>
         <meta name='viewport' content='width=device-width, initial-scale=1'/>
        </Head>
        
        <AuthContextProvider>
   <Layout>
    <Component {...pageProps}/> 
    </Layout> 
       </AuthContextProvider>
    </>
    )
}

export default MyApp
