import {Nav,Navbar,Container} from 'react-bootstrap'
import logo from './../../assets/logo.png';
import './NavBar.css'
import { useEffect, useState } from 'react';
import {Link} from 'react-scroll';
export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function() {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (

   <>
   <Navbar expand="lg"  className={scrolled ?"navscroller fixed-top":"fixed-top" }>
    <Container>
  <Navbar.Brand href="#home" className="brand"><img src={logo} title='logo'/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link ><Link to="home" spy={true} smooth={true} offset={-100} duration={1200} >Home</Link></Nav.Link>
      <Nav.Link ><Link to="about" spy={true} smooth={true} offset={-90} duration={1200} >About Us</Link></Nav.Link>
      <Nav.Link ><Link to="food" spy={true} smooth={true} offset={-90} duration={1200} >explore foods</Link></Nav.Link>
      <Nav.Link><Link to="review" spy={true} smooth={true} offset={-90} duration={1200} >Reviews</Link></Nav.Link>
      <Nav.Link ><Link to="faq" spy={true} smooth={true} offset={-90} duration={1200} >FAQ</Link></Nav.Link>
    

    </Nav>
    <Nav>
    <Nav.Link href="#" id="lastnav">100 999 867</Nav.Link>
    </Nav>

   
 
   
  </Navbar.Collapse>
  </Container>
</Navbar>
   </>
  )
}
