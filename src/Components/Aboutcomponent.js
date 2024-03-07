import React, { Component } from "react";
//import ReactRoundedImage from "react-rounded-image";
import { Fade } from "react-awesome-reveal";
import "../css/about.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faStackOverflow, faGit, faReact, faNodeJs, faPython, faJs } from "@fortawesome/free-brands-svg-icons";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

 /*
        github-
        git-
        react-
        redux
        node-
        express
        mongodb-
        mysql-
        django-
        flask-
        python-
        c++-
        javascript-
        keras-
        scikit learn-
        tensorflow-
        */


class About extends Component{
    constructor(props){
        super(props);

        this.state = {
            width:0,
            height:0,
            moveX:"",
            moveY:""
        };
    }

    componentDidMount(){
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.updateWindowDimensions);
    }


    updateWindowDimensions = () => {
        this.setState({
            width:window.innerWidth,
            height:window.innerHeight,
        })
    }

    _handleMouseMove = (e) => {
        const {width,height} = this.state;
        this.setState({
            moveX: ((width/2) - e.nativeEvent.clientX) *0.01 +'px',
            moveY: ((height/2) - e.nativeEvent.clientY) *0.01 +'px'
        })
    };

    _defaultstate = (e) => {
        const {width,height} = this.state;
        this.setState({
 
            moveX: "",
            moveY: ""
        })
    }


    render(){
        const mystyle = {
            WebkitTransition: 'all', // note the capital 'W' here
            msTransition: 'all', // 'ms' is the only lowercase vendor prefix
            marginLeft: this.state.moveX, 
            marginTop:this.state.moveY
          };

        //onMouseMove={this._handleMouseMove} onMouseLeave={this._defaultstate} style={mystyle}

       


        return(
            <section>
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="heading" id="about" name="about">
                            <Fade triggerOnce={"true"}>
                                <p >
                                  <center> <h1 className="fontc"> My Skills And Experiences <FontAwesomeIcon icon={faStar} /> </h1></center> 
                                </p>
                            </Fade>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-sm-12">
                            <Fade cascade triggerOnce={"true"} delay={500}>
                                <p className="justify">
                                    Having delved into programming for 8+ years, it has evolved beyond a mere skill, transforming into a profound passion. This enthusiasm is fueled by the ever-evolving tech industry, where my expertise spans diverse domains such as <span className="pcolor">Software Development, Machine Learning, Cloud Computing, and Full-Stack Development.</span>
                                <br></br><br></br>I excel in collaborative environments, savoring the dynamic process of team collaboration to create cutting-edge technological products. The invaluable feedback, discussions, and reviews in this setting not only bring out the best in each team member but also play a pivotal role in my ongoing personal development.
                                <br></br><br></br>Beyond the lines of code, my interests extend to the realms of <span className="pcolor">Short Filmmaking, Photography, and Basketball</span>, adding diversity and fulfillment to my life's pursuits.
                                </p>
                            </Fade>
                        </div>
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>

                    <div className="row justify-content-center">
                        <div className="heading">
                            <Fade cascade={"true"} triggerOnce={"true"}>
                                <p>
                                    <h2> Tech Stack <FontAwesomeIcon icon={faStackOverflow} /></h2>
                                </p>
                            </Fade>
                        </div>
                    </div>
              
                
                    <Fade cascade={"true"} triggerOnce={"true"} delay={500}>
                    <div className="row justify-content-center">  
                        <div className="card cardborder w-100 cardstyling text-center ">
                            <div className="card-body">
                       
                                <div className="row justify-content-center">   
                                     <div className="col-12 col-sm-2" >
                                        <MouseParallaxContainer>
                                            <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                                <FontAwesomeIcon icon={faGithub} size="4x"/><br></br> 
                                            </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>
                                    <div className="col-12 col-sm-2" >
                                        <MouseParallaxContainer>
                                            <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                                <FontAwesomeIcon icon={faGit} size="4x"/><br></br> 
                                            </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>
                                    <div className="col-12 col-sm-2" >
                                        <MouseParallaxContainer>
                                            <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                                <FontAwesomeIcon icon={faNodeJs} color="#68A063" size="4x"/><br></br> 
                                            </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>
                                    <div className="col-12 col-sm-2" >
                                        <MouseParallaxContainer>
                                            <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                                <FontAwesomeIcon icon={faPython} color="#306998" size="4x"/><br></br> 
                                            </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>
                                    <div className="col-12 col-sm-2" >
                                        <MouseParallaxContainer>
                                            <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                                <FontAwesomeIcon icon={faJs} color="#3C873A" size="4x"/><br></br> 
                                            </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>
                                    <div className="col-12 col-sm-2" >
                                        <MouseParallaxContainer>
                                            <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                                <FontAwesomeIcon icon={faReact} color="#61DBFB" size="4x"/><br></br> 
                                            </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>                                         
                                </div>
                                <br></br>
                                
                                
                                <div className="row justify-content-center">  
                                    
                                    <div className="col-12 col-sm-2">
                                        <MouseParallaxContainer>
                                        <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                        <img className="iconstyle mg-fluid mx-auto d-block" src="/images/icons/tf.png" width="80px"></img>
                                        </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>
                                    <div className="col-12 col-sm-2">
                                        <MouseParallaxContainer>
                                        <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                        <img className="iconstyle mg-fluid mx-auto d-block" src="/images/icons/django.png" width="130px"></img>
                                        </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>
                                 

                                    <div className="col-12 col-sm-2">
                                        <MouseParallaxContainer>
                                        <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                        <img className="iconstyle mg-fluid mx-auto d-block" src="/images/icons/mongo.png" width="70px"></img>
                                        </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>
                                    <div className="col-12 col-sm-2">
                                        <MouseParallaxContainer>
                                        <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                        <img className="iconstyle mg-fluid mx-auto d-block" src="/images/icons/keras.png" width="120px"></img>
                                        </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>
                                    <div className="col-12 col-sm-2">
                                        <MouseParallaxContainer>
                                            <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                                <img className="iconstyle mg-fluid mx-auto d-block" src="/images/icons/scitkitlearn.png" width="125px"></img>
                                            </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>
                                
                                    <div className="col-12 col-sm-2">
                                        <MouseParallaxContainer>
                                        <MouseParallaxChild factorX={0.1} factorY={0.1} >
                                        <img className="iconstyle mg-fluid mx-auto d-block" src="/images/icons/flask.png" width="90px"></img>
                                        </MouseParallaxChild>
                                        </MouseParallaxContainer>
                                    </div>

                                </div>
                          

                            </div>
                        </div>
                    </div>
                    </Fade>
                </div>
                    
            </section>
        );
    }
}

export default About;