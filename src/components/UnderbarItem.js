import React from "react";
import styled from "styled-components";
const white = "#FEF6E6";
export const Container = styled.div`
  display: grid;
  grid-gap: 0em;
  height: 40px;
  grid-template-columns: repeat(4, auto);

  h3 {
    font-size: 25px;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 10px;
    padding-top: 6px;
    padding-left: 50px;
    padding-right: 50px;
    background-color: ${(henk) => henk.devries};
    font-family: 'Graduate', cursive;


  }
`;

export default function UnderbarItem({ players, rebuys, price, color }) {
  const chiptotal = players * 30000 + rebuys * 30000;
  const cash = players * price + rebuys * price;
  const colorfade = color + "CC";
  return (
    <Container devries={colorfade}>
      <h3>Players: {players} </h3>
      <h3>chipcount: {chiptotal}</h3>
      <h3>cash: €{cash}</h3>
      <h3>rebuy: {rebuys}</h3>
    </Container>
  );
}
