import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
function logout() {
  return (
  <div> 
      <Navbar/>
      <h2>LOGOUT<FontAwesomeIcon icon={faSignOutAlt}/></h2>
      <button>Logout</button>
  </div>
  )
}

export default logout;
