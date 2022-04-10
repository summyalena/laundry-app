import React from 'react';
import styles from '../flow/flow.module.css'
import {useRouter} from 'next/router'
const flow = () => {
    const router = useRouter()
   const onSubmit = (e)=>{
        e.preventDefault
           router.push('/invoice')
    }
  return (
  <div className={styles.container}>
       <div className='container-m2'>
            <div className='table-responsive'>
                <form onSubmit={onSubmit} className='form-check'>
                  <table className="table table-bordered table-hover"> 
                  <thead>
                      <tr>
                          <th scope="col">Machine 1 <br/>
                          Pick a Date and Time</th>
                      </tr>
                  </thead>
                      <tbody> 
                        <tr className='table-danger'>
                    <td ><input id='flexCheckDefault' value={1} className={styles.input} type='checkbox' required/>
                    <label className='form-check-label ms-2' for="flexCheckDefault"> 8am  -  9am </label></td>
                    <td><input  id='flexCheckDefault' value={2} className={styles.input} type='checkbox' required/> 
                    <label className='form-check-label ms-2'for="flexCheckDefault"> 11am - 12pm  </label></td>
                    <td><input  id='flexCheckDefault' value={3} className={styles.input} type='checkbox' required/>
                    <label className='form-check-label ms-2'for="flexCheckDefault"> 2pm  -  3pm </label>  </td>
                    </tr>          
                    
                    <tr className='table-primary'> 
                    <td><input className="form-check-input" id="flexCheckDefault" value={4} className={styles.input} type='checkbox' required/> 
                    <label className='form-check-label ms-2' for='flexCheckDefault'>9am - 10am </label> </td>
                    <td><input className="form-check-input" id='flexCheckDefault' value={5} className={styles.input} type='checkbox' required/> 
                    <label className='form-check-label ms-2' for="flexCheckDefault"> 12pm - 1pm </label> </td>
                    <td> <input className="form-check-input" id='flexCheckDefault' value={6} className={styles.input} type='checkbox' required/>
                    <label className='form-check-label ms-2'for="flexCheckDefault"> 3pm  - 4pm </label> </td>
                    </tr>

                    <tr className='table-success'> 
                    <td><input className="form-check-input" value={7} className={styles.input} type='checkbox' required/> 
                    <label className='form-check-label ms-2'for="flexCheckDefault"> 10am - 11am </label> </td>
                    <td><input className="form-check-input" value={8} className={styles.input} type='checkbox' required/> 
                    <label className='form-check-label ms-2' for="flexCheckDefault"> 1pm  -  2pm </label> </td>
                    <td><input className="form-check-input" value={9} className={styles.input} type='checkbox' required/> 
                    <label className='form-check-label ms-2' for="flexCheckDefault"> 4pm - 5pm  </label></td>
                    </tr>
                    </tbody>
                </table>
                </form>
             </div>
  </div>
  <div className={styles.submitcon}> <input type="submit" onClick={onSubmit} class="btn-check" id="btn-check" autocomplete="off"/>
<label class="btn btn-primary" for="btn-check">Submit</label></div>
  </div> 
  )
};

export default flow;
