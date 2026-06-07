import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import divider1 from '../assets/divider1.png';
import divider2 from '../assets/divider2.png';

const content = {
    tots: {
        tab1:{
            title: "Tot"

        },
        tab2:{
            title: "Parent&Tot"

        }
    },
    youth: {
        tab1:{
            title: "LifeSaving"

        },
        tab2:{
            title: "Swimming"

        }
    },
    adult: {
        tab1:{
            title: "Aquafit"

        },
        tab2:{
            title: "Swimming"

        }
    }
}

export default function ScreenComponent({ setScreen }){
    return(
        <div>
            <section className='screen-button-section'>
                <img src={divider1} alt="divider1" style={{position: "absolute", zIndex:1}}></img>
                <img src={divider2} alt="divider2" style={{position: "absolute", zIndex:2}}></img>
            </section>
        </div>
    );
}