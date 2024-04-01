import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "./styles/Global";
import img1 from "./assets/Seamless/NTHOMES1.png";
import img2 from "./assets/Seamless/NTHOMES2.png";
import img3 from "./assets/Seamless/NTHOMES3.png";
import img4 from "./assets/Seamless/NTHOMES4.png";
import img5 from "./assets/NTlogos/NT-Sfeerbeeld-1h.png";


import { DataProvider } from "./context/DataContext";

const black = "#13100D";

export default function TimerStatus11({ value, color, percentage }) {
  
  const percentagemin = percentage === 100 ? 100 : percentage > 90 ? percentage - 5 : percentage > 80 ? percentage - 10: percentage - 20;


  const extentionObj = {
    stage1: img1,
    stage2: img1,
    stage3: img1,
    stage4: img1,
    stage5: img1,
    stage6: img1,
    stage7: img1,
    stage8: img1,
    stage9: img1,
    stage10: img1,
    stage11: img1,
    stage12: img1,
    stage13: img1,
    stage14: img1,
    stage15: img1,
    stage16: img1,
    break1: img3,
    break2: img3,
    break3: img3,
    super1: img1,
    super2: img1,

  };

  const image = extentionObj[value];

  return (
    <div>
      <GlobalStyles
        tk={color}
        ts={image}
        td={black}
        taa={percentagemin}
        tab={percentage}
      />

<DataProvider color={color}/>


    </div>
  );
}
