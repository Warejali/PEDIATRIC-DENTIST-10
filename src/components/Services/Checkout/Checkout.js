import React from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const Checkout = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate()
    const finalBooking = ()=> {
        navigate('/thankyou')
    }
    return (
        <div className='w-50 mx-auto my-5'>
            <h4>Service ID: {serviceId}</h4>
            <h2>Billing address</h2>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control className='me-2' type="name" placeholder="" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control className='me-2' type="name" placeholder="" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control className='me-2' type="number" placeholder="" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email (Optional)</Form.Label>
                    <Form.Control type="email" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control className='me-2' type="name" placeholder="1234 Main St" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Address 2 (Optional)</Form.Label>
                    <Form.Control className='me-2' type="name" placeholder="Apartment or suite" />
                </Form.Group>
            </Form>
            <button onClick={()=>finalBooking()} className='btn btn-primary'>Book Now</button>
        </div>
    );
};

export default Checkout;