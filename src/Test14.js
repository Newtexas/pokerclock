import React from "react";

import italy from "./assets/Chips2/NewTexasPokerChips-Italy-25.png";
import vikings from "./assets/Chips2/NewTexasPokerChips-Vikings-5000.png";
import seahawks from "./assets/Chips2/NewTexasPokerChips-Seahawks-25000.png";

import white from "./assets/Chips2/NewTexasPokerChips-Wit-100.png";
import black from "./assets/Chips2/NewTexasPokerChips-Zwart-1000.png";
import gold from "./assets/Chips2/NewTexasPokerChips-1000.png";
import reggae from "./assets/Chips2/NewTexasPokerChips-Reggae-50000.png";

import broncos from "./assets/Chips2/NewTexasPokerChips-Broncos-25.png";
import niners from "./assets/Chips2/NewTexasPokerChips-49ers-5000.png";
import sonics from "./assets/Chips2/NewTexasPokerChips-Sonics-25000.png";

import ducks from "./assets/Chips2/cmyk_NewTexasPokerChips-MightyDucks-25.png";
import flyers from "./assets/Chips2/cmyk_NewTexasPokerChips-FLyers-500.png";
import bulls from "./assets/Chips2/cmyk_NewTexasPokerChips-Bulls-5000.png";

import minnesota from "./assets/Chips2/cmyk_NewTexasPokerChips-MinnesotaWild-25.png";
import browns from "./assets/Chips2/cmyk_NewTexasPokerChips-Browns-500.png";
import steelers from "./assets/Chips2/cmyk_NewTexasPokerChips-Steelers-5000.png";

import logo5 from "./assets/Chips2/cmyk_NewTexasPokerChips-Bulls-5000.png";

export default function TimerStatus13({ value, SetChipImg1, SetChipImg2 }) {
  const imgStatus1 = (image) => {
    SetChipImg1(image);
    //console.log(image);
  };

  const imgStatus2 = (image) => {
    SetChipImg2(image);
    //console.log(image);
  };

  const extentionObj1 = {
    stage1: broncos,
    stage2: italy,
    stage3: minnesota,
    stage4: ducks,
    stage5: white,
    stage6: white,
    stage7: white,
    stage8: white,
    stage9: niners,
    stage10: vikings,
    stage11: flyers,
    stage12: browns,
    stage13: black,
    stage14: black,
    stage15: black,
    stage16: black,
    break1: italy,
    break2: vikings,
    break3: steelers,
    super1: gold,
    super2: gold,
  };

  const extentionObj2 = {
    stage1: white,
    stage2: white,
    stage3: white,
    stage4: white,
    stage5: niners,
    stage6: vikings,
    stage7: flyers,
    stage8: browns,
    stage9: black,
    stage10: black,
    stage11: black,
    stage12: black,
    stage13: sonics,
    stage14: seahawks,
    stage15: bulls,
    stage16: steelers,
    break1: broncos,
    break2: browns,
    break3: seahawks,
    super1: reggae,
    super2: reggae,
  };
  return imgStatus1(extentionObj1[value]), imgStatus2(extentionObj2[value]);
}
