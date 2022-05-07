import React from "react";
import { HashRouter, Route, Routes, useLocation} from "react-router-dom";
import Searchfilm from "./component/Film/Searchfilm/Searchfilm";
import Header from "./component/Header/Header";
import Header_content from "./component/Header/Header_content";
import Home from "./component/Home/Home";
import Login from "./component/User/Login/Login";
import Register from "./component/User/Register/Register";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Switch } from "@mui/material";
import Footer from "./component/Footer/Footer";
import Help from "./component/User/Help/Help";
import Detail_film from "./component/Film/Detail_film/Detail_film";
import { AnimatePresence } from "framer-motion";
import Search from "./component/Film/Searchfilm/Search";
import News from "./component/News/News";
import Films from "./component/Film/AllFilm/Films";




function App() {
  const location = useLocation()
  return (
    <div className="App">
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/" element={<Home/>} />
          <Route path="/result_search/:keyword" element={<Searchfilm />} />
          <Route path="/search" element={<Search/>} />
          <Route path="/news" element={<News />}/>
          <Route path="/films" element={<Films />} />
          <Route path="/user/login" element={<Login />}/>
          <Route path="/user/register" element={<Register />}/>
          <Route path="/user/help" element={<Help />} />
          <Route path="/detail_film" element={<Detail_film />} />
        </Routes>
      </AnimatePresence>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
