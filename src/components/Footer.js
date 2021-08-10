import React from "react";
import styled from "styled-components";

const FooterOut = styled.div`
  border: 3px solid black;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

function Footer() {
  return <FooterOut>footer</FooterOut>;
}

export default Footer;
