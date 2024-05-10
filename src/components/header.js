
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
const header =()=>{
    return (
        <div className='containerFluid'>
        <h1 className="sitename" style={{color:'grey'}}>MyNet Cyber</h1><span>.</span>
        <nav className='navmenu' >
          <ul>
            <li><Link to='#home'>Home</Link></li>
            <li ><Link to='#about' >About</Link></li>
            <li><Link to='#services'>Services</Link></li>
            <li><Link to='#student'>Students</Link></li>
            <li><Link to='#contact'>Contact</Link></li>
            <li className='logform'><Link to='#student'><button style={{color:'white'}}>Login</button></Link></li>
            
          </ul>
        
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
      </div>
    )
  }


export default header