import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import '../../index.scss'

// <Nav.Item>
//   <Nav.Link className='footer-link' href="#">Link</Nav.Link>
// </Nav.Item>

const footerItems = (
  <div className=''>
    <Nav.Item>
      <Nav className='footer-copyright'>© Copyright Steven Hecking 2020</Nav>
    </Nav.Item>
  </div>
)

const Footer = ({ user }) => (
  <Navbar fixed='bottom' bg="dark" variant="dark" expand="md">
    <Nav className='footer'>
      { footerItems }
    </Nav>
  </Navbar>
)
export default Footer
