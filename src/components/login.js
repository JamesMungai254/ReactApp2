
import React, { Component } from 'react'

export class login extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        
        <div className='form-temp' style={{position:'relative'}}>
 <form >
<input type='text' name='Fname' placeholder='Full Name'/><br/>
<input type='text' name='uname' placeholder='User Name'/><br/>
<input type='email' name='email' placeholder='email' /><br/>
<input type='password' name='psswrd' placeholder='Password'/><br/>
<input type='password' name='psswrd' placeholder='Confirm Password'/><br/>
<button >SignUp</button>
</form>
</div>
      </div>
    )
  }
}

export default login