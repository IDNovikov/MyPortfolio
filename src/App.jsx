import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import "./App.css";
import { Main } from "./components/Main";
import { Case } from "./components/Case";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family:"Krasnodar" ;
    src: url('/fonts/KrasnodarGroteskTrial.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family:"Roboto Regular" ;
    src: url('/fonts/RobotoMono-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family:"Roboto Medium" ;
    src: url('/fonts/RobotoMono-Medium.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  `;

const Wrapper = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
  background-color: #1e1e1e;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(480px, 100%), 1fr));
`;

function App() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Main />
        <Case />
      </Wrapper>
    </>
  );
}

export default App;
