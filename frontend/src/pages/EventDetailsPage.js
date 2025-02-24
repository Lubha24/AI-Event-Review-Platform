import React from "react";
import { useParams } from "react-router-dom";

const EventDetailsPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Event Details (ID: {id})</h2>
      <p>Description of the event will go here.</p>
    </div>
  );
};

export default EventDetailsPage;
