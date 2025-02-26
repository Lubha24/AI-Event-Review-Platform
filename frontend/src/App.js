import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from './GlobalStyles';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap Import


import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import ReviewsPage from "./pages/ReviewsPage";
import DashboardPage from "./pages/DashboardPage";
import CalendarPage from "./pages/CalendarPage";
import LoginPage from "./pages/LoginPage"; // Import LoginPage
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page */}
        <Route path="/events" element={<EventsPage />} /> {/* Events Page */}
        <Route path="/reviews" element={<ReviewsPage />} /> {/* Reviews Page */}
        <Route path="/dashboard" element={<DashboardPage />} /> {/* Dashboard Page */}
        <Route path="/calendar" element={<CalendarPage />} /> {/* Calendar Page */}
        <Route path="/login" element={<LoginPage />} /> {/* Login Page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;