import React from 'react'
import styled from "styled-components";
const white = "#FEF6E6";
export const Container = styled.div`


  display: grid;
  grid-gap: 0em;
  height: 100px;
  grid-template-columns: repeat(2, 1fr);


  h3 {
    font-size: 35px;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 10px;
    padding-top: 30px;
    background-color: ${(henk) => henk.devries};
    font-family: 'Graduate', cursive;
  }
`;

export default function HeadbarItem({chipValue, img, color}) {

  const colorfade = color + "CC";
  return (
    <Container devries={colorfade} >
    <h3>{chipValue}</h3>
    <img style={{ width: 120,padding: 20, background: colorfade}} src={img} />
    </Container>
  )
}
