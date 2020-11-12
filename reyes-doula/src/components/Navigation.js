import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar variant="light" bg="light" expand="lg" collapseOnSelect>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Item>
                        <Nav.Link><NavLink exact to={"/"} className="nav_link" activeClassName={"selected"}>Rosalie Reyes</NavLink></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <div class="dropdown">
                                <NavLink to={"/about"} activeClassName={"selected_dropdown_about"} class="dropbtn">About</NavLink>
                                <div class="dropdown-content">
                                    <NavLink exact to={"/about/bio"} className="nav_link" activeClassName={"selected_dropdown"}>Bio</NavLink>
                                    <NavLink exact to={"/about/education"} className="nav_link" activeClassName={"selected_dropdown"}>Education</NavLink>
                                </div>
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><NavLink exact to={"/faq"} className="nav_link" activeClassName={"selected"}>FAQ's</NavLink></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><NavLink exact to={"/contact"} className="nav_link" activeClassName={"selected"}>Contact</NavLink></Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Navigation;