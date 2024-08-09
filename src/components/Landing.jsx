import React from "react";
import "../styles/land.css";
import Intro from "./Intro";
export default function Landing()
{
    return(
        <div className="contain">
            <div className="content">
            <Intro/>
            </div>
        </div>
    );
}