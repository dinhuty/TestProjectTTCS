import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './authadmin.css'

export default function Authadmin() {
  var [isAdmin,setIsAdmin] = useState(true)
  const handlAuthAdmin = () =>{
    setIsAdmin(false)
  }
  return (
    <div className='authadmin'>
        {isAdmin? (
             <div>
               <i className="fa-solid fa-fingerprint"></i>
             <p className="authadmin__title">
             Authentication
             </p>
             <form action="" className='authadmin__form'>
               <input className='authadmin__input' placeholder='username' type="username" />
               <input className='authadmin__input' placeholder='password' type="password" />
               
                 <button className='authadmin__btn' onClick={handlAuthAdmin} type='submit'>Đăng nhập</button>
             </form>
             </div>
        ): (
          <h1>Wellcom Admin</h1>
        )}
       
    </div>
  )
}
