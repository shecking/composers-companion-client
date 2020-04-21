import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import '../../index.scss'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sketches">My Sketches</Nav.Link>
    <Nav.Link href="#create-sketch">New Sketch</Nav.Link>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">Home</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar collapseOnSelect fixed='top' bg="dark" variant="dark" expand="lg">
    <Navbar.Brand className='header' href="#">
      Composer&apos;s Companion
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto header">
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
        { user && <span className="navbar-text mr-2"> {user.email}</span>}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
