import React, { useContext, useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AnimationPages from '../../Animation/AnimationPages'
import { AuthContext } from '../../Provider/AuthUser'
import { UsersContext } from '../../Provider/UserContextProvider'
import './login.css'

export default function Login() {
  let navigate = useNavigate()
  const users = useContext(UsersContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const AuthUser = useContext(AuthContext)
  useEffect(() => {
    if(AuthUser.userAuth.stt) {
      navigate('/')
    }

  },[AuthUser.userAuth.stt])
  console.log(AuthUser)
  window.scrollTo(0, 0)

  const handleSubmit = (e) => {
    e.preventDefault();
     if( users.users.find((user) => user.username === username & user.password === password)){
      AuthUser.setUserStt({
        stt: true,
        username: username
      })
      navigate(-1)
     }else{
      setError('Tài khoản hoặc mật khẩu không đúng')
     }
      

  }


  return (
    <AnimationPages>
      <div className='login'>
      <div className="login__avatar">
        <i className="fa-solid fa-user avatar"></i>
      </div>
      <p className="login__title">Đăng nhập</p>
      {error && (
        <div className='error_submit'>{error}</div>
      )}
      <form action=""  onSubmit={handleSubmit} className='login__form'>
        <label htmlFor="">Username</label>
        <input 
        type="username" 
        placeholder='Email'
        value={username}
        onChange={event => setUsername(event.target.value)}
        />
        <label htmlFor="">Password</label>
        <input 
         type="password"
         placeholder='Password' 
         value={password}
         onChange={event => setPassword(event.target.value)}
         />
        
        <div>
          <Link to="/" className='link login__fw'>Quên mật khẩu</Link>
          <Link to="/user/register" className='link login__fw'>Bạn chưa có tài khoản?</Link>
        </div>
        <button className='fill-left btnuser' type="submit">Login</button>
      </form>
      </div>
    </AnimationPages>
  )
}
