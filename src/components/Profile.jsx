import img from '../images/Ramaiah.png';
import Container from '../styledComponents/Container';
import "../styles/Home.css";
import "../styles/profile.css";
import Nav from "./Nav";


export default function Profile()
{
    return(
        <div className="home-container">
          <div className="img-blur">
          <div className="nav-container">
          <Nav/>
          <img src={img} alt="ok" className="nav-img"/>
          </div>
            <Container>
              <div className='profile-pic'></div>
              <div className='profile-info'>
                <h1 className='profile-name'>Rehan Shariff</h1>
                <ul>
                  <li><span>USN: </span> 1MS23MC081</li>
                  <li><span>Semester: </span> 2</li>
                  <li><span>Passing year: </span> 2025</li>
                </ul>
              </div>
         </Container>
         </div>
        </div>
    )
}