import React from "react";

export default function TimerStatus8({value, SetMode}) {
  const modeStatus = (mode) => {
    SetMode(mode);
    //console.log(mode);
  };

  const extentionObj = {
    "stage1": "work",
    "stage2": "work",
    "stage3": "work",
    "stage4": "work",
    "stage5": "work",
    "stage6": "work",
    "stage7": "work",
    "stage8": "work",
    "stage9": "work",
    "stage10": "work",
    "stage11": "work",
    "stage12": "work",
    "stage13": "work",
    "stage14": "work",
    "stage15": "work",
    "stage16": "work",
    "break1": "break",
    "break2": "break",
    "break3": "break",
    "super1": "super",
    "super2": "super",
    }

    return modeStatus(extentionObj[value]);
 
}