import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {SaveTokenAdmin} from '../../Provider/SaveToken/SaveTokenAdmin'
import './authadmin.css'

export default function Authadmin() {
  const token = localStorage.getItem('Admin')
  var [isAdmin,setIsAdmin] = useState( token ? JSON.parse(token).authentication : false)
  const [admin, setAdmin] = useState({
    name : '',
    password: ''
  })
  const handlAuthAdmin = () =>{
    if (admin.name === 'admin' && admin.password === 'admin'){
      SaveTokenAdmin({
        authentication : true
      })
      setIsAdmin(true)
    }
  }
  console.log(admin)
  return (
        !isAdmin? (
    <div className='authadmin'>

             <div className='form__admin'>
               <i className="fa-solid fa-fingerprint"></i>
             <p className="authadmin__title">
             Authentication
             </p>
             <form action="" className='authadmin__form'>
               <input 
               className='authadmin__input' 
               placeholder='username' 
               type="username" 
               value={admin.name}
               onChange={event => setAdmin({name : event.target.value, password : admin.password})}
               />
               <input 
               className='authadmin__input' 
               placeholder='password' 
               type="password" 
               value={admin.password}
               onChange={event => setAdmin({name : admin.name,password : event.target.value})}
               />
               
                 <button className='authadmin__btn' onClick={handlAuthAdmin} type='submit'>Đăng nhập</button>
             </form>
             </div>
    </div>

        ): (
         <>
           <div className='option__manager'>
          <Link className='link title__manager ' to='/admin/films'>Quản lý phim</Link>
          <Link className='link title__manager' to='/admin/users'>Quản lý user</Link>
        
          <p className='out__admin' onClick={() => {localStorage.removeItem('Admin'); window.location.reload()}}>Thoát</p>
          </div>
          <Outlet></Outlet>
         </>
        )
       
  )
}
