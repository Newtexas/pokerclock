import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import SettingsButton from "./SettingsButton";
import { useContext, useState, useEffect, useRef } from "react";
import SettingsContext from "./SettingsContext";
import RadialSeparators from "./RadialSeparators";


import Test from "../Test";
import TimerStatus from "../Test2";
import TimerStatus2 from "../Test3";
import TimerStatus3 from "../Test4";
import TimerStatus4 from "../Test5";
import TimerStatus5 from "../Test6";
import TimerStatus6 from "../Test7";
import AddButton from "./AddButton";
import TimerStatus7 from "../Test8";



function Timer() {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work"); // work/break/null
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  const testmodus = JSON.stringify(3);
  const [selectedMode, setSelectedMode] = useState("#4aec8c");
  const [selectedMode2, setSelectedMode2] = useState("#4aec8c");
  const [selectedMode3, setSelectedMode3] = useState("#4aec8c");
  const [selectedMode4, setSelectedMode4] = useState(testmodus);
  const [selectedMode5, setSelectedMode5] = useState("#4aec8c");
  const [selectedMode6, setSelectedMode6] = useState("./assets/NewTexasPokerChips-Broncos-25.png");
  const [selectedMode7, setSelectedMode7] = useState();

  const [likesCount, setlikesCount] = useState(5);
  const handleLikeCountIncrement = () => {
    setlikesCount(likesCount + 1);
  };
  const handleLikeCountDecrement = () => {
    setlikesCount(likesCount - 1);
  };

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === "work" ? "break" : "work";
      const nextSeconds =
        (nextMode === "work"
          ? settingsInfo.workMinutes
          : settingsInfo.breakMinutes) * 60;
    
      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
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
  }, [settingsInfo]);

  const totalSeconds =
    mode === "work"
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  return (
    <div>
      <CircularProgressbarWithChildren
        value={percentage}
        text={minutes + ":" + seconds}


        strokeWidth={2}
        background
        backgroundPadding={1}
        styles={buildStyles({
          textColor: "#fff",
          strokeLinecap: "butt",
          backgroundColor: selectedMode5,

          pathColor: selectedMode3,
          tailColor: "rgba(255,255,255,.2)",
        })}
      >
           <img
          style={{ width: 300, marginTop: -50 }}
          src={selectedMode6}
          alt="doge"
        />
           <div style={{ fontSize: 100, marginTop: -700 }}>
          <strong> {selectedMode4}   {likesCount}</strong>
        </div>

        <RadialSeparators
          count={12}
          style={{
            background: selectedMode3,

            width: "20px",
            // This needs to be equal to props.strokeWidth
            height: `${10}%`,
          }}
        />
      </CircularProgressbarWithChildren>

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
      <div style={{ marginTop: "20px" }}>
        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
        <TimerStatus value={mode} SetMode={setSelectedMode} />
        <TimerStatus2 value={mode} SetMode={setSelectedMode2} />
        <TimerStatus3 value={selectedMode4} SetColor={setSelectedMode3} />
        <TimerStatus5 value={selectedMode4} SetColor={setSelectedMode5} />
        <TimerStatus6 value={selectedMode4} SetImg={setSelectedMode6} />
        
        <TimerStatus4
          //value={mode}
          value={JSON.stringify(likesCount)}
          SetMode={setSelectedMode4}
        />
    
        <AddButton onClick={handleLikeCountIncrement} />
        <AddButton onClick={handleLikeCountDecrement} />
      </div>
 
    </div>

  );
}

export default Timer;
