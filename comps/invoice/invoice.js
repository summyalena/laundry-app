import React from 'react';
import styles from '../invoice/invoice.module.css'
import Nameinvoice from '../invoice/nameinvoice'
import Details from '../invoice/Details'
const invoice = () => {
    const handlePrint = ()=>{
           window.print()
    }
  return (
         <div className="container ml-5">
             <div className=" m-5 p-5 xl:max-w-3xl xl:mx-auto xl:justify-center bg-white rounded shadow">
                 <section className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between" >
             <h3 className='font-bold uppercase tracking-wide text-4xl xl:justify-end'>Invoice</h3>
              <button onClick={handlePrint}className="btn btn-primary">Print</button>
             </section>
              <Nameinvoice/>
              <Details/>
               <article className="mt-3 mb-5">
             <p>Token Number:</p>
             </article>
             <div className="d-grid gap-2 col-6 mx-auto">
             <button>Proceed</button>     
             </div>
             </div>
                  </div>
              
  )
};

export default invoice;
