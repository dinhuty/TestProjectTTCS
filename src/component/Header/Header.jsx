import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../logo.png'
import './header.css'

export default function Header() {
    const [ok,setOk] = useState(true)
    // const [keyword,setkeyword] = useState('')

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setOk(false)
        } else {
            setOk(true)
        }
      });
  
  return (
    <div className="header">
        <nav className={ok ? 'header__nav' : 'header__nav header__nav-bg'}>
            <div className="header__logo">
                <Link to='/'>
                    <img className='header__logo-item' src={logo} alt="" />
                </Link>
            </div>
            
            <div className="header__menu">
                <NavLink to="/" className={(navData) => navData.isActive ? "header__active link" : "link" }>
                    <li className="header__menu-item">Home</li>
                </NavLink>
                <NavLink to="/films" className={(navData) => navData.isActive ? "header__active link" : "link" } >
                    <li className="header__menu-item">Phim hay</li>
                </NavLink>
                <NavLink to="/news" className={(navData) => navData.isActive ? "header__active link" : "link" } >
                    <li className="header__menu-item">Tin tức</li>
                </NavLink>
            </div>
            {/* <div className='header__searchform' > */}
                {/* <input type="text" className='search'placeholder='Tìm kiếm...' value={keyword} 
                    onChange={event => setkeyword(event.target.value)}
                /> */}
                {/* <Link className='link'  to={keyword ? `/result_search/${keyword}` : "/result_search/noInput$999223" } state={{ keyword: keyword }} onClick ={() => setkeyword('')}>
                    <i className="fa-solid fa-magnifying-glass btn_search"></i>
                </Link> */}
                
            {/* </div> */}
            <div className="header__user">
                <NavLink to="/search" className={(navData) => navData.isActive ? "header__active link" : "link" }  >
                    <i className="fa-solid fa-magnifying-glass btn_search"></i>
                </NavLink>
                <NavLink to="/user/login" className={(navData) => navData.isActive ? "header__active link" : "link" }>
                    <li className="header__user-item"><i className="fa-solid fa-right-to-bracket icon"></i>Đăng nhập</li>
                </NavLink>
                <NavLink to="/user/register" className={(navData) => navData.isActive ? "header__active link" : "link" }>
                    <li className="header__user-item"><i className="fa-solid fa-user-plus icon"></i>Đăng ký</li>
                </NavLink>
                <NavLink to="/user/help" className={(navData) => navData.isActive ? "header__active link" : "link" }>
                    <li className="header__user-item"><i className="fa-solid fa-circle-info icon"></i>Help</li>
                </NavLink>
            </div>
        </nav>
    </div>
  )
}
