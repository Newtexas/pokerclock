import React from "react";
import styled from "styled-components";
import AddButton from "./clock/AddButton";
import { useState } from "react";
import { GlobalStyles } from "./styles/Global";

export default function TimerStatus10({ SetMode }) {
  var [theme, setTheme] = useState("bronco");

  const handleThemeBronco = () => {
    setTheme((theme = "bronco"));
  };
  const handleThemeSteelers = () => {
    setTheme((theme = "steeler"));
  };
  const handleThemeVikings = () => {
    setTheme((theme = "viking"));
  };
  const handleThemeSeahawks = () => {
    setTheme((theme = "flyer"));
  };

  SetMode(theme);

  return (
    <div>
      <AddButton onClick={handleThemeBronco} text={"BRONCO"} />
      <AddButton onClick={handleThemeSeahawks} text={"FLYERS"} />
      <AddButton onClick={handleThemeSteelers} text={"STEELER"} />
      <AddButton onClick={handleThemeVikings} text={"VIKING"} />
    </div>
  );
}
