import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from './components/sidebar/index';

const App = () => {
  return (
    <div className="app">
      <SideBar />

      <div className="content">
        <Routes>
          <Route path="/homepage" element={<div>1</div>}/>
          <Route path="/inbox" element={<div>2</div>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
