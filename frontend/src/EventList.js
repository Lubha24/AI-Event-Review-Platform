import React from "react";

const events = [
  { id: 1, name: "Tech Conference", location: "Cape Town", date: "2025-03-15" },
  { id: 2, name: "AI Summit", location: "Johannesburg", date: "2025-04-10" }
];

function EventList() {
  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h3>{event.name}</h3>
            <p>{event.location} - {event.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
