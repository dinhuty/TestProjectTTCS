import React from 'react'
import { Link } from 'react-router-dom'
import AnimationPages from '../../Animation/AnimationPages'

export default function Register() {
  window.scrollTo(0, 0)
  return (
    <AnimationPages>
      <div className='register'>
         <div className="login__avatar">
         <i className="fa-solid fa-user-plus avatar"></i>
        </div>
        <p className="login__title">Đăng ký</p>
        <form action="" className='login__form'>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Email' />
            <label htmlFor="">Password</label>
            <input type="new-password" placeholder='Password' />
            <label htmlFor="">Password</label>
            <input type="new-password" placeholder='Re-password' />
            <div>
          <Link to="/" className='link login__fw'>Đăng ký sau</Link>
          <Link to="/user/login" className='link login__fw'>Bạn đã có tài khoản?</Link>
            </div>
           
            <button type="submit">Đăng ký</button>
      </form>
    </div>
    </AnimationPages>
    
  )
}
