import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Container, Card, ListGroup, Form, Button } from "react-bootstrap";
import "./Calendar.css"; // Import custom CSS for styling

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]); // Store events
  const [newEvent, setNewEvent] = useState({
    name: "",
    location: "",
    description: "",
  });

  // Function to save event to the backend
  const saveEventToDatabase = async (event) => {
    try {
      const response = await fetch("http://localhost:5000/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      });

      return await response.json(); // Return the response but don't log it
    } catch (error) {
      console.error("Error saving event:", error);
    }
  };

  // Add a new event for the selected date
  const addEvent = async () => {
    if (!newEvent.name || !newEvent.location || !newEvent.description) {
      alert("Please fill in all fields.");
      return;
    }

    const event = {
      name: newEvent.name,
      date: date.toISOString().split("T")[0], // Store the date in YYYY-MM-DD format
      location: newEvent.location,
      description: newEvent.description,
      created_at: new Date().toISOString(),
    };

    const savedEvent = await saveEventToDatabase(event);

    if (savedEvent) {
      setEvents([...events, savedEvent]); // Update state with new event
      setNewEvent({ name: "", location: "", description: "" }); // Clear the form
    }
  };

  // Delete an event by ID
  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  // Filter events for the selected date
  const filteredEvents = events.filter(
    (event) => event.date === date.toISOString().split("T")[0]
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
                      <div>
                        <h5>{event.name}</h5>
                        <p>{event.description}</p>
                        <small>Location: {event.location}</small>
                      </div>
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
                <Form.Group className="mb-3" controlId="eventName">
                  <Form.Label>Event Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter event name"
                    value={newEvent.name}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, name: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="eventLocation">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter event location"
                    value={newEvent.location}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, location: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="eventDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter event description"
                    value={newEvent.description}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, description: e.target.value })
                    }
                  />
                </Form.Group>

                <Button variant="primary" className="w-100" onClick={addEvent}>
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
