import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return ( 
       <div className='header'>
             <div className='leftnav'>
            <Image src='/LAUNDROMAT(1).jpg' width={60} height={60} className='image'/>  
          <h2>Laundromat</h2>
            </div>     
           <div className='rightnav'>
              <Link href='/All Categories'><a> All Categories</a></Link>
             <Link  href='/'><a>Home</a></Link>
             <Link href='/about'><a>About</a></Link>
             </div>
             <div className='register'>
             <Link href='/register'><a className='rega'>Register</a></Link>
             </div>
        </div>
     )
}
 
export default Navbar