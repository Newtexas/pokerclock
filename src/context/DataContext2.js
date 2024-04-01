import { createContext, useState } from "react";
import React from "react";

const DataContext2 = createContext({});

export const DataProvider2 = ({ children }) => {
  const [bodercolor, setBodercolor] = useState("#512178");
  const [modesmall, setModeSmallEx] = useState("25");
  const [stylestatus, setStyleStatus] = useState("bronco");
  const [setteam, setModeTeam] = useState("bronco");
  const [playerscount, setPlayers] = useState(1);
  const [cashcount, setCash] = useState(1);


  return (
    <DataContext2.Provider
      value={{
        bodercolor,
        modesmall,
        stylestatus,
        setteam,
        playerscount,
        cashcount,
        setBodercolor,
        setModeSmallEx,
        setStyleStatus,
        setModeTeam,
        setPlayers,
        setCash,
      }}
    >
      {children}
    </DataContext2.Provider>
  );
};

export default DataContext2;
