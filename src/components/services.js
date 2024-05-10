import React from 'react';


const services =()=> {
 

  
    return (
      <div className='ServContainer' id='services'>
        <h1 className='servheader'>SERVICES</h1>
        <div className='kra'>
      <div className='servc' >
        
        <img src={require('./kra.webp')} alt='KRA' className='containerImg' />
        <h1 className='Title'>KRA</h1>
        <p className='description'>Ksh 500 for registration<br/>
        Ksh 200 for Returns</p>
        <a href='www.google.com' className='crdBtn'>Learn More</a>
        </div>
        </div>
        <div className='NssF'>
        <div className='servc'>
        
        <img src={require('./nssf.jpg')} alt='nssf' className='containerImg' />
        <h1 className='Title'>NSSF</h1>
        <p className='description'>Ksh 500 for registration<br/>
        Ksh 200 for Returns</p>
        <a href='www.google.com' className='crdBtn'>Learn More</a>
        </div>
        </div>
        <div className='NhiF'>
        <div className='servc'>
        
        <img src={require('./nhif.jpg')} alt='nssf' className='containerImg' />
        <h1 className='Title'>NHIF</h1>
        <p className='description'>Ksh 500 for registration<br/>
        </p>
        <a href='www.nhif.com' className='crdBtn'>Learn More</a>
        </div>
        </div>
        <br/><br/><br/><br/><br/><br/>
      </div>
    )
  }


export default services