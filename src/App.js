import React from "react";
import { Route, Routes } from "react-router-dom";
import Searchfilm from "./component/Film/Searchfilm/Searchfilm";
import Header from "./component/Header/Header";
import Header_content from "./component/Header/Header_content";
import Home from "./component/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/result_search" element={<Searchfilm/>} />
      </Routes>
    </div>
  );
}

export default App;
