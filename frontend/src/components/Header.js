import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBrain, FaCalendar, FaUser } from 'react-icons/fa'; // Importing icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FaBrain style={{ marginRight: '10px' }} /> {/* Icon added here */}
          City Events
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ color: 'white' }}>Home</Nav.Link> {/* Same color as AI Events */}
            <Nav.Link as={Link} to="/events" style={{ color: 'white' }}>Events</Nav.Link>
            <Nav.Link as={Link} to="/calendar" style={{ color: 'white' }}>
              <FaCalendar style={{ marginRight: '5px' }} /> {/* Calendar icon */}
              Calendar
            </Nav.Link>
            <Nav.Link as={Link} to="/reviews" style={{ color: 'white' }}>Reviews</Nav.Link>
            <Nav.Link as={Link} to="/login" style={{ color: 'white' }}>
              <FaUser style={{ marginRight: '5px' }} /> {/* User icon */}
              Log In / Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;