import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';

const CheckOut = () => {
    return (
        <div>
            <h1> Ensuring your booking, fill up the following form </h1>
            <div className='w-75 mx-auto'>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                </InputGroup>

                <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">
                        https://example.com/users/
                    </InputGroup.Text>
                    <FormControl id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text>$</InputGroup.Text>
                    <FormControl aria-label="Amount (to the nearest dollar)" />
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>

                <InputGroup>
                    <InputGroup.Text>Add your valuable opinion</InputGroup.Text>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>
                <button className='bg-primary
                 text-white px-5 py-2 mt-1 border-0'>Submit</button>
            </div>


        </div>
    );
};

export default CheckOut;