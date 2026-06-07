import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import backWaves from "../assets/backWaves.png";
import rButton from "../assets/registerButton.png";
import lButton from "../assets/learnMoreButton.png";

export default function Home(){
    return(
        <div>
            <img src={backWaves} alt="blue outlined white waves" className="background-element"></img>
            <h1 className="title">SWIM SOCIETY</h1>
            <section className='home-button-section'> 
                <Button variant="" className='button' as={NavLink} to="/lessons"><img src={rButton} alt="register button"></img></Button>
                <Button variant="" className='button' as={NavLink} to="/about"><img src={lButton} alt="learn more button"></img></Button>
            </section>
        </div>
    );
}