import React, { useRef } from "react";
import { Fade } from "react-awesome-reveal";
import emailjs from '@emailjs/browser';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import L from "leaflet";
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faTwitter, faInstagram, faGithub, faGoogle} from "@fortawesome/free-brands-svg-icons";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

import "../css/contact.css";
import 'leaflet/dist/leaflet.css';

function geticon(){
    return L.icon({
        iconUrl: require("../cssimages/markericon.png"),
        iconSize:40,
      });
}


const Contact = () => {
    const form = useRef();
    const name = useRef();
    const email = useRef();
    const message = useRef();
  
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current, email.current.value);
        if (name.current.value==='' || email.current.value==='' || message.current.value===''){
            alert("Name, Email or Message is empty");
            e.preventDefault();
        }
        else{
            emailjs.sendForm('', '', form.current, '')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            form.current.reset()
            alert("Message Sent Successfully!");
            e.preventDefault();
        }
    };

    const position = [41.87149654426123, -87.66192010499911];
    //https://leaflet-extras.github.io/leaflet-providers/preview/

    /* https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token={LJYZLnmuipDZw5xABr2xi1gqd2848lcrhTveFzkXzyp9D6ViUbYUhe8A5ajqNX7f}', {
    attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 0, */


  
    return (
        <section>
            <div className="container-fluid fullbody">
                <div className="row justify-content-center">
                    <div className="col-sm-6" id="contact">
                        <div className="contactform" >
                            <center> <h1 className="fontc"> Get In Touch!  <FontAwesomeIcon icon={faEnvelopeOpenText} /></h1> </center>
                            <p>I’m always open for any new opportunities. Whether you have a question or just want to say hi, I'm just a click away!</p>
                            <form ref={form} onSubmit={sendEmail}>
                                <label>Name</label>
                                <input type="text" className="form-control" ref={name} id="user_name" name="user_name" placeholder="Enter Name"/>

                                <br></br>
                                <label>Email address</label>
                                <input type="email"  className="form-control"   ref={email} id="user_email" name="user_email" placeholder="Enter email"/>

                                <br></br>
                                <label>Your Message</label>
                                <textarea  id="message"  className="form-control"  ref={message} name="message" placeholder="Enter Your Message"/>            

                                <br></br>
                                <button type="submit" className="btn btn-primary">Send</button>
                            </form>
                            <br></br>
                            <br></br>
                            <br></br>

                            <Fade delay={200} triggerOnce={"true"}>
                            <div className="card w-100 justify-content-left cardbgandborder">
                                <div className="card-header">
                                    <h3 className="fontd">Or Connect With Me</h3>
                                </div>    
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-2">
                                            <MouseParallaxContainer>
                                            <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                            <AnchorLink href="https://www.facebook.com/rajatkeshri97" > <FontAwesomeIcon icon={faFacebook} color="#4267B2" size="2x" /> </AnchorLink>
                                            </MouseParallaxChild>
                                            </MouseParallaxContainer>
                                        </div>
                                        <div className="col-2">
                                        <   MouseParallaxContainer>
                                            <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                            <AnchorLink href="https://www.instagram.com/sachu23/"><FontAwesomeIcon icon={faInstagram} color="#cd486b" size="2x"/></AnchorLink>
                                            </MouseParallaxChild>
                                            </MouseParallaxContainer>
                                        </div>
                                        <div className="col-2">
                                            <MouseParallaxContainer>
                                            <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                            <AnchorLink href="https://www.linkedin.com/in/sachins23/"><FontAwesomeIcon icon={faLinkedin} color="#0072b1" size="2x"/></AnchorLink>
                                            </MouseParallaxChild>
                                            </MouseParallaxContainer>
                                        </div>
                                        <div className="col-2">
                                            <MouseParallaxContainer>
                                            <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                            <a href="mailto:sachin.srini03@gmail.com"><FontAwesomeIcon icon={faGoogle}  color="#3cba54" size="2x"/></a>
                                            </MouseParallaxChild>
                                            </MouseParallaxContainer>
                                        </div>
                                        <div className="col-2">
                                            <MouseParallaxContainer>
                                            <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                            <AnchorLink href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} color="#00acee" size="2x"/></AnchorLink>
                                            </MouseParallaxChild>
                                            </MouseParallaxContainer>
                                        </div>
                                        <div className="col-2">
                                            <MouseParallaxContainer>
                                            <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                            <AnchorLink href="https://github.com/Sachu23"><FontAwesomeIcon icon={faGithub}  color="white" size="2x"/></AnchorLink>
                                            </MouseParallaxChild>
                                            </MouseParallaxContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Fade>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="col-sm-6">
                        <div>
                            <MapContainer className="map" center={position} zoom={12} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&amp;copy <a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">, &amp;copy  <a href="https://openmaptiles.org/">OpenMapTiles</a>, &amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token=LJYZLnmuipDZw5xABr2xi1gqd2848lcrhTveFzkXzyp9D6ViUbYUhe8A5ajqNX7f"
                                />
                                <Marker position={position} icon={geticon()}>
                                    <Popup>
                                        Chicago, USA
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
  };

export default Contact;