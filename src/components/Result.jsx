import img from '../images/Ramaiah.png';
import '../styles/Chatlist.css';
import "../styles/Home.css";
import '../styles/leave.css';
import '../styles/result.css';
import Graph from './Graph';
import Nav from './Nav';
import Semlist from './Semlist';


export default function Result()
{


    return(
        <div className="home-container">
          <div className="img-blur">
          
          <div className='content'>
          <div className="nav-container">
          <Nav/>
          <img src={img} alt="ok" className="nav-img"/>
          </div>
          <div className='sidebar'>
            <Semlist/>
          </div>
          <div className='chat-box'>
            <Graph className='graph'/>

          </div>

          </div>
          </div>
        </div>
    )
}
