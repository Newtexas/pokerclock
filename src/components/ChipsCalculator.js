import React from "react";

export default function ChipsCalculator({ players, chip, modesmall, SetChips}) {
  const chipValue = (vali, chips) => {
      const valo = chips * vali;
      SetChips(valo);
  };


 const extentionObj25 = {
  colornone: 8,
  color25: 0,
  color100: 0,
};


const extentionObj100 = {
  colornone: 8,
  color25: 10,
  color100: 0,
};

const extentionObj500 = {
  colornone: 6,
  color25: 6,
  color100: 8,
};

const extentionObj1000 = {
  colornone: 6,
  color25: 6,
  color100: 6,
};

const extentionObj5000 = {
  colornone: 4,
  color25: 4,
  color100: 4,
};

const extentionObj25000 = {
  colornone: 0,
  color25: 0,
  color100: 0,
};

const extentionObj50000 = {
  colornone: 0,
  color25: 0,
  color100: 2,
};

  const extentionObj = {
    25: extentionObj25[modesmall],
    100: extentionObj100[modesmall],
    500: extentionObj500[modesmall],
    1000: extentionObj1000[modesmall],
    5000: extentionObj5000[modesmall],
    25000: extentionObj25000[modesmall],
    50000: extentionObj50000[modesmall],
  };


const count = extentionObj[chip]


  chipValue(players, count);
}
