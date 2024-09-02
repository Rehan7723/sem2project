import img from '../../images/Ramaiah.png';
import '../../styles/Chatlist.css';
import "../../styles/Home.css";
import '../../styles/leave.css';
import Chatbox from '../Chatbox';
import Pnav from './Pnav';
import Stdchatlist from './Stdchatlist';

export default function Pmail()
{


    return(
        <div className="home-container">
          <div className="img-blur">
          
          <div className='content'>
          <div className="nav-container">
          <Pnav/>
          <img src={img} alt="ok" className="nav-img"/>
          </div>
          <div className='sidebar'>
            <Stdchatlist/>
          </div>
          <div className='chat-box'>
            <Chatbox/>

          </div>

          </div>
          </div>
        </div>
    )
}
