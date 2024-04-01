import React from "react";
import styled from "styled-components";
import CurvedText from "./Test16";

export const ContentBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  transition: 1.5s;
  h3 {


    font-size: 35px;
    color: ${(color) => color.color};
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 10px;
    transition: 1.5s;
    padding-top: 123px;
    padding-bottom: 0px;
  }
  h6 {


font-size: 20px;
color: ${(color) => color.color};
font-weight: bold;
text-transform: uppercase;
letter-spacing: 2px;
transition: 1.5s;
padding-top: 10px;
}


`;
export const ContentBox2 = styled.div`
margin-top: -379px;
`;
export default function TimerStatus9({color, colorpos, text, img, sb, bb, ant, percentage}) {

    return (
      <>
        <ContentBox color={color} >

          <img
          style={{ width: 80}}
          src={img}
        />
          <h3>{text}</h3>
          <h6>{sb} - {bb}</h6>
          <h6>{ant}</h6>
          <ContentBox2>       
<CurvedText color={colorpos} text={ant} percentage={percentage} ant={ant}/>
</ContentBox2>   
        </ContentBox>  
</>
    );
}