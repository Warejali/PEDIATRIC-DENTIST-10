import React from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { serviceId } = useParams()
    return (
        <div className='w-50 mx-auto'>
            <h2>Billing address</h2>
            <Form>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control className='me-2' type="name" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control className='me-2' type="name" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email (Optional)</Form.Label>
                    <Form.Control type="email" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control className='me-2' type="name" placeholder="1234 Main St" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control className='me-2' type="name" placeholder="Apartment or suite" />
                </Form.Group>
            </Form>
        </div>
    );
};

export default Checkout;