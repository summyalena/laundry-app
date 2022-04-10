import React from 'react'
import { Element } from 'react-scroll'
import Link from 'next/link'
import Image from 'next/image'
import Imageone from '../public/imageone.jpg'
function imageslider() {
  
  return (
    <Element id="imageslider" name="imageslider">
      <div className=" ">

        <div className=' w-full pt-20 md:pt-0 h-full'>

    <div className=" w-full px-2 md:relative md:w-4/4  py-40 md:py-60 h-full relative" >
         <Image className="bg-top  cursor-pointer md:block shadow-xl" src={Imageone} layout="fill" alt="image" objectFit="cover"/>
             <div className="w-2/4 h-70 flex flex-col font-500 space-y-5 md:w-1/4 md:h-40 md:mx-20 mx-10 ml-10 relative">
             <h3 className="text-left font-roboto text-xl md:text-3xl font-bold text-white flex-wrap ">DO YOUR DRY CLEANING AND LAUNDRY ONLINE</h3>
  <Link href='/login' activeClass= "imageslider" to= "Login">
    <input className="bg-green-600 rounded-lg mx-3 md:p-5 font-serif w-2/4 h-3/4 
              text-white font-normal hover:bg-red-600"type='submit' value="Order Now"/>
  </Link>  
               </div>
          </div>
      
    
 </div>
    </div>
   
     </Element>
   )
}

export default imageslider;