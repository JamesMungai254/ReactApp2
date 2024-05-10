
import React from 'react'
import Login from './login';


  const Students= ()=>{
   
        
    return(
      <div className='stdContainer' id='student'>
        <h2 style={{textAlign:'center'}}>Student Services</h2>
        <p style={{fontSize:'120%',textAlign:'center'}}>Welcome to our Academic Services and meet with the most competent teachers at MyNet Cyber.<br/>
        Enter your details in the from below and we will reach out to you as soon as possible<br/>
        <ul>
          <li>Computer Packages</li>
          <li>Frontend Engineering</li>
          <li>Backend Engineering</li>
        </ul>
        </p>
        
      <Login/>
      </div>
    )
  }


export default Students