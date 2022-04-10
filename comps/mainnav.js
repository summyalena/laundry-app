import React from 'react';
import {useState} from 'react'
import {Link} from 'react-scroll'
import {Transition} from '@headlessui/react'
import {useRouter} from 'next/router'
import NextLink from 'next/link'

function Mainnav() {
      const [isOpen, setIsOpen]= useState(false);
      
  return (
        <div>
           <nav className="w-full bg-white-300 fixed z-20 md:mb-12">
              {/* for the main wrapper */}
              <div className="w-full">
                  {/* for the first wrapper */}
                     <div className="w-full flex items-center h-20">

                       {/* for the second wrapper */}
                         <div className="w-full flex items-center justify-between sm:mx-10 md:mx-20">

                             {/* for the left */}
                             <div className="ml-10 flex flex-shrink-0 flex-justify-center items-center py-3 px-1 ">
                                <h4 className='font-serif font-bold cursor-pointer text-green-500'>Laundromat</h4>
                             </div>
                             {/* div that ends the left */}

                             {/* for the nav links */}
                             <div className="hidden md:block">
                                 <div className='px-2 py-3 flex space-x-4  ml-32 items-baseline items-center flex-justify-center'>
                                    <Link activeClass="imageslider" duration={100} to="imageslider" smooth={true} offset={50}
                                     className="hover:text-green text-indigo-500 cursor-pointer">Home</Link>
                                     <Link activeClass="aboutservice" duration={100} to="aboutservice" smooth={true} offset={50}
                                     className="hover:text-indigo text-green-500 cursor-pointer">About</Link>
                                     <Link activeClass="service" to="service" duration={100} smooth={true} offset={50}
                                     className="hover:text-white-600 text-green-500 cursor-pointer">Services</Link>
                                     <Link activeClass="email" to="email" duration={100} smooth={true} offset={50}
                                     className="hover:text-white-600 text-green-500 cursor-pointer">Contact</Link>
                                      <a href="./register" duration={100} smooth={true} offset={50}
                                     className="hover:text-white text-green-500 cursor-pointer">SignUp</a>
                                    </div>
                                    </div>
                                    {/* div for the links */}

                                       {/* div for the right span */}
                                      <div className="px-2 flex-shrink-0 justify-center flex py-3 mr-4 bg-[#124]"> 
                                     
                                       <a href='/register' className="bg-red-600 text-white-200 hover:text-indigo-200 rounded-md p-2 hidden md:block hover:font-bold">Book Now! </a>
                                       
                                        </div>
                                        {/* div for the right span */}
                                 </div>
                                 {/* div end for the second wrapper */}
                      
                              {/* for mobile screens */}
                              <div className="md:hidden flex mr-13">
                                  <button className='bg-green-500 text-white flex flex-justify-center 
                                  inline-flex cursor-pointer hover:bg-black-300 ring-white  focus:outline-none rounded-lg p-2'
                                         onClick={()=>setIsOpen(!isOpen)} 
                                         type="button" 
                                         aria-controls='mobile-menu'
                                         aria-expanded="false" >
                                         <span className="sr-only" >Open main menu</span>
                                         {isOpen ? 
                                            (<svg
                                            className="block h-6 w-6"
                                            xmlns='http:///www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'
                                            aira-hidden='true'>
                                              <path 
                                                  strokeLinecap="round"
                                                  strokeLinejoin ="round"
                                                  strokeWidth="2"
                                                  d="M6 18L18 6M6 6l12 12"/>
                                            </svg>) :
                                            (<svg
                                              className="block h-6 w-6"
                                              xmlns='http:///www.w3.org/2000/svg'
                                              fill='none'
                                              viewBox='0 0 24 24'
                                              stroke='currentColor'
                                              aira-hidden='true'>
                                                <path 
                                                    strokeLinecap="round"
                                                    strokeLinejoin ="round"
                                                    strokeWidth="2"
                                                   d= "M4 6h16M4 12h16M4 18h16"
                                                    />
                                              </svg>)}
                                         </button>
                              </div>
                              {/* div that ends the mobile screen */}
                 </div>
                 {/* div that ends the first wrapper  */}
                 </div>
                 {/* div end for the main wrapper */}

              <Transition 
                show={isOpen}
                 enter="transition ease-in duration-100 transform"
                 enterFrom="opacity-0 scale-95"
                 enterTo="opacity-100 scale-100"
                 leave="transition ease-out duration-100 transform"
                 leaveFrom="opacity-100 scale-100"
                 leaveTo="opacity-0 scale-95">
                   {(ref) => 
                   (<div className="md:hidden" id="mobile-menu">
                     <div ref={ref} className="bg-white flex flex-col mr-15 pb-10 pt-5 space-y-5 mx-4 items-left p-2">
                   <Link className="hover:bg-green-300 text-base hover:cursor-pointer hover:text-white text-green-500 rounded-md p-3 hover:opacity-50 font-size-10"
                   activeClass="imageslider" 
                    to="imageslider" href=".../pages/imageslider"
                   smooth={true} offset={50}
                    duration={500}>Home</Link>

                   <Link className="hover:bg-green-300 hover:opacity-50 rounded-md p-3 text-base hover:text-white text-green-600 font-size-10"
                   activeClass="aboutservice" to="aboutservice" href='../pages/aboutservice'
                   smooth={true} offset={500} duration={500}>About</Link>

                   <Link className="hover:bg-[#124] hover:opacity-50 text-base rounded-md p-3 hover:text-white text-[#4B4] font-size-10"
                   activeClass="service" to="service" href=".../pages/service"
                   smooth={true} offset={500} duration={500}>Services</Link>

                   <Link className="hover:bg-[#124] hover:opacity-50 text-base rounded-md p-3 hover:text-white text-[#4B4] font-size-10"
                   activeClass="email" to="email" href=".../pages/email"
                   smooth={true} offset={500} duration={500}>Contact</Link>

                   <a className="hover:bg-[#124] hover:opacity-50 text-base rounded-md p-3 hover:text-white text-[#F00] font-size-10"
                   href="./register" 
                   smooth={true} offset={500} duration={500}>Signup</a>
               
               </div>
               </div>) 
                       }          

              </Transition>

           </nav>
         
        </div>
  )
}

export default Mainnav;
