import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from "../Social/Social";

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from =location.state?.from?.pathname || "/";


    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    if(user) {
      navigate(from, {replace: true});
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = event => {
       navigate('/register');
    }

  return (
    <div className="container w-50 mx-auto">
      <h1 className="text-center text-success">Please login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
      
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        
        <Button variant="success w-50 mx-auto d-block" type="submit">
          Login
        </Button>
      </Form>
      <p>New to page <Link to= "/register" className="text-success text-decoration-none" onClick={navigateRegister}>Please Register</Link></p>
      <Social></Social>
    </div>
  );
};

export default Login;



