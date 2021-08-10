import React from "react";
import styled from "styled-components";
import Introduce from "./Introduce";
import Resume from "./Resume";
import Project from "./Project";
import Contact from "./Contact";

const Out = styled.div`
  width: 100%;
  height: 100%;
  z-index: 30;
  position: relative;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* border: 3px solid tomato; */
`;

function Home() {
  return (
    <Out>
      Home. 전체 컴포넌트 포함 메인페이지.
      <Introduce />
      <Resume />
      <Project />
      <Contact />
    </Out>
  );
}

export default Home;
