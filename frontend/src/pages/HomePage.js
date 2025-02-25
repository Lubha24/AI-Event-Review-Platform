import React from "react";
import styled from "styled-components";

// Styled components for the layout
const PageContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between; // Space out the containers evenly
  gap: 1rem; // Add spacing between the containers
  margin-top: 2rem;
`;

const Card = styled.div`
  flex: 1; // Each container takes equal space
  border: 1px solid #ccc; // Optional: Add a border for visual separation
  border-radius: 8px; // Optional: Rounded corners
  padding: 1rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Optional: Add a shadow for depth
`;

const Image = styled.img`
  width: 100%; // Make the image responsive
  height: auto;
  border-radius: 8px; // Optional: Rounded corners for the image
`;

const FigCaption = styled.figcaption`
  margin-top: 0.5rem;
  font-style: italic;
  color: #555;
`;

const HomePage = () => {
  return (
    <PageContainer>
      <h1>🎉 Welcome to our events site</h1>
      <p>
        Discover amazing events and get the inside scoop from real attendees. We’ll help you find the best experiences,
        so you know exactly what to expect and how to make the most of your time!
      </p>

      {/* Flexbox container for the three cards */}
      <FlexContainer>
        {/* Card 1 */}
        <Card>
          <Image
            src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
          <h3>Music Festival</h3>
          <p>Join us for an exciting music festival filled with fun and learning!</p>
          <FigCaption>Fig. 1 - Music Festival</FigCaption>
        </Card>

        {/* Card 2 */}
        <Card>
          <Image
            src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" // Image 2
            alt="Woman at Event"
          />
          <h3>Networking Event</h3>
          <p>Don't miss out on this amazing opportunity to network and grow!</p>
          <FigCaption>Fig. 2 - Networking Event</FigCaption>
        </Card>

        {/* Card 3 */}
        <Card>
          <Image
            src="https://media.istockphoto.com/id/1785808259/photo/networking-opportunities.jpg?s=1024x1024&w=is&k=20&c=hmtD9mMIwo4ZDewcy6H2JmcQ6L1XElmNSHztwNkfzuw=" // Image 3
            alt="Networking Opportunities"
          />
          <h3>Community Gathering</h3>
          <p>Experience the best of what our community has to offer!</p>
          <FigCaption>Fig. 3 - Community Gathering</FigCaption>
        </Card>
      </FlexContainer>
    </PageContainer>
  );
};

export default HomePage;