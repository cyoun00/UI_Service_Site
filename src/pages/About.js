import blob from "../assets/blob.png";
import swimlanes from "../assets/pexels-vijay-richhiya-2155208704-36018788.png";

export default function About(){
    return(
        <div>
            <h2 className="h2">Hi, we’re Swim Society!</h2>
            <img src={blob} alt="yellow blob" style={{position: "absolute", zIndex:1}}></img>
            <img src={swimlanes} alt="swim lanes with swimmers at the end" 
                style={{position: "absolute", zIndex:2, top:"40vh", left: "5vw"}}></img>
            <p className="about">Swim Society was founded with the idea that everyone no matter their age should learn how to swim. 

                <br /><br />Even if you never plan on being near a body of water, swimming is a life skill that can prevent many accidents.

                <br /><br />Swim Society offers lessons to help toddlers adapt to the water, learn-to-swim classes for both children and adults of any ages, and water aerobic classes for aquatic exercise that is easy on joints.

                <br /><br />We also offer classes to help swimmers at a high level prepare for their Lifeguard Certification course.

                <br /><br />Join in the fun today and register for a class!  </p>
            <p className="designedby">Site Designed by Christina Y</p>
        </div>
    );
}