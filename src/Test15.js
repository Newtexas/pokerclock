import React from "react";

export default function TimerStatus14({
  value,
  SetSmallBlind,
  SetBigBlind,
  SetAnte,
}) {
  const smallblindStatus = (mode) => {
    SetSmallBlind(mode);
    //console.log(mode);
  };

  const bigblindStatus = (mode) => {
    SetBigBlind(mode);
    //console.log(mode);
  };

  const anteStatus = (mode) => {
    SetAnte(mode);
    //console.log(mode);
  };

  const extentionObj1 = {
    stage1: "50",
    stage2: "75",
    stage3: "100",
    stage4: "150",
    stage5: "200",
    stage6: "300",
    stage7: "500",
    stage8: "800",
    stage9: "1K",
    stage10: "1K",
    stage11: "2K",
    stage12: "3K",
    stage13: "5K",
    stage14: "8K",
    stage15: "10K",
    stage16: "15K",
    break1: "15K",
    break2: "15K",
    break3: "15K",
    super1: "15K",
    super2: "15K",
  };

  const extentionObj2 = {
    stage1: "100",
    stage2: "150",
    stage3: "200",
    stage4: "300",
    stage5: "400",
    stage6: "600",
    stage7: "1K",
    stage8: "1.6K",
    stage9: "2K",
    stage10: "3K",
    stage11: "4K",
    stage12: "6K",
    stage13: "10K",
    stage14: "16K",
    stage15: "20K",
    stage16: "30K",
    break1: "30K",
    break2: "30K",
    break3: "30K",
    super1: "30K",
    super2: "30K",
  };

  const extentionObj3 = {
    stage1: "No Ante",
    stage2: "No Ante",
    stage3: "No Ante",
    stage4: "No Ante",
    stage5: "Small Blind Ante",
    stage6: "Small Blind Ante",
    stage7: "Small Blind Ante",
    stage8: "Small Blind Ante",
    stage9: "Small Blind Ante",
    stage10: "Small Blind Ante",
    stage11: "Big Blind Ante",
    stage12: "Big Blind Ante",
    stage13: "Big Blind Ante",
    stage14: "Big Blind Ante",
    stage15: "Big Blind Ante",
    stage16: "Big Blind Ante",
    break1: "Color Up 25",
    break2: "Color Up 100",
    break3: "Stack em Up",
    super1: "30K",
    super2: "30K",
  };
  return (
    smallblindStatus(extentionObj1[value]),
    bigblindStatus(extentionObj2[value]),
    anteStatus(extentionObj3[value])
  );
}
