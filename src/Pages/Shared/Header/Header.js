import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';       

const Header = () => {
    const [user] =useAuthState(auth)
    const handleSignOut =() =>
    signOut(auth)
    return (
      <>
     <Navbar className='mb-2 text-white mx-2 w-auto fw-bold'sticky='top' bg="success " variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        
                    </Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="Blog">Blog</Nav.Link>
                        
                    </Nav>
                    <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            
                                {
                                   user ?
                                   <button className='btn btn-link text-black text-decoration-none' onClick={handleSignOut}>Sign out  </button>
                                   :
                                    <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </Nav>
                </Container>
            </Navbar>
</>
    );
};

export default Header;