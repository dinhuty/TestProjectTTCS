import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AnimationPages from '../../Animation/AnimationPages'
import usersApi from '../../Api/Api'
import { AuthContext } from '../../Provider/AuthUser'
import { UsersContext } from '../../Provider/UserContextProvider'

export default function Register() {
  window.scrollTo(0, 0)
  let navigate = useNavigate()

  const users = useContext(UsersContext)
  const [newuser,setNewuser] = useState(null)
  const [newpassword,setNewpassword] = useState(null)
  const [repass,setRepass] = useState(null)
  const [error,setError] = useState(null)
  const AuthUser = useContext(AuthContext)
  useEffect(() =>{
    if(AuthUser.userAuth.stt) {
      navigate(-1)
    }
  },[AuthUser.userAuth.stt])
  const handleRegister =(e) =>{
    e.preventDefault();
    if( users.users.find((user) => user.username === newuser)){
      setError('Tài khoản đã tồn tại!')
    }else if(newuser.trim() === '' || newpassword.trim() === ''){
      setError('Tài khoản và mật khẩu không hợp lệ')
    }else if(repass != newpassword){
      setError('Mật khẩu không khớp')
    }
    else{
      usersApi.post('/users',{username: newuser,password: newpassword})
      users.setUsers([...users.users,{username: newuser,password: newpassword}])
      // navigate('/user/login')
      AuthUser.setUserStt({
        stt: true,
        username: newuser
      })
      navigate('/')
    }

  }
  
  return (
    <AnimationPages>
      <div className='register'>
         <div className="login__avatar">
         <i className="fa-solid fa-user-plus avatar"></i>
        </div>
        <p className="login__title">Đăng ký</p>
        {error && <div className='error_submit'>{error}</div>}
        <form action="" onSubmit={handleRegister} className='login__form'>
            <label htmlFor="">Username</label>
            <input 
            type="username" 
            placeholder='Username'
            value={newuser}
            onChange={event => setNewuser(event.target.value)} />
            <label htmlFor="">Password</label>
            <input 
            type="new-password" 
            placeholder='Password'
            value={newpassword}
            onChange={event => setNewpassword(event.target.value)} />
            
            <label htmlFor="">Password</label>
            <input type="new-password"
             placeholder='Re-password'
             value={repass}
            onChange={event => setRepass(event.target.value)} />
      
            <div>
          <Link to="/" className='link login__fw'>Đăng ký sau</Link>
          <Link to="/user/login" className='link login__fw'>Bạn đã có tài khoản?</Link>
            </div>
           
            <button  className='btnuser' type="submit">Đăng ký</button>
      </form>
    </div>
    </AnimationPages>
    
  )
}
