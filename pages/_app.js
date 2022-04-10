import Head from 'next/head'
import Layout from '../comps/Layout'

function MyApp({ Component, pageProps }) {
    return (
        <>
        <Head>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" referrerpolicy="no-referrer"/>
            <link href="/dist/output.css" rel="stylesheet"/>
         <meta name='viewport' content='width=device-width, initial-scale=1'/>
        </Head>
   <Layout>
    <Component {...pageProps}/> 
    </Layout> 
    
    </>
    )
}

export default MyApp
