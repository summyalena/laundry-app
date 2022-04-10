import {useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
const Notfound = () => {
    const router = useRouter();
    useEffect(()=>{
          setTimeout(() => {
              router.push('/')
          }, 10000);
    }, [])
   
    return (  
        <div className="nfound">
          <h2>Error?......</h2> 
          <p>Page you just requested not found</p> 
          <p>Click <Link href='/'><a className='link'> here</a></Link> to go the Home Page</p>        
        </div>
    );
}
 
export default Notfound;
