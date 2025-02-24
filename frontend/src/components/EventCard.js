import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  width: 300px;
`;

const EventImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

const Details = styled.p`
  font-size: 0.9rem;
  color: gray;
`;

const Button = styled(Link)`
  display: inline-block;
  background: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 1rem;
  font-size: 0.9rem;
  &:hover {
    background: #0056b3;
  }
`;

const EventCard = ({ event }) => {
  return (
    <Card>
      <EventImage src={event.image} alt={event.title} />
      <Title>{event.title}</Title>
      <Details>📍 {event.location}</Details>
      <Details>📅 {event.date}</Details>
      <Button to={`/event/${event.id}`}>View Details</Button>
    </Card>
  );
};

export default EventCard;
