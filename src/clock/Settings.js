import ReactSlider from 'react-slider';
import './slider.css'
import SettingsContext from "./SettingsContext";
import {useContext, useState} from "react";
import BackButton from "./BackButton";
import styled from "styled-components";
import TimerStatus10 from "../Test11";
import DataContext2 from "../context/DataContext2";

const broncoorange = "#EA531A";

export const ContentBox = styled.div`
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;

  h3 {
    font-size: 80px;
    color: ${broncoorange};
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

function Settings() {
  const settingsInfo = useContext(SettingsContext);
  const [selectedMode9, setSelectedMode9] = useState("bronco");

  const { setModeTeam } = useContext(DataContext2);
  const setMode = (int) => {
    setModeTeam(int);

  };

  setMode(selectedMode9);
  return(
    <ContentBox>
    <div style={{textAlign:'left'}}>
      <h3>work: {settingsInfo.workMinutes}:00</h3>
      <ReactSlider
        className={'slider red'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.workMinutes}
        onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <br></br>
      <br></br>
      <br></br>
      <h3>break: {settingsInfo.breakMinutes}:00</h3>
      <ReactSlider
        className={'slider green'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.breakMinutes}
        onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
       <TimerStatus10 SetMode={setSelectedMode9} />
      <div style={{textAlign:'center', marginTop:'20px'}}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>

    </div>
    </ContentBox>
  );
}

export default Settings;