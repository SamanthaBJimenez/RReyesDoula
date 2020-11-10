import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container>
            <Navbar fixed="bottom" variant="dark" bg="dark" className="justify-content-center">
                <Nav>
                    <Navbar.Text className="coder_info">Created by <Nav.Link className="portfolio_link" href="https://samantha-jimenez.netlify.app/" target="_blank" rel="noopener roreferrer">Samantha Jimenez</Nav.Link></Navbar.Text>
                </Nav>
            </Navbar>
        </Container>
    )
};

export default Footer;