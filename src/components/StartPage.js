import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
  
const StartPage = ({ onStart }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onStart(email);
  };

  return (
    <div style={{'margin-top':'100px'}}>
      <h1>Welcome to the Quiz!</h1>
       <div className="login-form" style={{'margin-top':'100px'}}>
      <Form onSubmit={handleSubmit} className='py-3'>
                <Form.Group controlId='email' className='py-3'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter Email Address' value={email} onChange={(e) => { setEmail(e.target.value) }}></Form.Control>
                </Form.Group>
               
                <Button type='submit' variant='primary' onClick={handleSubmit}>Proceed</Button>
            </Form>
    </div>
    </div>
  );
};

export default StartPage;
