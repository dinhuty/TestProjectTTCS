import React from 'react'
import AnimationPages from '../../Animation/AnimationPages'
import './help.css'

export default function  Help() {
  window.scrollTo(0, 0)
  return (
    <AnimationPages>
      <div className='help'>
          <p className="help__title">
            Hỗ trợ
          </p>
        
          <div className="help__container">
            <input type="text" placeholder='Bạn cần hỗ trợ?' />
            <p className="help__title2">
            Điền thông tin
            </p>
            <input type="name" placeholder='Họ tên' />
            <input type="gmail" placeholder='Gmail' />
            <input type="address" placeholder='Địa chỉ' />
            <textarea placeholder="Type your message here...."  required></textarea>
            <button id='btn-help' className='fill-left btnuser' type="submit">Gửi</button>
          </div>
      </div>
    </AnimationPages>
  )
}
