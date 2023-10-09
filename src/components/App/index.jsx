import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from '@context/GlobalProvider';
import { GlobalStyle } from '@styles/GlobalStyle';

import Home from "@components/home/";
import {Header} from "@components/header/";
import IoT from "@components/iot/";
import IA from "@components/ia/";
import CC from "@components/cloud/";

const App = () => {
  return (
    <>
    <Router>
      <GlobalStyle />
      <GlobalProvider>
        <Header />
        <Routes>
          <Route exact path="/TeIAPag/" element={<Home />} />
          <Route exact path="/TeIAPag/iot" element={<IoT />} />
          <Route exact path="/TeIAPag/ai" element={<IA />} />
          <Route exact path="/TeIAPag/cc" element={<CC />} />
          <Route exact path="*" element={<Home />} />
        </Routes>
      </GlobalProvider>
    </Router>
    </>
  );
}

export default App;
