import img from '../images/Ramaiah.png';
import Container from '../styledComponents/Container';
import "../styles/Home.css";
import '../styles/leave.css';
import Chatbox from './Chatbox';
import Nav from "./Nav";
export default function Leave()
{


    return(
        <div className="home-container">
          <div className="img-blur">
          <div className="nav-container">
          <Nav/>
          <img src={img} alt="ok" className="nav-img"/>
          </div>
          <Container>
            <Chatbox/>
          </Container>
          
          </div>
        </div>
    )
}


