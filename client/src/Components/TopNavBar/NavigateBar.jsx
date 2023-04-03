import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HealthLogo from '../../images/healthlogo2.png';

function NavigateBar() {

  return (
    <>
      <Navbar className="navbarDiv" expand="lg">
        <Container className="navbarContainer">
          <Navbar.Brand>
            <Nav.Link>
              <Link to="/">
                <img
                  alt="Health Logo"
                  src={HealthLogo}
                  className="d-inline-block align-top navBarLogo "
                />
                {' '}
              </Link>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='navBarToggler' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='navBarList'>
              <Nav className="navBarLinkList m-auto">
                <Nav.Link>
                  <Link className="navBtn" to="/">Home
                    <span className='navBtnSpan'></span>
                    <span className='navBtnSpan'></span>
                    <span className='navBtnSpan'></span>
                    <span className='navBtnSpan'></span>
                    <span className='navBtnSpan'></span>
                    <span className='navBtnSpan'></span>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="navBtn" to="/about">About
                    <span className='navBtnSpan'></span>
                    <span className='navBtnSpan'></span>
                    <span className='navBtnSpan'></span>
                    <span className='navBtnSpan'></span>
                    <span className='navBtnSpan'></span>
                    <span className='navBtnSpan'></span>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="navBtn" to="/gallery">Gallery
                    <span className='navBtnSpan'></span>
                    <span className='navBtnSpan'></span>
                    <span className='navBtnSpan'></span>
                    <span className='navBtnSpan'></span>
                    <span className='navBtnSpan'></span>
                    <span className='navBtnSpan'></span>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="navBtn" to="/contact">Contact
                    <span className='navBtnSpan'></span>
                    <span className='navBtnSpan'></span>
                    <span className='navBtnSpan'></span>
                    <span className='navBtnSpan'></span>
                    <span className='navBtnSpan'></span>
                    <span className='navBtnSpan'></span>
                  </Link>
                </Nav.Link>

                <Nav.Link><Link className='navCelNumber' to="https://wa.me/355691234567">Cel: +355691234567</Link></Nav.Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigateBar;
