import React from "react";
import styled from "styled-components";
import white from "../assets/chipsstack/Pokerchips-New-49ers.png";
import DataContext from "../context/DataContext";
import { useContext, useState } from "react";
import ChipsCalculator from "./ChipsCalculator";
import HeadbarItem from "./HeadbarItem";
import UnderbarItem from "./UnderbarItem";
import ChipsImg from "./ChipsImg";

const gold = "#A67C37";

export const Container = styled.div`
  display: grid;
  grid-gap: 0em;
  height: 100px;
  grid-template-columns: repeat(6, auto);
  text-align: center;
  padding-top: 20px;
  justify-content: center;

  
`;
export const Container2 = styled.div`
  display: grid;
  grid-gap: 0em;
  height: 20px;
  grid-template-columns: repeat(3, auto);
  text-align: center;
  justify-content: center;
  padding-top: 22px;
 
`;
export const SubContainer1 = styled.div`
  border-bottom: 3px solid ${(henk) => henk.degoude};

`;

export const SubContainer2 = styled.div`
  border-bottom: 3px solid ${(henk) => henk.degoude};


`;
export default function Headbar() {
  const [chipValue25, setChipValue25] = useState(8);
  const [chipValue100, setChipValue100] = useState(8);
  const [chipValue500, setChipValue500] = useState(8);
  const [chipValue1000, setChipValue1000] = useState(8);
  const [chipValue5000, setChipValue5000] = useState(8);
  const [chipValue25000, setChipValue25000] = useState(8);
  const [chipValue50000, setChipValue50000] = useState(8);

  const [chipImg25, setChipImg25] = useState();
  const [chipImg100, setChipImg100] = useState();
  const [chipImg500, setChipImg500] = useState();
  const [chipImg1000, setChipImg1000] = useState();
  const [chipImg5000, setChipImg5000] = useState();
  const [chipImg25000, setChipImg25000] = useState();
  const [chipImg50000, setChipImg50000] = useState();

  const { bodercolor } = useContext(DataContext);
  const { modesmall } = useContext(DataContext);
  const { stylestatus } = useContext(DataContext);
  const { playerscount } = useContext(DataContext);
  const { cashcount } = useContext(DataContext);

  return (
    <>
    <Container>
      <ChipsCalculator
        players={playerscount+cashcount}
        chip={25}
        modesmall={modesmall}
        SetChips={setChipValue25}
      />
      <ChipsCalculator
        players={playerscount+cashcount}
        chip={100}
        modesmall={modesmall}
        SetChips={setChipValue100}
      />
      <ChipsCalculator
        players={playerscount+cashcount}
        chip={500}
        modesmall={modesmall}
        SetChips={setChipValue500}
      />
      <ChipsCalculator
        players={playerscount+cashcount}
        chip={1000}
        modesmall={modesmall}
        SetChips={setChipValue1000}
      />
      <ChipsCalculator
        players={playerscount+cashcount}
        chip={5000}
        modesmall={modesmall}
        SetChips={setChipValue5000}
      />
      <ChipsCalculator
        players={playerscount+cashcount}
        chip={25000}
        modesmall={modesmall}
        SetChips={setChipValue25000}
      />
      <ChipsCalculator
        players={playerscount+cashcount}
        chip={50000}
        modesmall={modesmall}
        SetChips={setChipValue50000}
      />

      <ChipsImg style={stylestatus} chip={25} SetImg={setChipImg25} />
      <ChipsImg style={stylestatus} chip={100} SetImg={setChipImg100} />
      <ChipsImg style={stylestatus} chip={500} SetImg={setChipImg500} />
      <ChipsImg style={stylestatus} chip={1000} SetImg={setChipImg1000} />
      <ChipsImg style={stylestatus} chip={5000} SetImg={setChipImg5000} />
      <ChipsImg style={stylestatus} chip={25000} SetImg={setChipImg25000} />
      <ChipsImg style={stylestatus} chip={50000} SetImg={setChipImg50000} />

      <SubContainer1 devries={bodercolor} degoude={gold}>
        <HeadbarItem
          chipValue={chipValue25}
          img={chipImg25}
          color={bodercolor}
        />
      </SubContainer1>
      <SubContainer2 devries={bodercolor} degoude={gold}>
        <HeadbarItem
          chipValue={chipValue100}
          img={chipImg100}
          color={bodercolor}
        />
      </SubContainer2>
      <SubContainer1 devries={bodercolor} degoude={gold}>
        <HeadbarItem
          chipValue={chipValue500}
          img={chipImg500}
          color={bodercolor}
        />
      </SubContainer1>
      <SubContainer2 devries={bodercolor} degoude={gold}>
        <HeadbarItem
          chipValue={chipValue1000}
          img={chipImg1000}
          color={bodercolor}
        />
      </SubContainer2>
      <SubContainer1 devries={bodercolor} degoude={gold}>
        <HeadbarItem
          chipValue={chipValue5000}
          img={chipImg5000}
          color={bodercolor}
        />
      </SubContainer1>
      <SubContainer2 devries={bodercolor} degoude={gold}>
        <HeadbarItem
          chipValue={chipValue25000}
          img={chipImg25000}
          color={bodercolor}
        />
      </SubContainer2>
    </Container>

    <Container2>
    <SubContainer2 devries={bodercolor} degoude={gold}>
    <UnderbarItem
          players={playerscount}
          rebuys ={cashcount}
          price ={10}
          color={bodercolor}
        />
      </SubContainer2>
    </Container2>
    </>
  );
}
