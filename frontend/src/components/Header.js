import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background: #007bff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const Header = () => {
  return (
    <Nav>
      <h2>🎉 AI Event Reviews</h2>
      <div>
        <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/calendar">Calendar</Link> | <Link to="/admin">Admin</Link>
      </div>
    </Nav>
  );
};

export default Header;
