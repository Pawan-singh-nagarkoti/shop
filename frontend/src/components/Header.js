import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar
        expand="lg"
        collapseOnSelect
        style={{ background: '#000232', color: 'white' }}
      >
        <Link to="/" style={{ marginLeft: 15, color: 'white' }}>
          shopping website
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="cart_login">
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>cart
            </Link>
            <Link to="/login">
              <i className="fas fa-user"></i>Sign In
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
