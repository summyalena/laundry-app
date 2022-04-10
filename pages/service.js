import React from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {FaBook} from 'react-icons/fa'
import {FaArrowRight} from 'react-icons/fa'
import { FaPaypal } from 'react-icons/fa'
import {Element} from 'react-scroll'
function Service() {
  return (
    <Element id='service' name='service'>
    <div className='bg-white-200'>
          <div className="flex flex-col w-full h-auto my-40 items-center justify-center md:pb-20 pt-40 p-2">
              <h2 className="text-2xl font-bold text-center font-serif text-gray"> Laundry Have Never Been This Easy And Simple</h2>
             <p className="text-xl font-bold text-center  text-indigo-400"> How our Services Work: </p>

          <div className="flex justify-center items-center md:flex-row flex-col space-x-10 pt-5 mx-auto">

          <div className=" flex flex-col bg-white rounded-md  p-3 m-7 overflow-hidden h-auto shadow-xl md:w-full w-40 p-10 mx-10">
                  <FaSignInAlt className='rounded-md bg-red-700 w-20 h-20 m-7 mx-auto text-black shadow-md'/>    
                    <a href='./register.js' className='text-center cursor-pointer font-bold text-xl text-indigo-400'>Sign Up </a> 
                  <p className='text-center font-italic'>In order to order online, you have to sign Up</p>
              </div>

                  <div>
                    <FaArrowRight className='text-green-500 w-10 h-10'/> 
                    </div>  
         
        <div className="flex flex-col bg-white rounded-lg p-3 m-7 overflow-hidden shadow-xl md:w-full h-auto w-40 p-10 mx-10">
                  <FaBook className="rounded-md w-20 h-20 m-7 mx-auto text-blue-600 shadow-md"/> 
                  <a  href='./dashindex.js'  className="text-center font-bold cursor-pointer text-xl text-indigo-400">Book Machines </a> 
                  <p className="text-center font-italic">Once sign up has been made, with ease, you can book any available laundry machine</p>
              </div>


           <div><FaArrowRight className='text-green-500 w-10 h-10' /> </div>  

          <div className="flex flex-col bg-white rounded-lg p-3 m-7 overflow-hidden shadow-xl md:w-full w-40 h-auto p-10 mx-10">
                   <FaPaypal className="rounded-md bg-indigo-400 w-20 h-20 m-4 mx-auto text-white shadow-md"/>
               <a href='./dashindex.js'className="text-center cursor-pointer font-bold text-xl text-indigo-400">Cleaning </a>
                   <p className="text-center font-italic">With the use of premium materials, technologies and machines, washing has been made easy</p>
                 </div>

           </div>
           </div>
       </div>
       </Element>
    
  )
}

export default Service