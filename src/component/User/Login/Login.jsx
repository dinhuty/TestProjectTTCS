import React from 'react'
import { Link } from 'react-router-dom'
import AnimationPages from '../../Animation/AnimationPages'
import './login.css'

export default function Login() {
  window.scrollTo(0, 0)
  return (
    <AnimationPages>
      <div className='login'>
      <div className="login__avatar">
        <i className="fa-solid fa-user avatar"></i>
      </div>
      <p className="login__title">Đăng nhập</p>
      <form action="" className='login__form'>
        <label htmlFor="">Email</label>
        <input type="email" placeholder='Email' />
        <label htmlFor="">Password</label>
        <input type="current-password" placeholder='Password' />
        <div>
          <Link to="/" className='link login__fw'>Quên mật khẩu</Link>
          <Link to="/user/register" className='link login__fw'>Bạn chưa có tài khoản?</Link>
        </div>
        <button className='fill-left' type="submit">Login</button>
      </form>
      </div>
    </AnimationPages>
  )
}
