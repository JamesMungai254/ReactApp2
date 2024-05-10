import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import About from './components/about';
import Services from './components/services';
import Students from './components/student';
import Contacts from './components/contacts';
import Header from './components/header';
import Footer from './components/footer';




function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="App" >
      <Header />
  <span id='home'></span>
<br/><br/><br/><br/>
<div className='wel-blg' >
<br/><br/><br/><br/><br/><br/><br/><br/>
  <h1 className='wel-blg-init'>Welcome to our Website</h1>
</div>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/>
<br/>
 </div>

  <About />
  <Services />
  <Students/>
  <Contacts/>
  <Footer />
</BrowserRouter>
)
}

export default App;