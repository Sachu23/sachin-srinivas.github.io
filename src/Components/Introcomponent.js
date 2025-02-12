import React, { Component } from "react";
import "../css/intro.css";


class Intro extends Component{

    render(){

        return(
        <section >
        <div class="jumbotron .jumbotron-fluid jumbobg" id="home" >
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 padding" name="home">
                        <h2>Hello, I am <br></br></h2>
                        <h1 className="i-name"><b>Sachin Srinivas</b></h1>
                        <div className="i-title">
                            <div className="i-wrapper">
                                <div className="i-skills"> Software Developer</div>
                                <div className="i-skills"> Full-Stack Web Developer</div>
                                <div className="i-skills"> Machine Learning Enthusiast</div>
                                <div className="i-skills"> Cloud Engineer</div>
                            </div>
                        </div>
                        <p className="justify">
                        
                        I’m Sachin Srinivas, a passionate software engineer with over six years of experience in software development. I specialize in building scalable, resilient distributed systems and have a deep understanding of the software development life cycle. My expertise extends across backend engineering, cloud computing, and high-performance computing, enabling me to design efficient, fault-tolerant solutions. I’m driven by innovation and problem-solving, constantly seeking to optimize systems for performance and reliability. Whether it's working with large-scale data processing, AI-driven applications, or enhancing infrastructure, I thrive on tackling complex engineering challenges.                        </p>
                    </div>
                    <div className="col-sm-6">
                        <div className="card cardborder w-100 cardstyling text-center ">
                            <div className="card-body">
                                <img class="img-fluid mg-fluid mx-auto d-block circle-img rounded-circle" src={require("./sach.jpg")} alt="Chania"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </section>
        );
    }
}

export default Intro;