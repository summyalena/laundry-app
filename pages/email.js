import React from 'react'
import Link from 'next/link'
import {Element} from 'react-scroll'

function email() {
  return (
    <Element id="email" name="email">
    <div className="bg-gray">
         <div className=' w-full h-auto md:pb-20 pt-10 p-2 my-10 flex-col flex '>
          
               <h2 className="text-center">Don't miss any action!</h2>
               <p className=""> Always stay tuned with us at all times.</p>
          
             <div>
                  <input placeholder='your email address'/>
                  <input type="button" className="bg-indigo" value="subscribe" />
               </div>

               <h4>To get more info about us! <Link href="./Contact Us.js">Click here!</Link></h4>
      </div>

    </div>
    </Element>
  )
}

export default email