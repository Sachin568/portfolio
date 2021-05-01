import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "../../partials/images/my_image.jpg";
import '../navbar/navbar.style.css';

const Navibars = () => {
    return (
        <>
            <div>
                <Navbar fixed="top" variant="dark" expand="md" className="animate-navbar nav-theme justify-content-between">
                    <div>
                        <Navbar.Brand href="#home">
                            <img className="image" src={Image} alt="" />
                        </Navbar.Brand>
                    </div>
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto ">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#skills">Skills</Nav.Link>
                                <Nav.Link href="#experience">Experience</Nav.Link>
                                <Nav.Link href="#projects">Projects</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        </>
    );
};

export default Navibars;