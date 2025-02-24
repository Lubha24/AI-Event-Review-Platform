import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  padding: 1rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return <FooterContainer>© 2025 AI Event Review Platform</FooterContainer>;
};

export default Footer;
