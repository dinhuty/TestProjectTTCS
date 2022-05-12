import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../logo.png'
import './header.css'

export default function Header_content() {
  return (
    <div className='header'>
        <div className="header__content">
            <div className="header__container">
                <p className="header__content-title">DRAGONBALL</p>
                <p className="header__content-decription">7 viên ngọc rồng</p>
        <Link to="/films/het-duong-song" className='link'><div className='header__content-btn'><i className="icon fa-solid fa-play"></i>Xem ngay</div></Link>
        </div>
        </div>
    </div>
  )
}
