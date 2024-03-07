import '../App.css';
import React from "react";
import Nav from "./Navbarcomponent";
import Intro from './Introcomponent';
import About from './Aboutcomponent';
import Project from './Projectscomponent';
import Contact from './Contactcomponent';
import Footer from './FooterComponent';
import StarfieldAnimation from 'react-starfield-animation'


function Maincomponent() {
  return (
    <div>
       <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
      <Nav/>
        <header className="App-header">
          <Intro />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <About />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <hr></hr>
          <Project/>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <hr></hr>
          <Contact/>
          <Footer/>
        </header>
    </div>
  );
}

export default Maincomponent;