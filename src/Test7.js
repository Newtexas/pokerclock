import React from "react";

import logo5 from "./assets/teams/Denver_Broncos_logo.svg";
import logo6 from "./assets/teams/Green_Bay_Packers_logo.svg";
import logo7 from "./assets/teams/NFL_Rams_logo.svg";
import logo8 from "./assets/NTlogos/NewTexas-Cap-Front.png";
import logo9 from "./assets/NTlogos/NT-Icon.png";
export default function TimerStatus6({ value, SetImg }) {
  const imgStatus = (image) => {
    SetImg(image);
    //console.log(image);
  };

  const extentionObj = {
    stage1: logo9,
    stage2: logo9,
    stage3: logo9,
    stage4: logo9,
    stage5: logo9,
    stage6: logo9,
    stage7: logo9,
    stage8: logo9,
    stage9: logo9,
    stage10: logo9,
    stage11: logo9,
    stage12: logo9,
    stage13: logo9,
    stage14: logo9,
    stage15: logo9,
    stage16: logo9,
    break1: logo9,
    break2: logo9,
    break3: logo9,
    super1: logo9,
    super2: logo9,
  };

  return imgStatus(extentionObj[value]);
}
