import "./Clock.css";
import Timer from "./Timer";
import Settings from "./Settings";
import {useState} from "react";
import SettingsContext from "./SettingsContext";
import styled from "styled-components";

export const ContentBox = styled.div`
 display: flex;
    justify-content: center;
    align-items: center;
    width: 700px;
    margin: 0 auto;
    grid-gap: 0.0em;
    text-align: center;
    
`;

function Clock() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(10);
  const [breakMinutes, setBreakMinutes] = useState(10);

  return (
    <ContentBox>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
      </ContentBox>
      
  );
}

export default Clock;