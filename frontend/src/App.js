import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from './GlobalStyles';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap Import

import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage"; // Updated Import
//import EventDetailsPage from "./pages/EventDetailsPage"; // Correct Import
import ReviewPage from "./pages/ReviewPage";
import DashboardPage from "./pages/DashboardPage";
import CalendarPage from "./pages/CalendarPage";
import AdminPage from "./pages/AdminPage";
import Header from "./components/Header"; // Updated Header
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
       {/* <Route path="/event/:id" element={<EventDetailsPage />} /> */}
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
