import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../../Pages/Home/CustomLink/CustomLink';
import logo from '../../images/logo/logo.png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <div className='d-flex justify-content-center align-items-center '>
                            <div> <img className='me-2 mb-2' style={{ width: '20px' }} src={logo} alt="" /></div>
                            <div> <p>willy loman photography corner</p></div>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={CustomLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={CustomLink} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={CustomLink} to="/about">About</Nav.Link>

                        </Nav>
                        <Nav>
                            {user ? <button className='bg-success rounded-pill text-white' onClick={handleSignOut}>{user.displayName ? user.displayName : "log in"}</button> :
                                <Nav.Link as={CustomLink} to="/logIn">Log In</Nav.Link>}
                            <Nav.Link as={CustomLink} to="/signUp" eventKey={2} href="#memes">
                                Sign Up
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;