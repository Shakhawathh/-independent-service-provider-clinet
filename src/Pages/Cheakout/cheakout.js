import React from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';


const cheakout = () => {
  const { checkoutId } = useParams;
  return (
    <div>
      <h1 className=" text-center text-bolder text-success">check out{checkoutId}</h1>


<Form className="container mx-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          
          <Form.Control  type="Name" placeholder="Name" required/>
      
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          
          <Form.Control  type="email" placeholder="Enter email" required/>
      
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          
          <Form.Control  type="password" placeholder="Password" required />
        </Form.Group>
        
        <Button variant="secondary w-50 mx-auto d-block" type="submit">
          Check out
        </Button>
      </Form>
      
    </div>
  );
};

export default cheakout;
