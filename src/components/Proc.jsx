import React from "react";
import img2 from '../images/20633_20191118034208.jpg';
import img from '../images/Ramaiah.png';
import Container from "../styledComponents/Container";
import '../styles/Home.css';
import Nav from "./Nav";

export default function Proc()
{
    return(
        <div className="home-container">
          <div className="img-blur">
          <div className="nav-container">
          <Nav/>
          <img src={img} alt="ok" className="nav-img"/>
          </div>
            <Container>
              <div className='profile-pic'>
                <img src={img2} className="proc-img" alt=""/>
              </div>
              <div className='profile-info'>
                <h1 className='profile-name'>Abhishek K L</h1>
                <ul>
                <li>Master of Computer Application</li>
                <li>abhishekkl@msrit.edu</li>
                <li>8553055076</li>
                </ul>
              </div>
         </Container>
         </div>
        </div>
        
    )
}