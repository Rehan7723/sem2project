import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import img from '../images/images-removebg-preview.png';
import '../styles/intro.css';

export default function Intro()
{
    return(
        <div className="content1">
            <img src={img} alt="" className="logo"/>
            <h1 className="button" data-text="Awesome">
    <span className="actual-text">&nbsp;Proctorship&nbsp;</span>
    <span aria-hidden="true" className="hover-text">&nbsp;Proctorship&nbsp;</span>
</h1>

<div
  aria-label="Disabled button group" className="login-form">
    
    <h1>Login</h1>
    <Link to="/login"><Button  color="error" className="login-btn" endIcon={<SendIcon className="icon"/>} >Student </Button><br/></Link>
   <Link to="/plogin"> <br/><Button  color="error" className="login-btn" endIcon={<SendIcon className="icon"/>} >Proctor </Button></Link>
</div>
        </div>
    )
}