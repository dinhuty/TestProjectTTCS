import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../logo.png'
import './header.css'
export default function Header_content() {
  const [vitri,setVitri] = useState(1)
  const timer = useRef(null)
  useEffect(() =>{
    timer.current = setTimeout(() => {
      if (vitri === 3){
        setVitri(1)
      }
      if(vitri < 3){
        setVitri((preVitri) => preVitri + 1)
      }
    }, 10000);
    return () => {
      clearTimeout(timer.current);
    };
  },[vitri])
  console.log(vitri)

  return (
    <div className='header'>
        <div className="header__content" style={vitri !== 1 ? {display : 'none'} : {display : 'block'}}>
            <div className="header__container">
                <p className="header__content-title">DRAGONBALL</p>
                <p className="header__content-decription">7 viên ngọc rồng</p>
        <Link to="/films/het-duong-song" className='link'><div className='header__content-btn'><i className="icon fa-solid fa-play"></i>Xem ngay</div></Link>
           </div>
        </div>
        <div className="header__content2" style={vitri !== 2 ? {display : 'none'} : {display : 'block'}}>
            <div className="header__container">
                <p className="header__content-title">A Business Proposal</p>
                <p className="header__content-decription">Hẹn hò chốn công sở</p>
        <Link to="/films/het-duong-song" className='link'><div className='header__content-btn'><i className="icon fa-solid fa-play"></i>Xem ngay</div></Link>
           </div>
        </div>
        <div className="header__content3" style={vitri !== 3 ? {display : 'none'} : {display : 'block'}}>
            <div className="header__container">
                <p className="header__content-title">ITEAWON CLASS</p>
                <p className="header__content-decription">Lớp học Iteawon</p>
        <Link to="/films/het-duong-song" className='link'><div className='header__content-btn'><i className="icon fa-solid fa-play"></i>Xem ngay</div></Link>
           </div>
        </div>
        
    </div>
  )
}
