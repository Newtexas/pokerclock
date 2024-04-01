import React from "react";


const black = "#13100D";

const white = "#FEF6E6";

const flyersorange = "#E9570D";
const bullsred = "#E30614";
const steelersyellow = "#FBB800";
const texas = "rgba(219, 199, 20, 0.863)";
const red = "#f54e4e";

const italyblue = "#005697";
const italygreen = "#199F36";

const broncoorange = "#FC4C02";
const broncoblue = "#0A2343";

const ninersred = "#AF1023";
const gold = "#A67C37";

const vikingpurple = "#512178";
const vikingyellow = "#FDC711";

const seahawksblue = "#002B58";
const seahawkslime = "#86BD4B";

const packergreen = "#203731";
const packeryellow = "#FFB612";

const soninicgreen = "#026634";
const sonicyellow = "#FDC300";

const minnesotared = "#DA0712";
const minnesotagreen = "#004226";

const duckspurple = "#582B4B";
const ducksgreen = "#007069";

const brownsbrown = "#3B2600";
const brownsorange = "#E8450F";

export default function TimerStatus5({value, SetColorPos, SetColorNeg, SetColorBack}) {
  const colorStatusPos = (color) => {
    SetColorPos(color);
    //console.log(color);
  };

  const colorStatusNeg = (color) => {
    SetColorNeg(color);
    //console.log(color);
  };

  const colorStatusBack = (color) => {
    SetColorBack(color);
    //console.log(color);
  };

  const extentionObjPos = {
    stage1: broncoblue,
    stage2: italyblue,
    stage3: minnesotagreen,
    stage4: duckspurple,
    stage5: ninersred,
    stage6: vikingpurple,
    stage7: black,
    stage8: brownsbrown,
    stage9: ninersred,
    stage10: vikingyellow,
    stage11: flyersorange,
    stage12: broncoorange,
    stage13: soninicgreen,
    stage14: seahawksblue,
    stage15: bullsred,
    stage16: steelersyellow,
    break1: red,
    break2: red,
    break3: red,
    super1: red,
    super2: red,
  };
  
  const extentionObjNeg = {
    stage1: broncoorange,
    stage2: gold,
    stage3: minnesotared,
    stage4: ducksgreen,
    stage5: gold,
    stage6: vikingyellow,
    stage7: flyersorange,
    stage8: brownsorange,
    stage9: gold,
    stage10: vikingpurple,
    stage11: black,
    stage12: brownsbrown,
    stage13: sonicyellow,
    stage14: seahawkslime,
    stage15: black,
    stage16: black,
    break1: black,
    break2: black,
    break3: black,
    super1: red,
    super2: red,
  };

  const extentionObjBack = {
    stage1: broncoorange,
    stage2: italyblue,
    stage3: minnesotared,
    stage4: ducksgreen,
    stage5: ninersred,
    stage6: vikingyellow,
    stage7: flyersorange,
    stage8: brownsorange,
    stage9: ninersred,
    stage10: vikingpurple,
    stage11: flyersorange,
    stage12: brownsbrown,
    stage13: sonicyellow,
    stage14: seahawkslime,
    stage15: bullsred,
    stage16: steelersyellow,
    break1: red,
    break2: red,
    break3: red,
    super1: red,
    super2: red,
  };

    return colorStatusPos(extentionObjPos[value]), colorStatusNeg(extentionObjNeg[value]), colorStatusBack(extentionObjBack[value]);
 
}