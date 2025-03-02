import React, { useState } from "react";
import { Container, Form, Button, Card, Alert, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css"; // Import the CSS file

// Import local images
import cityOfCapeTown from "../assets/images/cityofcapetown.PNG";
import southernSun from "../assets/images/southernsun.PNG";
import cticc from "../assets/images/cticc.PNG";
import backgroundLogin from "../assets/images/istockphoto-488844028-1024x1024.jpg"; // Import the background image

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      // Send login request to the backend
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        setError("");
        alert("Login successful!");
        navigate("/"); // Redirect to home page after login
      } else {
        // Login failed
        setError(data.message || "Invalid email or password.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${backgroundLogin})` }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="login-card">
              <Card.Body>
                <h2 className="text-center mb-4">Welcome to City Events</h2>
                <p className="text-center mb-4">
                  Discover amazing events, connect with like-minded people, and make unforgettable memories.
                </p>

                {/* Login Form */}
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100 mb-3">
                    Log In
                  </Button>
                </Form>

                {/* Social Proof */}
                <div className="social-proof">
                  <p>Trusted by thousands of event-goers worldwide.</p>
                  <div className="logo-container">
                    <img
                      src={cityOfCapeTown} // Use local image
                      alt="City of Cape Town"
                    />
                    <img
                      src={southernSun} // Use local image
                      alt="Southern Sun"
                    />
                    <img
                      src={cticc} // Use local image
                      alt="CTICC"
                    />
                  </div>
                </div>

                {/* Call-to-Action */}
                <div className="cta-links">
                  <p>
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                  </p>
                  <p>
                    <Link to="/events">Explore Events</Link>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;