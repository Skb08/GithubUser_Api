import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import Summary from "./components/Summary";

const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<Summary/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
