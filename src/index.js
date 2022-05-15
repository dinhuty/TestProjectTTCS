import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import MovieProvider from './component/Provider/MovieProvider';
import NewsProvider from './component/Provider/NewsProvider';

// 
import { HashRouter, useLocation} from "react-router-dom";
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
import News_detail from "./component/News/News_detail";
import Pagination from "./component/TestPagination/Pagination";
import Authadmin from "./component/Admin/AuthAdmin/Authadmin";
import UserContextProvider from './component/Provider/UserContextProvider';
import AuthUserContextProvider from './component/Provider/AuthUser';

// 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   {/* <BrowserRouter basename='/TestProjectTTCS'>  */}
  // <MovieProvider>
  //   <NewsProvider>
  //   <BrowserRouter>
  //       <App />
  //   </BrowserRouter>
  //   </NewsProvider>
  // </MovieProvider>
      
  // </React.StrictMode>


      <React.StrictMode>
      {/* <BrowserRouter basename='/TestProjectTTCS'>  */}
    <MovieProvider>
      <UserContextProvider>
        <AuthUserContextProvider>
      <NewsProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<App />}>
          <Route path="" element={ <Home/>} />
          <Route path="result_search/:keyword" element={<Searchfilm />} />
          <Route path="search" element={<Search/>} />
          <Route path="news" element={<News />}/>
          <Route path="news/:newID" element={<News_detail />}/>
          <Route path="films" element={<Films />} />
          <Route path="user/login" element={<Login />}/>
          <Route path="user/register" element={<Register />}/>
          <Route path="user/help" element={<Help />} />
          <Route path="films/:movieID" element={<Detail_film />} />
          <Route path="pagi" element={<Pagination />} />
        </Route>
        <Route path='/admin' element={<Authadmin />} />
      </Routes>
      </BrowserRouter>
      </NewsProvider>
      </AuthUserContextProvider>
      </UserContextProvider>
    </MovieProvider>
        
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
