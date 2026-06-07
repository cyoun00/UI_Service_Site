import React, {useState} from 'react';
import { Button, Card } from 'react-bootstrap';
import divider1 from '../assets/divider1.png';
import divider2 from '../assets/divider2.png';
import moreInfoButton from '../assets/moreInfoButton.png';
import regScreenButton from '../assets/screenButton.png';


export default function ScreenComponent({ screen }){
    const [tab, setTab] = useState("tab1");

    const content = {
        tots: {
            tab1:{
                title: "Tot",
                div1Z: 2,
                div2Z: 1,
                lesson1: "Level 1: Tots| Jan 8 - May 2| Saturday 11am-12am",
                lesson2: "Level 1: Tots| Jan 8 - May 2| Friday 9am-10am",
                lesson3: "Level 2: Tots| Jan 8 - May 2| Wednesday 10am-11am",
                lesson4: "Level 2: Tots| Jan 8 - May 2| Tuesday 10am-11am",
                lesson5: "Level 3: Tots| Jan 8 - May 2| Thursday 3pm-4pm"

            },
            tab2:{
                title: "Parent&Tot",
                div1Z: 1,
                div2Z: 2,
                lesson1: "Level 1: Parent&Tot| Jan 8 - May 2| Saturday 9am-10am",
                lesson2: "Level 1: Parent&Tot| Jan 8 - May 2| Monday 9am-10am",
                lesson3: "Level 1: Parent&Tot| Jan 8 - May 2| Wednesday 10am-11am",
                lesson4: "Level 1: Parent&Tot| Jan 8 - May 2| Sunday 10am-11am",
                lesson5: "Level 2: Parent&Tot| Jan 8 - May 2| Thursday 3pm-4pm"

            }
        },
        youth: {
            tab1:{
                title: "LifeSaving",
                div1Z: 2,
                div2Z: 1,
                lesson1: "LifeSaving: 10-13yrs| Jan 8 - May 2| Friday 6pm-7pm",
                lesson2: "LifeSaving: 10-13yrs| Jan 8 - May 2| Tuesday 4pm-5pm",
                lesson3: "LifeSaving: 10-13yrs| Jan 8 - May 2| Friday 4pm-5pm",
                lesson4: "LifeSaving: 14-17yrs| Jan 8 - May 2| Thursday 4pm-5pm",
                lesson5: "LifeSaving: 14-17yrs| Jan 8 - May 2| Monday 6pm-7pm"

            },
            tab2:{
                title: "Swimming",
                div1Z: 1,
                div2Z: 2,
                lesson1: "Level 1: Kids (6-11yrs)| Jan 8 - May 2| Monday 4pm-5pm",
                lesson2: "Level 1: Kids (6-11yrs)| Jan 8 - May 2| Thursday 3pm-4pm",
                lesson3: "Level 1: Teens (12-17yrs)| Jan 8 - May 2| Wednesday 4pm-5pm",
                lesson4: "Level 2: Kids (6-11yrs)| Jan 8 - May 2| Tuesday 3pm-4pm",
                lesson5: "Level 2: Teens (12-17yrs)| Jan 8 - May 2| Thursday 7pm-8pm"

            }
        },
        adult: {
            tab1:{
                title: "Aquafit",
                div1Z: 2,
                div2Z: 1,
                lesson1: "Aquafit: Dance| Jan 8 - May 2| Monday 7am-8am",
                lesson2: "Aquafit: Dance| Jan 8 - May 2| Wednesday 7am-8am",
                lesson3: "Aquafit: Dance| Jan 8 - May 2| Thursday 7am-8am",
                lesson4: "Aquafit: Seniors| Jan 8 - May 2| Saturday 10am-11am",
                lesson5: "Aquafit: Seniors| Jan 8 - May 2| Friday 10am-11am"

            },
            tab2:{
                title: "Swimming",
                div1Z: 1,
                div2Z: 2,
                lesson1: "Level 1: Adults| Jan 8 - May 2| Wednesday 7pm-8pm",
                lesson2: "Level 2: Adults| Jan 8 - May 2| Monday 4pm-5pm",
                lesson3: "Level 2: Adults| Jan 8 - May 2| Wednesday 5pm-6pm",
                lesson4: "Level 3: Adults| Jan 8 - May 2| Tuesday 6pm-7pm",
                lesson5: "Level 3: Adults| Jan 8 - May 2| Thursday 7pm-8pm"

            }
        }
    };

    return(
        <div>
            <section className='screen-background-section'>
                <img src={divider1} alt="divider1" style={{position: "absolute", zIndex: content[screen][tab].div1Z}}></img>
                <img src={divider2} alt="divider2" style={{position: "absolute", zIndex: content[screen][tab].div2Z}}></img>
                <section className='screen-button-section'>
                    <Button variant="" className='button screen-btn' onClick={() => setTab("tab1")}>{content[screen].tab1.title}</Button>
                    <Button variant="" className='button screen-btn' onClick={() => setTab("tab2")}>{content[screen].tab2.title}</Button>
                </section>
                <section className='screen-foreground-section'>
                    <Card className='card'>
                        <Card.Text> {content[screen][tab].lesson1}</Card.Text>
                        <section>
                            <Button variant="" className='button screen-btn'><img src={moreInfoButton} alt="more info button"></img></Button>
                            <Button variant="" className='button screen-btn'><img src={regScreenButton} alt="register button"></img></Button>
                        </section>
                    </Card>
                    <Card className='card'>
                        <Card.Text>{content[screen][tab].lesson2}</Card.Text>
                        <section>
                            <Button variant="" className='button screen-btn'><img src={moreInfoButton} alt="more info button"></img></Button>
                            <Button variant="" className='button screen-btn'><img src={regScreenButton} alt="register button"></img></Button>
                        </section>
                    </Card>
                    <Card className='card'>
                        <Card.Text>{content[screen][tab].lesson3}</Card.Text>
                        <section>
                            <Button variant="" className='button screen-btn'><img src={moreInfoButton} alt="more info button"></img></Button>
                            <Button variant="" className='button screen-btn'><img src={regScreenButton} alt="register button"></img></Button>
                        </section>
                    </Card>
                    <Card className='card'>
                        <Card.Text>{content[screen][tab].lesson4}</Card.Text>
                        <section>
                            <Button variant="" className='button screen-btn'><img src={moreInfoButton} alt="more info button"></img></Button>
                            <Button variant="" className='button screen-btn'><img src={regScreenButton} alt="register button"></img></Button>
                        </section>
                    </Card>
                    <Card className='card'>
                        <Card.Text>{content[screen][tab].lesson5}</Card.Text>
                        <section>
                            <Button variant="" className='button screen-btn'><img src={moreInfoButton} alt="more info button"></img></Button>
                            <Button variant="" className='button screen-btn'><img src={regScreenButton} alt="register button"></img></Button>
                        </section>
                    </Card>
                </section>
            </section>
        </div>
    );
}