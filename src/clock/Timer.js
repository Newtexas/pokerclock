import {
  CircularProgressbarWithChildren,
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import AddButton from "./AddButton";
import MinusButton from "./MinusButton";
import AddPlayer from "./AddPlayer";
import DeletePlayer from "./DeletePlayer";

import SettingsButton from "./SettingsButton";
import { useContext, useState, useEffect, useRef } from "react";
import SettingsContext from "./SettingsContext";
import RadialSeparators from "./RadialSeparators";

import TimerStatus4 from "../Test5";
import TimerStatus5 from "../Test6";
import TimerStatus6 from "../Test7";

import TimerStatus8 from "../Test9";
import TimerStatus9 from "../Test10";
import TimerStatus10 from "../Test11";
import TimerStatus11 from "../Test12";
import TimerStatus12 from "../Test13";
import TimerStatus13 from "../Test14";
import TimerStatus14 from "../Test15";
import styled from "styled-components";


import Chips from "../components/Chips";
import DataContext2 from "../context/DataContext2";

import logont from "../assets/NTlogos/NewTexas-Cap-Front.png";
import AddMoney from "./AddMoney";
import DeleteMoney from "./DeleteMoney";

export const ContentBoxFrame = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 0em;
`;

export const ContentBox1 = styled.div`
  padding: 50px;
  text-align: center;
  color: rgb(126, 89, 45);
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  border-left: 3px solid ${(devries) => devries.bordercolor};
  border-bottom: 5px solid ${(devries) => devries.bordercolor};
  border-top: 3px solid ${(devries) => devries.bordercolor};
  transition: 3.5s;
`;

export const ContentBox2 = styled.div`
  padding: 50px;
  width: 700px;
  text-align: center;
  color: rgb(126, 89, 45);
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  border-bottom: 5px solid ${(devries) => devries.bordercolor};
  border-top: 3px solid ${(devries) => devries.bordercolor};
  transition: 3.5s;
`;

export const ContentBox3 = styled.div`
  padding: 50px;
  padding-top: 150px;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 2em;
  text-align: center;

  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  border-right: 3px solid ${(devries) => devries.bordercolor};
  border-bottom: 5px solid ${(devries) => devries.bordercolor};
  border-top: 3px solid ${(devries) => devries.bordercolor};
  transition: 3.5s;
`;

export const ContentBox4 = styled.div`
  padding-top: 10px;
  display: grid;

  grid-gap: 2em;
  text-align: center;
  grid-template-columns: auto auto;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  border: 3px solid ${(devries) => devries.bordercolor};
  transition: 3.5s;
`;

function Timer() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);

  const [ColorBack, setColorBack] = useState("#4aec8c");
  const [ColorNeg, setColorNeg] = useState("#4aec8c");
  const [selectedMode4, setSelectedMode4] = useState("");
  const [modeSmall, setModeSmall] = useState("");
  const [ColorPos, setColorPos] = useState("#4aec8c");
  const [selectedMode6, setSelectedMode6] = useState(
    "./assets/NewTexasPokerChips-Broncos-25.png"
  );

  const [selectedMode8, setSelectedMode8] = useState("work");

  const [selectedChip1, setSelectedChip1] = useState("#4aec8c");
  const [selectedChip2, setSelectedChip2] = useState("#4aec8c");
  const [selectedChip3, setSelectedChip3] = useState("#4aec8c");
  const [selectedChip4, setSelectedChip4] = useState("#4aec8c");

  const [selectedChipImg1, setSelectedChipImg1] = useState("#4aec8c");
  const [selectedChipImg2, setSelectedChipImg2] = useState("#4aec8c");

  const [selectedSmallBlind, setSmallBlind] = useState("50");
  const [selectedBigBlind, setBigBlind] = useState("100");
  const [selectedAnte, setAnte] = useState("100");



  //Context-------------------------------------------------------
  const { setBodercolor } = useContext(DataContext2);
  const imgStatus1 = (int) => {
    setBodercolor(int);
  };
  const { setModeSmallEx } = useContext(DataContext2);
  const modeSmallStatus = (int) => {
    setModeSmallEx(int);
  };
  const { setStyleStatus } = useContext(DataContext2);
  const styleStatus = (int) => {
    setStyleStatus(int);
  };
  const { setteam } = useContext(DataContext2);

//Mode---------------------------------------------------------
  var [likesCount, setlikesCount] = useState(1);
  const handleLikeCountIncrement = () => {
    setlikesCount(likesCount + 1);
  };
  const handleLikeCountDecrement = () => {
    setlikesCount(likesCount - 1);
  };
  const handleLikeCountIncrementAuto = () => {
    setlikesCount((likesCount = likesCount + 1));
  };

//Players---------------------------
  var [playerCount, setPlayerCount] = useState(1);
  const handlePlayerCountIncrement = () => {
    setPlayerCount(playerCount + 1);
  };
  const handlePlayerCountDecrement = () => {
    setPlayerCount(playerCount - 1);
  };
  const { setPlayers } = useContext(DataContext2);
  const playersCount = (int) => {
    setPlayers(int);
  };
//Cash---------------------------


  var [cashCount, setCashCount] = useState(1);
  const handleCashCountIncrement = () => {
    setCashCount(cashCount + 1);
  };
  const handleCashCountDecrement = () => {
    setCashCount(cashCount - 1);
  };

  const { setCash } = useContext(DataContext2);
  const stackcashCount = (int) => {
    setCash(int);
  };


  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    function switchMode() {
      handleLikeCountIncrementAuto();

      const nextMode = selectedMode8;

      const nextSeconds =
        (nextMode === "work"
          ? settingsInfo.workMinutes
          : settingsInfo.breakMinutes) * 60;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current =
      (selectedMode8 === "work"
        ? settingsInfo.workMinutes
        : settingsInfo.breakMinutes) * 60;

    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo, selectedMode8, likesCount]);

  const totalSeconds =
    selectedMode8 === "work"
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);
  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  if (likesCount === 20) {
    setlikesCount((likesCount = 1));
  }
  if (likesCount < 1) {
    setlikesCount((likesCount = 19));
  }

  const white = "#FEF6E6";

  imgStatus1(ColorPos);
  modeSmallStatus(modeSmall);
  styleStatus(setteam);
  playersCount(playerCount);
  stackcashCount(cashCount);

  return (
    <div>
      <ContentBoxFrame>
        <ContentBox1 bordercolor={ColorPos}>

        <ContentBox4 bordercolor={ColorPos}>
          <div style={{ marginTop: "20px" }}>
            {isPaused ? (
              <PlayButton
                onClick={() => {
                  setIsPaused(false);
                  isPausedRef.current = false;
                }}
              />
            ) : (
              <PauseButton
                onClick={() => {
                  setIsPaused(true);
                  isPausedRef.current = true;
                }}
              />
            )}
          </div>
          <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />

        
          
          <AddButton onClick={handleLikeCountIncrement} text={""} />
          <MinusButton onClick={handleLikeCountDecrement} text={""} />
          <AddPlayer onClick={handlePlayerCountIncrement} text={""} />
          <DeletePlayer onClick={handlePlayerCountDecrement} text={""} />
          <AddMoney onClick={handleCashCountIncrement} text={""} />
          <DeleteMoney onClick={handleCashCountDecrement} text={""} />

          <TimerStatus5
            value={selectedMode4}
            SetColorPos={setColorPos}
            SetColorNeg={setColorNeg}
            SetColorBack={setColorBack}
          />
          <TimerStatus6 value={selectedMode4} SetImg={setSelectedMode6} />
          <TimerStatus8 value={selectedMode4} SetMode={setSelectedMode8} />
          <TimerStatus11
            value={selectedMode4}
            color={ColorBack}
            percentage={percentage}
          />
          <TimerStatus4
            value={JSON.stringify(likesCount)}
            SetMode={setSelectedMode4}
            SetModeSmall={setModeSmall}
          />
          </ContentBox4>
        </ContentBox1>
        <ContentBox2 bordercolor={ColorPos}>
          <CircularProgressbarWithChildren
            value={percentage}
            text={minutes + ":" + seconds}
            strokeWidth={2}
            background
            backgroundPadding={10}
            styles={buildStyles({
              textColor: ColorNeg,
              textSize: "20px",
              pathTransitionDuration: 1.0,
              strokeLinecap: "butt",
              backgroundColor: ColorPos,
              pathColor: ColorNeg,
              tailColor: "rgba(255,255,255,.2)",
            })}
          >
            
            <div style={{ width: "77%", marginTop: 0 }}>
              <CircularProgressbar
                value={100}
                strokeWidth={7}
                styles={buildStyles({
                  pathColor: "#FEF6E6",
                })}
              />
            </div>
            <div style={{ marginTop: -410 }}>
              <TimerStatus9
                color={ColorNeg}
                colorpos={ColorPos}
                text={selectedMode4}
                img={selectedMode6}
                sb={selectedSmallBlind}
                bb={selectedBigBlind}
                ant={selectedAnte}
                percentage={percentage}
              />
            </div>
  
            <RadialSeparators
              count={6}
              style={{
                background: white,
                borderRadius: "80% 80% 0% 0% / .35em .35em .75em .75em",

                width: "80px",
                // This needs to be equal to props.strokeWidth
                height: `${5}%`,
              }}
            />
            <RadialSeparators
              count={6}
              style={{
                background: ColorNeg,
                borderRadius: "80% 80% 0% 0% / .15em .15em .75em .75em",
                width: "40px",
                // This needs to be equal to props.strokeWidth
                height: `${5}%`,
              }}
            />
          </CircularProgressbarWithChildren>
        </ContentBox2>

        <ContentBox3 bordercolor={ColorPos}>
          <TimerStatus12
            value={selectedMode4}
            SetColorChip1={setSelectedChip1}
            SetColorChip2={setSelectedChip2}
            SetColorChip3={setSelectedChip3}
            SetColorChip4={setSelectedChip4}
          />
          <TimerStatus13
            value={selectedMode4}
            SetChipImg1={setSelectedChipImg1}
            SetChipImg2={setSelectedChipImg2}
          />
          <TimerStatus14
            value={selectedMode4}
            SetSmallBlind={setSmallBlind}
            SetBigBlind={setBigBlind}
            SetAnte={setAnte}
          />

          <Chips
            imageSource={selectedChipImg1}
            underColor={selectedChip1}
            aboveColor={selectedChip2}
            text={"small blind"}
            value={selectedSmallBlind}
          />

          <Chips
            imageSource={selectedChipImg2}
            underColor={selectedChip3}
            aboveColor={selectedChip4}
            text={"big blind"}
            value={selectedBigBlind}
          />
        </ContentBox3>
        <img
          style={{ width: 150, marginLeft: -365, marginTop: 20 }}
          src={logont}
        />
      </ContentBoxFrame>
    </div>
  );
}

export default Timer;
