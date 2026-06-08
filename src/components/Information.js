import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import Registration from '../components/Registration';
import regScreenButton from '../assets/screenButton.png';

export default function Information({ lessonName, lessonType }){
    const [register, setRegister] = useState(false);
    const target = lessonName.split("|");
    const content = {
        "Level 1: Tots":{
            title: "Level 1: Tots",
            description: 'This swimming class is teaches toddlers how to swim. Students in this class will learn how to interact with the water. Learn how to blow bubbles, how to bob in the water, and how to float, etc.'

        },
        "Level 2: Tots":{
            title: "Level 2: Tots",
            description: 'This swimming class is teaches toddlers how to swim. Students in this class will learn how to interact with the water. Learn how to float, how to glide, and how to flutterkick, etc.'

        },
        "Level 3: Tots":{
            title: "Level 3: Tots",
            description: 'This swimming class is teaches toddlers how to swim. Students in this class will learn new strokes. Learn how to flutterkick, how to frontstroke, and how to backstroke, etc.'

        },
        "Level 1: Parent&Tot":{
            title: "Level 1: Parent&Tot",
            description: `This swimming class is teaches toddlers how to swim. In this class, parents will participate and encourage their children in lessons!
            Students in this class will learn how to interact with the water. Learn how to blow bubbles, how to bob in the water, and how to float, etc.`

        },
        "Level 2: Parent&Tot":{
            title: "Level 2: Parent&Tot",
            description: `This swimming class is teaches toddlers how to swim. In this class, parents will participate and encourage their children in lessons!
            Students in this class will learn how to interact with the water. Learn how to float, how to glide, and how to flutterkick, etc.`

        },
        "LifeSaving: 10-13yrs":{
            title: "LifeSaving",
            description: `This LifeSaving class is a class that helps 10-13 year olds prepare for their Lifeguard Certification course. 
            This course will introduce students to lifesaving in water, and safety supervision in aquatic situations.
            Learn lifesaving kicks, first aid concepts, and train the endurance and mastery of your strokes.
            
            This course is for strong swimmers only.`

        },
        "LifeSaving: 14-17yrs":{
            title: "LifeSaving",
            description: `This LifeSaving class is a class that helps 14-17 year olds prepare for their Lifeguard Certification course. 
            This course will introduce students to lifesaving in water, and safety supervision in aquatic situations.
            Learn lifesaving kicks, first aid concepts, and train the endurance and mastery of your strokes.
            
            This course is for strong swimmers only.`

        },
        "Level 1: Kids (6-11yrs)":{
            title: "Level 1: Kids",
            description: 'This swimming class is teaches kids(6-11yrs) how to swim. Students in this class will learn and improve strokes. Learn how to float, how to glide, and flutterkick, etc.'

        },
        "Level 2: Kids (6-11yrs)":{
            title: "Level 2: Kids",
            description: 'This swimming class is teaches kids(6-11yrs) how to swim. Students in this class will learn and improve strokes. Learn how to frontstroke, how to backstroke, and breatstroke, etc.'

        },
        "Level 1: Teens (12-17yrs)":{
            title: "Level 1: Teens",
            description: 'This swimming class is teaches teens(12-17yrs) how to swim. Students in this class will learn and improve strokes. Learn how to float, how to glide, and flutterkick, etc.'

        },
        "Level 2: Teens (12-17yrs)":{
            title: "Level 2: Teens",
            description: 'This swimming class is teaches teens(12-17yrs) how to swim. Students in this class will learn and improve strokes. Learn how to frontstroke, how to backstroke, and breatstroke, etc.'

        },
        "Level 1: Adults":{
            title: "Level 1: Adults",
            description: 'This swimming class is teaches adults how to swim. Students in this class will learn and improve strokes. Learn how to float, how to glide, and flutterkick, etc.'

        },
        "Level 2: Adults":{
            title: "Level 2: Adults",
            description: 'This swimming class is teaches adults how to swim. Students in this class will learn and improve strokes. Learn how to frontstroke, how to backstroke, and breatstroke, etc.'

        },
        "Level 3: Adults":{
            title: "Level 3: Adults",
            description: 'This swimming class is teaches adults how to swim. Students in this class will improve strokes and learn entries. Learn side entries, compact jumps, and how to dive, etc.'

        },
        "Aquafit: Dance":{
            title: "Aquafit: Dance",
            description: `Aquafit : Dance is a class for all adults. It is a water aerobics class which means students will be in shallow end of the pool. 
            This class will focus on dance moves that stretch and work muscles, while also teaching you fun choreography. 
            
            Listen to some fun music while getting a great workout in the water!
            
            If you’re lucky your instructor may even take music requests!`

        },
        "Aquafit: Seniors":{
            title: "Aquafit: Seniors",
            description: `Aquafit : Seniors is a class for ages 65+. It is a water aerobics class which means students will be in shallow end of the pool with a 
            flotation belt. This class will focus on exercises that stretch and relax muscles, while also being easy on the joints. 
            
            Listen to some fun music while getting a great workout in the water!
            
            If you’re lucky your instructor may even take music requests!`
        }
    }
    return(

        <div>
            {!register &&(
                <div>
                    <h1 className="info-title">{content[target[0]].title}</h1>
                    <p className="info-p">{content[target[0]].description}</p>
                    <Button variant="" className='button screen-btn' onClick={() => {setRegister(true);}}><img src={regScreenButton} alt="register button"></img></Button>
                </div>
            )}
            {register &&(
                <Registration lessonType={lessonType}/>
            )}
        </div>

    );
}