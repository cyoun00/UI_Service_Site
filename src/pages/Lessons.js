import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import totsButton from "../assets/totsButton.png";
import youthButton from "../assets/youthButton.png";
import adultButton from "../assets/adultsButton.png";
import ScreenComponent from '../components/ScreenComponent';

export default function Lessons(){
    const [screen, setScreen] = useState("menu");

    return(
        <div>
            {screen === "menuScreen" && (
                <div>
                    <section className='lessons-button-section'>
                        <Button variant="" className='button' onClick={() => setScreen("tots")}><img src={totsButton} alt="tots button"></img></Button>
                        <Button variant="" className='button' onClick={() => setScreen("youth")}><img src={youthButton} alt="youth button"></img></Button>
                        <Button variant="" className='button' onClick={() => setScreen("adult")}><img src={adultButton} alt="adult button"></img></Button>
                    </section>
                </div>
            )}
            {screen !== "menuScreen" && (
                <ScreenComponent setScreen={setScreen} />
            )}

        </div>
    );
}
