import React from "react";
import styled from "styled-components";

export const Chip = styled.div`
  * {
    margin: 0;
    padding: 0;
    font-family: "Istok Web", sans-serif;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 10vh;
    background: rgba(33, 33, 33 0.6);
  }

  position: relative;
  //width: 320px;
  width: 220px;
  //height: 480px;
  height: 380px;
  background: ${(props) => props.underColorNest};
  border-radius: 30px 30px 80px 80px;
  overflow: hidden;
  transition: 2.5s;
  border: 3px solid ${(props) => props.aboveColorNest};


  &:before {
    content: "";
    position: absolute;
    top: -60%;
    width: 100%;
    height: 100%;
    background: ${(props) => props.aboveColorNest};
    transform: skewY(345deg);
    transition: 1.5s;

  }

  &:after {
    content: "${(props) => props.value}";

    position: absolute;
    bottom: 0;
    right: 0%;
    font-weight: 600;
    font-size: 6em;
    color: ${(props) => props.aboveColorNestAd};
    top: 277px;

  }

  &:hover::before {
    top: -75%;
    transform: skewY(390deg);
  }
`;

export const ImgBox = styled.img`
  position: relative;
  width: 90%;
  padding-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  z-index: 1;
`;

export const ContentBox = styled.div`

position: relative;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;

  h3 {

    font-size: 35px;
    color: ${(props) => props.aboveColorNest};
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Montagu Slab', serif;
    //font-family: 'Inspiration', cursive;
    //font-family: 'Allura', cursive;
    //font-family: 'Playball', cursive;
    font-style: italic;



  }

  h6 {
    padding-top:10px;
    font-size: 40px;
    color: ${(props) => props.aboveColorNest};
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-family: 'Graduate', cursive;

   
  }
`;


export const Buy = styled.a`
  position: relative;
  top: 100px;
  opacity: 0;
  padding: 10px 30px;
  margin-top: 15px;
  color: #000000;
  text-decoration: none;
  background: #ffce00;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 1.5s;
  background-color: #ffce00;
  width: 150px;

  ${Chip}:hover & {
    top: -100px;
    opacity: 1;
    transition: 1.0s;
  }
`;

export default function Chips(props) {

const colorad = props.aboveColor + 47;


  return (

    <Chip underColorNest={props.underColor} aboveColorNest={props.aboveColor} value={props.value} aboveColorNestAd={colorad}>

      <ImgBox src={props.imageSource} alt="mouse corsair" />

      <ContentBox underColorNest={props.underColor} aboveColorNest={props.aboveColor}>
        <h3>{props.text}</h3>
        <h6>{props.value}</h6>
        <Buy>Buy Now</Buy>
      </ContentBox>
    </Chip>

  );
}
