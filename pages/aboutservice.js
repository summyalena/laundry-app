import React from 'react'
import {Element} from 'react-scroll'
import Image from 'next/image'
import Book from '../public/bookspace.jpg'
import Notify from '../public/notify.jpg'
import {Link} from 'react-scroll'
import Elaundry from '../public/elaundry.jpeg'

function Aboutservice() {
  return (
    <Element id='aboutservice' name="aboutservice"> 
    <div>
         <div className="bg-gray-50">

           <div className="w-full h-auto my-40 md:pb-20 pt-20 items-center flex flex-col justify-center ">

   <h3 className="font-bold text-center text-2xl text-gray-600  uppercase ">  
               Ensuring Clean Clothes and Peace of Mind
   </h3>

   <div className="flex-col flex  mt-5 md:flex-row items-center justify-center ">

        <div className="flex md:w-full pb-20 w-80 flex-col bg-white rounded-lg m-7 cursor-pointer overflow-hidden sm:52 shadow-md mx-10">
           <Image src={Book} width={200} height={200} objectFit="cover" alt="bookspace" className="pb-10  md:block "/>
         
          <a href="./about.js" className="font-serif text-green-400 ml-3 hover:text-black text-left px-2  pt-5 font-bold"> Book Spaces  </a> 
          <p className="pt-5 ml-4 block text-left font-normal font-serif">
            We're a supreme at allowing individuals book laundry machines with ease and convenience
          </p>
          </div>

          <div className="flex md:w-full w-80 pb-20 flex-col bg-white rounded-lg m-7 overflow-hidden sm:52 cursor-pointer shadow-md mx-10">
          <Image src={Elaundry} width={200} height={200} objectFit="cover" alt="elaundry" className="pb-10 md:block "/>
        <a href="./about.js" className="font-serif text-green-400 cursor-pointer hover:text-black  text-left ml-3 px-2 pt-5 font-bold">   Excellent Results     </a>  
          <p className="pt-3 ml-4 block text-left font-normal font-serif">
            Provide High Quality laundry machines and take custom orders so you can look and feel just comfortable.
          </p>
          </div>

          <div className="flex md:w-full w-80 pb-20 flex-col bg-white rounded-lg m-7 overflow-hidden  cursor-pointer shadow-md mx-10">
          <Image src={Notify} width={200} height={200} objectFit="cover" alt="bookspace" className="pb-10 md:block "/>
              <a href="./about.js" className="font-serif cursor-pointer pt-5 hover:text-black  text-green-400 text-left ml-3 px-2 font-bold">   Notifications  </a>  
          <p className="pt-5 ml-4 block text-left font-normal font-serif">
            Current at ensuring you don't miss out on reservations that have been made
          </p>
          </div> 

          </div>
          <div className="flex justify-center">
            <Link href="./about.js" activeClass="aboutservice" to="about">
            <input type="button" value="More about Us!" className="cursor-pointer p-3 rounded-lg bg-indigo-500 text-white font-roboto text-sm"/>
            </Link>
            </div>
      </div>
    </div>
    </div>
    </Element>
  )
}

export default Aboutservice