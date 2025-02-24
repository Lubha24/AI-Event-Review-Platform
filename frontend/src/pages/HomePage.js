import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const HomePage = () => {
  return (
    <Container>
      <h1>🎉 Welcome to AI-Powered Event Reviews</h1>
      <p>Discover events and see AI-driven insights from user reviews.</p>
    </Container>
  );
};

export default HomePage;
