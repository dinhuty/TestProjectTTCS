import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../logo.png'
import './header.css'

export default function Header_content() {
  return (
    <div className='header'>
        <div className="header__content">
            <div className="header__container">
                <p className="header__content-title">Avengers</p>
                <p className="header__content-decription">Biệt đội siêu anh hùng</p>
        <Link to="/detail_film" className='link'><div className='header__content-btn'><i className="icon fa-solid fa-play"></i>Xem ngay</div></Link>
        </div>
        </div>
    </div>
  )
}
