import Head from 'next/head'
import Mainnav from '../comps/mainnav'
import Navbar from '../comps/sidenavbar/sidenavbar'
import Content from '../comps/content/content'
const Dashboard = () => {
    return (  
        <>
        <Head>
            <title>Laundromat|Dashboard</title>
            <meta name="keywords" content="Project"/>
        </Head>
        <Mainnav/>  
        <div>
            <div>
                <Navbar/>
                <Content/>
                </div>
             </div>
          </>
    )
}
 
export default Dashboard