import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Styled components
const HeroSection = styled.div`
  background-image: url("https://source.unsplash.com/1600x900/?concert,party,event");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Dark overlay */
  }

  .hero-content {
    position: relative;
    z-index: 2;
  }
`;


const SearchBar = styled(Form.Control)`
  width: 50%;
  margin: 1rem auto;
  text-align: center;
  border-radius: 50px;
  padding: 10px 20px;
`;

const CTAButton = styled(Button)`
  background-color: #47A1C4;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 50px;
  transition: 0.3s;
  
  &:hover {
    background-color: #27568B;
  }
`;

const HomePage = () => {
  const navigate = useNavigate(); // For navigating to events page

  return (
    <Container fluid>
      {/* Hero Section */}
      <HeroSection>
        <div className="hero-content">
          <h1>🎉 Discover Amazing Events!</h1>
          <p>Find the best experiences and plan your next adventure</p>
          
          {/* Search Bar */}
          <Form>
            <SearchBar type="text" placeholder="Search for events..." />
          </Form>

          {/* CTA Button */}
          <CTAButton onClick={() => navigate("/events")}>
            Explore Events
          </CTAButton>
        </div>
      </HeroSection>
    </Container>
  );
};

export default HomePage;
