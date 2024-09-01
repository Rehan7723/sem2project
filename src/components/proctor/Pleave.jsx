import img from '../../images/Ramaiah.png';
import Container from '../../styledComponents/Container';
import "../../styles/Home.css";
import '../../styles/leave.css';
import LeaveTable from './LeaveTable';
import Pnav from './Pnav';

export default function Pleave()
{


    return(
        <div className="home-container">
          <div className="img-blur">
          <div className="nav-container">
          <Pnav/>
          <img src={img} alt="ok" className="nav-img"/>
          </div>
          <Container className='leave-main-box'>
                <LeaveTable/>
          </Container>
          
          </div>
        </div>
    )
}


