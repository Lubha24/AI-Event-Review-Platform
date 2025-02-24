import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --light-blue: #C9DDEE;
    --dark-blue: #27568B;
    --medium-blue: #47A1C4;
    --brown: #B68250;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: var(--light-blue);
    color: var(--dark-blue);
  }

  header {
    background-color: var(--dark-blue);
    color: white;
    padding: 20px;
    
  }

  footer {
    background-color: var(--dark-blue);
    color: white;
    padding: 10px;
    text-align: center;
  }

  h1, h2, h3 {
    color: var(--white);
  }

  a {
    color: var(--white);
    text-decoration: none;

    &:hover {
      color: var(--brown);
    }
  }

  button {
    background-color: var(--medium-blue);
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
      background-color: var(--dark-blue);
    }
  }
`;

export default GlobalStyles;
