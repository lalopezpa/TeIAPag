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
          <Route exact path="/" element={<Home />} />
          <Route path="/iot" element={<IoT />} />
          <Route path="/ai" element={<IA />} />
          <Route path="/cc" element={<CC />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </GlobalProvider>
    </Router>
    </>
  );
}

export default App;
