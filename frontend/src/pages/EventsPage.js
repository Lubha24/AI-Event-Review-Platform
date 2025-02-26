import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const events = [
  {
    id: 1,
    title: "Music Festival",
    description: "Join us for an exciting music festival filled with fun and learning!",
    img: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 2,
    title: "Networking Event",
    description: "Don't miss out on this amazing opportunity to network and grow!",
    img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 3,
    title: "Community Gathering",
    description: "Experience the best of what our community has to offer!",
    img: "https://media.istockphoto.com/id/1785808259/photo/networking-opportunities.jpg?s=1024x1024&w=is&k=20&c=hmtD9mMIwo4ZDewcy6H2JmcQ6L1XElmNSHztwNkfzuw=",
  },
];

const EventsPage = () => {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">🎭 Upcoming & Past Events</h2>
      <Row>
        {events.map((event) => (
          <Col md={4} key={event.id}>
            <Card className="mb-4 shadow-sm">
              <Card.Img variant="top" src={event.img} />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <a href={`/event/${event.id}`} className="btn btn-primary">
                  View Details
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EventsPage;
