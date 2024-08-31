import img from '../../images/Ramaiah.png';
import "../../styles/Home.css";
import Pnav from './Pnav';
export default function Phome()
{
    return(
        <div className="home-container">
          <div className="img-blur">
          <div className="nav-container">
          <Pnav/>
          <img src={img} alt="ok" className="nav-img"/>
          </div>
          <div className="home-body">
            <h1 className="head-header">ONLY THE<br/>
            BRAVE<br/>
            CHOOSE TO<br/>
            TEACH</h1>

          </div>
          </div>
        </div>
    )
}