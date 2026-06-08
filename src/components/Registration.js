import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';

export default function Registration({ lessonType }){
    const [validated, setValidated] = useState(false);
    const [confirmed, setConfirmed] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    const [pnumber, setPNumber] = useState("");
    const [cnumber, setCNumber] = useState("");
    const [date, setDate] = useState("");
    const [code, setCode] = useState("");

    const handleChange = (e) => {
        const newValue = e.target.value;
        if (/^\d*$/.test(newValue)) {
            setCNumber(newValue);
        }
    };

    const handleChange2 = (e) => {
        const newValue = e.target.value;
        if (/^\d*$/.test(newValue)) {
            setDate(newValue);
        }
    };

    const handleChange3 = (e) => {
        const newValue = e.target.value;
        if (/^\d*$/.test(newValue)) {
            setCode(newValue);
        }
    };

    const handleChange4 = (e) => {
        const newValue = e.target.value;
        if (/^\d*$/.test(newValue)) {
            setPNumber(newValue);
        }
    };

    const price = {
        "totsTot": "$166.59 CAD",
        "totsParent&Tot": "$175.99 CAD",
        "youthSwimming" : "$154.50 CAD",
        "youthLifeSaving" : "$95.79 CAD",
        "adultSwimming" : "$154.50 CAD",
        "adultAquafit" : "$115.99 CAD"
    }

    return(
        <div>
            {lessonType.startsWith("a") && !confirmed &&(
                <Form className='form'>
                    <h1>
                        Registration
                    </h1>
                    <Form.Group className='form-group'>
                        <Form.Label>Student Name</Form.Label>
                        <Form.Control required type="text" placeholder="Enter First Name then Last Name" />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control required type="text" placeholder="Enter phone number" value={pnumber} onChange={handleChange4} minLength={10} />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Label>Credit Card Number</Form.Label>
                        <Form.Control required type="text" placeholder="Enter credit card number" value={cnumber} onChange={handleChange} maxLength={16}/>
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Label>Credit Card Expiry Date</Form.Label>
                        <Form.Control required type="text" placeholder="Enter credit card expiry date (no spaces or dashes)" value={date} onChange={handleChange2} maxLength={4}/>
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Label>Credit Card Security Code</Form.Label>
                        <Form.Control required type="text" placeholder="Enter credit card security code" value={code} onChange={handleChange3} maxLength={3}/>
                    </Form.Group>
                    <div className='payForm'>
                        <Form.Text>
                            TOTAL: {price[lessonType]}
                        </Form.Text>
                        <Button type="submit" className='confirm-btn' onClick={() => {setConfirmed(true);}}>Confirm & Pay</Button>
                    </div>
                </Form>
            )}
            {(lessonType.startsWith("y") || lessonType.startsWith("t")) && !confirmed &&(
                <Form className='form'>
                    <h1>
                        Registration
                    </h1>
                    <Form.Group className='form-group'>
                        <Form.Label>Student Name</Form.Label>
                        <Form.Control required type="text" placeholder="Enter First Name then Last Name" />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Label>Student Age</Form.Label>
                        <Form.Control required type="number" placeholder="Enter Age" />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Label>Legal Guardian Name</Form.Label>
                        <Form.Control required type="text" placeholder="Enter First Name then Last Name" />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control required type="text" placeholder="Enter phone number" value={pnumber} onChange={handleChange4} minLength={10} />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Label>Credit Card Number</Form.Label>
                        <Form.Control required type="text" placeholder="Enter credit card number" value={cnumber} onChange={handleChange} maxLength={16}/>
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Label>Credit Card Expiry Date</Form.Label>
                        <Form.Control required type="text" placeholder="Enter credit card expiry date (no spaces or dashes)" value={date} onChange={handleChange2} maxLength={4}/>
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Label>Credit Card Security Code</Form.Label>
                        <Form.Control required type="text" placeholder="Enter credit card security code" value={code} onChange={handleChange3} maxLength={3}/>
                    </Form.Group>
                    <div className='payForm'>
                        <Form.Text>
                            TOTAL: {price[lessonType]}
                        </Form.Text>
                        <Button type="submit" className='confirm-btn' onClick={() => {setConfirmed(true);}}>Confirm & Pay</Button>
                    </div>
                </Form>
            )}
            {confirmed &&(
                <div>
                    <h1 className="confirm-title">Registration Confirmed!</h1>
                    <p className="confirm-p">Please check your email for the confirmation message and any updates regarding the sessions.</p>
                </div>
            )}
        </div>
    );
}