import React from "react";
import EventList from "../components/EventList";

function HomePage() {
  return (
    <div>
      <h1>AI-Powered Event Review Platform</h1>
      <p>Find events, leave reviews, and get AI-driven insights.</p>
      <EventList />
    </div>
  );
}

export default HomePage;
