import React from 'react'
import {Whatsapp,TelephoneFill,Envelope, GeoAltFill, Clock} from 'react-bootstrap-icons';

const contacts=()=>{
    return (
      <div className='contact' id='contact'>
        <h1 className='contactTitle'>CONTACTS</h1>
        <div className='contactElements'>
          <section className='container1'>
            <h3 className='phoneNo'>< TelephoneFill className='tele'/><br/>Call Us</h3>
            <p>< Whatsapp className='whatsapp'/>+254-712345678 <br/> +254-712345678</p>
          </section>
          <section className='container2'>
            
            <h3 className='adres'>Address<GeoAltFill className='geoalt'/></h3>
            <p>Muranga<br/>Makuyu location<br/>Kimumbuini</p>
          </section>
          <section className='container3'>
            <h3 className='email'><Envelope className='mail'/><br/>Email</h3>
            <p>info@mynet.co.ke<br/>jacob@mynet.co.ke</p>
          </section>
          <br/>
          <section className='container4'>
            <h3 className='hrs'><Clock className='clock'/><br/>Open Hours</h3>
            <p>monday-saturday<br/>08.00AM-09.00PM</p>
          </section>
        </div>
        <div className='qaform'>
          
          <form className='qafrm' style={{backgroundColor:'lightgray'}}>
            <p style={{color:'black'}}>You can also send a message to our support team</p>
          <input type='text' name='name' placeholder='Name'/>
<input type='email' name='email' placeholder='email' /><br/>
<input type='text' name='subject' placeholder='Subject'/><br/>
<input type='text' name='message' placeholder='Message'/><br/>
<button >send</button>
          </form>
        </div>
        <br/><br/><br/>
      </div>
    )
  }


export default contacts