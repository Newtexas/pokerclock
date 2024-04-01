import React from "react";

export default function TimerStatus4({ value, SetMode, SetModeSmall }) {
  const modeStatus = (mode) => {
    SetMode(mode);
    //console.log(mode);
  };

  const modeStatusSmall = (mode) => {
    SetModeSmall(mode);
    //console.log(mode);
  };

  const extentionObj = {
    1: "stage1",
    2: "stage2",
    3: "stage3",
    4: "stage4",
    5: "break1",
    6: "stage5",
    7: "stage6",
    8: "stage7",
    9: "stage8",
    10: "break2",
    11: "stage9",
    12: "stage10",
    13: "stage11",
    14: "stage12",
    15: "break3",
    16: "stage13",
    17: "stage14",
    18: "stage15",
    19: "stage16",
  };

  const extentionObj2 = {
    1: "colornone",
    2: "colornone",
    3: "colornone",
    4: "colornone",
    5: "color25",
    6: "color25",
    7: "color25",
    8: "color25",
    9: "color25",
    10: "color100",
    11: "color100",
    12: "color100",
    13: "color100",
    14: "color100",
    15: "color100",
    16: "color100",
    17: "color100",
    18: "color100",
    19: "color100",
  };

  return modeStatus(extentionObj[value]), modeStatusSmall(extentionObj2[value]);
}
