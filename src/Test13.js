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



export default function TimerStatus12({value, SetColorChip1, SetColorChip2, SetColorChip3, SetColorChip4}) {
  const colorStatusChip1 = (color) => {
    SetColorChip1(color);
    //console.log(color);
  };

  const colorStatusChip2 = (color) => {
    SetColorChip2(color);
    //console.log(color);
  };

  const colorStatusChip3 = (color) => {
    SetColorChip3(color);
    //console.log(color);
  };

  const colorStatusChip4 = (color) => {
    SetColorChip4(color);
    //console.log(color);
  };
  const extentionObj1 = {
    stage1: broncoblue,
    stage2: italyblue,
    stage3: minnesotagreen,
    stage4: duckspurple,
    stage5: white,
    stage6: white,
    stage7: white,
    stage8: white,
    stage9: ninersred,
    stage10: vikingpurple,
    stage11: flyersorange,
    stage12: brownsbrown,
    stage13: black,
    stage14: black,
    stage15: black,
    stage16: black,
    break1: italyblue,
    break2: vikingpurple,
    break3: steelersyellow,
    super1: red,
    super2: red,

  };

  const extentionObj2 = {
    stage1: broncoorange,
    stage2: gold,
    stage3: minnesotared,
    stage4: ducksgreen,
    stage5: gold,
    stage6: gold,
    stage7: gold,
    stage8: gold,
    stage9: gold,
    stage10: vikingyellow,
    stage11: black,
    stage12: brownsorange,
    stage13: gold,
    stage14: gold,
    stage15: gold,
    stage16: gold,
    break1: gold,
    break2: vikingyellow,
    break3: black,
    super1: red,
    super2: red,

  };

  const extentionObj3 = {
    stage1: white,
    stage2: white,
    stage3: white,
    stage4: white,
    stage5: ninersred,
    stage6: vikingpurple,
    stage7: flyersorange,
    stage8: brownsbrown,
    stage9: black,
    stage10: black,
    stage11: black,
    stage12: black,
    stage13: soninicgreen,
    stage14: seahawksblue,
    stage15: bullsred,
    stage16: steelersyellow,
    break1: broncoblue,
    break2: brownsbrown,
    break3: seahawksblue,
    super1: red,
    super2: red,
  };

  const extentionObj4 = {
    stage1: gold,
    stage2: gold,
    stage3: gold,
    stage4: gold,
    stage5: gold,
    stage6: vikingyellow,
    stage7: black,
    stage8: brownsorange,
    stage9: gold,
    stage10: gold,
    stage11: gold,
    stage12: gold,
    stage13: sonicyellow,
    stage14: seahawkslime,
    stage15: black,
    stage16: black,
    break1: broncoorange,
    break2: broncoorange,
    break3: seahawkslime,
    super1: red,
    super2: red,
  };
    return colorStatusChip1(extentionObj1[value]), colorStatusChip2(extentionObj2[value]), colorStatusChip3(extentionObj3[value]), colorStatusChip4(extentionObj4[value]);
 
}