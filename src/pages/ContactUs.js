import bigLogo from '../assets/bigLogo.png';
export default function ContactUs(){
    return(
        <div>
            <h1 className="info-title">Contact Us</h1>
            <p className="info-p">Email: info@swimsociety.com</p>
            <p className="info-p">Phone: 123-456-7890</p>
            <p className="info-p">Address: 123 Sesame Street, Toronto, ON X0X 0X0</p>
            <img src={bigLogo} alt="bigLogo"></img>
        </div>
        
    );
}