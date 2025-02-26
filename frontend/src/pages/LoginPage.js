import React, { useState } from "react";
import { Container, Form, Button, Card, Alert, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Simulate login (replace with actual authentication logic)
    if (email === "user@example.com" && password === "password") {
      setError("");
      alert("Login successful!");
      navigate("/"); // Redirect to home page after login
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`, // Add a background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card style={{ padding: "2rem", backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
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
                <div className="text-center mt-4">
                  <p>Trusted by thousands of event-goers worldwide.</p>
                  <div>
                    <img
                      src="https://images.app.goo.gl/ZzRmEU3R8ei6haRi7"
                      alt="Logo 1"
                      className="me-3"
                    />
                    <img
                      src="data:image/jpeg;base64,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
                      // iwxDCKC1qEXZ7y8RqEXZ7y8RYYhhFBa1CLs95eI1CLs95eIsMQwigtahF2e8vEahF2e8vEWGIYRQWtQi7PeXiNQi7PeXiLDEMIoLWoRdnvLxGoRdnvLxFhiGEUFrUIuz3l4jUIuz3l4iwxDCKC1qEXZ7y8RqEXZ7y8RYYhh//9k="
                      alt="Logo 2"
                      className="me-3"
                    />
                    <img
                      src="https://via.placeholder.com/100x50.png?text=Logo+3"
                      alt="Logo 3"
                    />
                  </div>
                </div>

                {/* Call-to-Action */}
                <div className="text-center mt-4">
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