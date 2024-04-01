import React, { useState }from "react";
import Clock from "./clock/Clock";
import Headbar from "./components/Headbar";
import { GlobalStyles} from "./styles/Global";
import { DataProvider } from "./context/DataContext";
import { DataProvider2 } from "./context/DataContext2";
import { ContentBoxFrame, ContentBoxFrameSmall } from "./styles/Frame";



function App() {


  

  return (
    <>
    <DataProvider2>
    <DataProvider>
    <GlobalStyles/>
  
    <Headbar/>
    
    <ContentBoxFrame>
 
    <Clock/>

    </ContentBoxFrame>
    </DataProvider>
    </DataProvider2>
    </>

  );
}
export default App;

<div className="app"></div>