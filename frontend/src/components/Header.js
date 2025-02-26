import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBrain, FaCalendar, FaUser } from 'react-icons/fa'; // Importing icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css'; // Import custom CSS

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
            {/* Home Link */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            {/* Events Link */}
            <Nav.Link as={Link} to="/events">Events</Nav.Link>

            {/* Calendar Link */}
            <Nav.Link as={Link} to="/calendar">
              <FaCalendar style={{ marginRight: '5px' }} /> {/* Calendar icon */}
              Calendar
            </Nav.Link>

            {/* Reviews Link */}
            <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>

            {/* Log In / Sign Up Link */}
            <Nav.Link as={Link} to="/login">
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