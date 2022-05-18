import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../logo.png'
import { AuthContext } from '../Provider/AuthUser';
import { UsersContext } from '../Provider/UserContextProvider';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import './header.css'

export default function Header() {
    const [ok,setOk] = useState(true)
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setOk(false)
        } else {
            setOk(true)
        }
      });
    const userCurrent =useContext(AuthContext)
     useEffect(() =>{
        if (userCurrent.userAuth.stt){
            toast.warning('Đăng nhập thành công')
         
      }
     },[userCurrent.userAuth.stt])
     const handleLogout = () =>{
        userCurrent.setUserStt({ stt:false, username: '',password: ''})
        localStorage.removeItem('User')
        window.location.reload();
     }
  return (
    <div className="header">
        <nav className={ok ? 'header__nav' : 'header__nav header__nav-bg'}>
            <div className="header__logo">
                <Link to='/'>
                    <img className='header__logo-item' src={logo} alt="" />
                </Link>
            </div>
            {/* <ToastContainer /> */}
            <div className="header__menu">
                <NavLink to="/" className={(navData) => navData.isActive ? "header__active link" : "link" }>
                    <li className="header__menu-item">Home</li>
                </NavLink>
                <NavLink to="/films" className={(navData) => navData.isActive ? "header__active link" : "link" } >
                    <li className="header__menu-item">Movies</li>
                </NavLink>
                <NavLink to="/news" className={(navData) => navData.isActive ? "header__active link" : "link" } >
                    <li className="header__menu-item">Tin tức</li>
                </NavLink>
            </div>
            <div className="header__user">
                <NavLink to="/search" className={(navData) => navData.isActive ? "header__active link" : "link" }  >
                    <i className="fa-solid fa-magnifying-glass btn_search"></i>
                </NavLink>
                {userCurrent.userAuth.stt ? (<div className='header__user-if'>
                    <div  className='header__user-name'>Hello {userCurrent.userAuth.username} <i className="fa-solid fa-caret-down"></i></div>
                    <div className='header__user-more'>
                        <li>Tài khoản</li>
                        <li onClick={handleLogout}><i className="fa-solid fa-right-from-bracket"></i>Log out </li>
                    </div>
                
                </div>) :
                (
                    <>
                        <NavLink to="/user/login" className={(navData) => navData.isActive ? "header__active link" : "link" }>
                        <li className="header__user-item"><i className="fa-solid fa-right-to-bracket icon"></i>Đăng nhập</li>
                        </NavLink>
                        <NavLink to="/user/register" className={(navData) => navData.isActive ? "header__active link" : "link" }>
                            <li className="header__user-item"><i className="fa-solid fa-user-plus icon"></i>Đăng ký</li>
                        </NavLink>
                    </>
                )
                }
               
                <NavLink to="/user/help" className={(navData) => navData.isActive ? "header__active link" : "link" }>
                    <li className="header__user-item"><i className="fa-solid fa-circle-info icon"></i>Help</li>
                </NavLink>
            </div>
        </nav>
    </div>
  )
}
