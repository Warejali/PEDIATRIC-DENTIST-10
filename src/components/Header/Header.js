import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleLogout = () => {
        signOut(auth)
        navigate('/login')
    }
    return (
        <div>
            <Navbar className='alert-info' expand="lg">
                <Container>
                    <Navbar.Brand className='fw-bolder fs-4' as={Link} to="/">PEDIATRIC DENTIST</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='px-3 fw-bold' as={Link} to="/">HOME</Nav.Link>
                            <Nav.Link className='px-3 fw-bold' as={Link} to="services">SERVICES</Nav.Link>
                            <Nav.Link className='px-3 fw-bold' as={Link} to="about">ABOUT ME</Nav.Link>
                            <Nav.Link className='px-3 fw-bold' as={Link} to="blog">BLOGS</Nav.Link>

                            {

                                user ? <button className='btn px-3 fw-bold' onClick={handleLogout}>Log Out</button> :
                                    <Nav.Link className='px-3 fw-bold' as={Link} to="login">LOGIN</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;