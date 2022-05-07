import React from 'react'
import logo from '../../logo.png'
import './footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer__img">
            <img className='footer__img-logo' src={logo} alt="" />
            <img className='footer__img-logo' src="https://static.fullstack.edu.vn/static/media/dmca.2593d9ecf1c982e3c3a2.png" alt="" />
            <p>Sđt: 0367570800</p>
            <p>Email: dinhtranuty@gmail.com</p>
            <a href="">

            </a>
        </div>
        <div className="footer__content">
        <p className="footer__content-title">
            HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG - PTIT
        </p>
        <p>Trụ sở chính: 122 Hoàng Quốc Việt, Q.Cầu Giấy, Hà Nội.</p>
        <p>Cơ sở đào tạo tại Hà Nội: Đường Nguyễn Trãi, Q.Hà Đông, Hà Nội</p>
        <p>Học viện cơ sở tại TP. Hồ Chí Minh: 11 Nguyễn Đình Chiểu, P. Đa Kao, Q.1 TP Hồ Chí Minh</p>
        <p>Cơ sở đào tạo tại TP Hồ Chí Minh: Đường Man Thiện, P. Hiệp Phú, Q.9 TP Hồ Chí Minh</p>
        </div>
        <div className="footer__contact">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-git"></i>
        <i className="fa-brands fa-youtube"></i>
        </div>
    </div>
  )
}
