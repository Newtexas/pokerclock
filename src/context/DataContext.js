import { createContext, useState } from "react";
import React from "react";

import DataContext2 from "../context/DataContext2";
import { useContext } from "react";



const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  const {bodercolor, modesmall, stylestatus, playerscount, cashcount} = useContext(DataContext2)
  return (
    <DataContext.Provider
      value={{
        bodercolor, modesmall, stylestatus, playerscount, cashcount
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
