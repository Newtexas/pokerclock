import React from "react";
import styled from "styled-components";

export const ContentBox = styled.text`
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 15px;
  fill: ${(henk) => henk.devries};
  font-family: 'Montagu Slab', serif;

  transition: 4.5s;
`;

export const ContentBox2 = styled.text`
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 15px;
  fill: ${(henk) => henk.devries};
  font-family: 'Montagu Slab', serif;

  transition: 4.5s;
`;

export default function CurvedText({ color, text, percentage, ant }) {
  const calc = (percentage * 1)-100;



  const extentionObj = {
    "No Ante": -60,
    "Small Blind Ante": -17,
    "Big Blind Ante": -28,
    "Color Up 25": -43,
    "Color Up 100": -37,
    "Stack em Up": -41,
    }

  const mode = extentionObj[ant];
  const org2 = 45;
  return (
    <svg viewBox="0 0 400 400" height="auto" max-width="150%" width="452px">
      <path
        id="curve"
        fill="transparent"
        d="M0,200 a200,200 0 1,0 400,0"
        //d="M0,200 a200,200 0 1,0 400, 0a200, 200 0 1, 0 -400, 0"
        transform={`rotate(${mode} 200 200)`}
      />
      <path
        id="curve2"
        fill="transparent"
        d="M20,200 a160,160 0 1,1 360,0"
        transform={`rotate(${org2} 200 200)`}
      />

      <ContentBox devries={color}>
        <textPath xlinkHref="#curve">{text}</textPath>
        </ContentBox>
        <ContentBox2 devries={color}>
        <textPath xlinkHref="#curve2">NEW Texas</textPath>
      </ContentBox2>
    </svg>
  );
}
