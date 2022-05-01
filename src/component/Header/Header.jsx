import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../logo.png'
import './header.css'

export default function Header() {
    const [ok,setOk] = useState(true)
    const [keyword,setkeyword] = useState('')

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setOk(false)
        } else {
            setOk(true)
        }
      });
  
  return (
    <div className="header">
        <div className={ok ? 'header__nav' : 'header__nav header__nav-bg'}>
            <div className="header__logo">
                <Link to='/'>
                    <img className='header__logo-item' src={logo} alt="" />
                </Link>
            </div>
            
            <div className="header__menu">
                <Link to="/" className='link'>
                    <li className="header__menu-item">Home</li>
                </Link>
                <Link to="/" className='link'>
                    <li className="header__menu-item">Phim hay</li>
                </Link>
                <Link to="/" className='link'>
                    <li className="header__menu-item">Tin tức</li>
                </Link>
            </div>
            <div className='header__searchform' >
                <input type="text" className='search'placeholder='Tìm kiếm...' value={keyword} 
                    onChange={event => setkeyword(event.target.value)}
                />
                <Link className='link' to="/result_search" state={{ keyword: keyword }} onClick ={() => setkeyword('')}>
                    <i className="fa-solid fa-magnifying-glass btn_search"></i>
                </Link>
            </div>
            <div className="header__user">
                <Link to="/" className='link'>
                    <li className="header__user-item"><i className="fa-solid fa-right-to-bracket icon"></i>Đăng nhập</li>
                </Link>
                <Link to="/" className='link'>
                    <li className="header__user-item"><i className="fa-solid fa-user-plus icon"></i>Đăng ký</li>
                </Link>
                <Link to="/" className='link'>
                    <li className="header__user-item"><i className="fa-solid fa-circle-info icon"></i>Help</li>
                </Link>
            </div>
        </div>
    </div>
  )
}
