import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Container, Card, ListGroup, Form, Button } from "react-bootstrap";
import "./Calendar.css"; // Import custom CSS for styling

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]); // Store events
  const [newEvent, setNewEvent] = useState(""); // Input for new event

  // Add a new event for the selected date
  const addEvent = () => {
    if (newEvent.trim() === "") return; // Prevent empty events

    const event = {
      id: Date.now(), // Unique ID for the event
      date: date.toDateString(), // Store the date as a string
      description: newEvent, // Event description
    };

    setEvents([...events, event]); // Add the new event
    setNewEvent(""); // Clear the input
  };

  // Delete an event by ID
  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  // Filter events for the selected date
  const filteredEvents = events.filter(
    (event) => event.date === date.toDateString()
  );

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">📅 Event Calendar</h2>
      <Card>
        <Card.Body>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            {/* Calendar */}
            <div className="mb-4 mb-md-0">
              <Calendar onChange={setDate} value={date} />
            </div>

            {/* Event List */}
            <div className="w-100 ms-md-4">
              <h4 className="mb-3">Events for {date.toDateString()}</h4>
              {filteredEvents.length > 0 ? (
                <ListGroup>
                  {filteredEvents.map((event) => (
                    <ListGroup.Item
                      key={event.id}
                      className="d-flex justify-content-between align-items-center"
                    >
                      {event.description}
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => deleteEvent(event.id)}
                      >
                        Delete
                      </Button>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <p>No events for this date.</p>
              )}

              {/* Add Event Form */}
              <Form className="mt-4">
                <Form.Group controlId="eventInput">
                  <Form.Control
                    type="text"
                    placeholder="Add a new event"
                    value={newEvent}
                    onChange={(e) => setNewEvent(e.target.value)}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  className="mt-2 w-100"
                  onClick={addEvent}
                >
                  Add Event
                </Button>
              </Form>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CalendarPage;