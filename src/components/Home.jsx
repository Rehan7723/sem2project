import "../styles/Home.css";
import Nav from "./Nav";

export default function Home()
{
    return(
        <div className="home-container">
          <div className="img-blur">
          <div className="nav-container">
          <Nav/>
          </div>
          <div className="home-body">
            <h1 className="head-header">EDUCATION<br/>
            IS A GREAT<br/>
            EQUALIZER</h1>
          </div>
          </div>
        </div>
    )
}