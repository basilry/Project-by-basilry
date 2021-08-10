import React from 'react'
import styled from "styled-components";

const Out = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 30;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid tomato;
`;

function Introduce(){
    return(
        <Out>
            Introduce. 
        </Out>
    )
}

export default Introduce;