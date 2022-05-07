import React, { useEffect, useState } from 'react'
import './detail.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AnimationPages from '../../Animation/AnimationPages';


export default function Detail_film() {
    useEffect(() =>{
    window.scrollTo(0, 0)

    },[])

    // testlaoding
    const [loading,setLoading] = useState(true)
    
    useEffect(() => {
      setTimeout(()=>{

        setLoading(false)    
      }, 1000);
    },[])
    console.log(loading)

    // endtest

    // const [add_desc,setAdd_desc] = useState('Hiện thêm')
    const [desc__active,setDesc__active] = useState(true)

  return (
    <AnimationPages>
    {loading ? (
       <div className="loading">
       <div className='loading__content'></div>
       <div><h1>Loading</h1></div>
     </div> 
    )
      : (
        <div className='detailfilm'>
        <div className="detail__container">
              <iframe src="https://www.youtube.com/embed/MiHJPa7J7As" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
        </div>
        <div className={desc__active ? 'detail__film-description' : 'detail__film-description desc__active'}>
        {/* <div className="detail__film-description"> */}
            <p className='film__description-title'>WEST HAM - ARSENAL: HÀNG THỦ TỎA SÁNG, KỊCH BẢN DERBY LONDON HẤP DẪN | NGOẠI HẠNG ANH 21/22</p>
            <p>Đánh giá</p>
            <Stack spacing={1}>
              <Rating name="size-medium" defaultValue={2} className="film__description-rate" />
            </Stack>
            <p className='film__description-desc'>WEST HAM - ARSENAL: HÀNG THỦ TỎA SÁNG, CUỘC ĐUA TOP 4 KHẮC NGHIỆT | NGOẠI HẠNG ANH 21/22</p>
            <p className='film__description-desc'>Thắng lợi này giúp cho Arsenal tiếp tục đứng ở vị trí thứ 4 với 63 điểm , họ đang hơn đối thủ cạnh tranh trực tiếp của mình là Tottenham 2 điểm , vòng đầu tiếp theo Arsenal sẽ chỉ phải tiếp đón Leeds trên sân nhà trong khi Tottenham sẽ phải làm khách trên sân Anfield của Liverpool trước khi 2 đội sẽ đụng độ nhau trong trận cầu quyết định cho tấm vé dự Champions League mùa sau</p>
            <p className='film__description-desc'>Còn với West Ham , thất bại này khiến cho họ vẫn đứng ở vị trí thứ 7 với 52 điểm ( thua Man United 3 điểm ) , họ đang bị đối thủ đứng sau là Wolves bám sát với 3 điểm ít hơn nhưng West Ham đang đá nhiều hơn 1 trận , tuy nhiên 4 trận đấu còn lại của Wolves khá căng khi họ lần lượt phải thi đấu với Chelsea - Man City - Norwich - Liverpool .</p>
            <p className='film__description-desc'>#ngoạihạnganh #westham #arsenal</p>
            
        </div>
        <div className='desc__btn' onClick={() => { setDesc__active(!desc__active)}}>{desc__active ? 'Hiện thêm' : 'Ẩn bớt'}</div>
        <p className='film__comments-title'>Bình luận</p>
        <div className="film__comments" placeholder='Nhập bình luận của bạn'>
          <input type="text" placeholder='Nhập bình luận của bạn'/>
          <button><i className="fa-solid fa-paper-plane"></i></button>
        </div>
        <div className="film__comments-content">
          <p>Dinh:</p>
          <p>Thắng lợi này giúp cho Arsenal tiếp tục đứng ở vị trí thứ 4 với 63 điểm </p>
        </div>
        <div className="film__comments-content">
          <p>Dinh:</p>
          <p>Thắng lợi này giúp cho Arsenal tiếp tục đứng ở vị trí thứ 4 với 63 điểm </p>
        </div>
        <div className="film__comments-content">
          <p>Dinh:</p>
          <p>Thắng lợi này giúp cho Arsenal tiếp tục đứng ở vị trí thứ 4 với 63 điểm </p>
        </div>
        <div className="film__comments-content">
          <p>Dinh:</p>
          <p>Thắng lợi này giúp cho Arsenal tiếp tục đứng ở vị trí thứ 4 với 63 điểm </p>
        </div>
        <div className="film__comments-content">
          <p>Dinh:</p>
          <p>Thắng lợi này giúp cho Arsenal tiếp tục đứng ở vị trí thứ 4 với 63 điểm </p>
        </div>
        {/* Tạm thời */}
        <h1>Phim khác</h1>
        <div className="trendfilm__container1">
            <div className="trendfilm__container-item">
                    <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS2SrvalX8NS2C7tgbftN8yfVPaX3RWGQ_6TbxxnKKlUFsCQxSMzXnq5I78X0fm1KKH7W63ElWr2fmRmG_-M_PtgkZ0.jpg?r=f0d" alt="" />
            </div>
            <div className="trendfilm__container-item">
                <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS2SrvalX8NS2C7tgbftN8yfVPaX3RWGQ_6TbxxnKKlUFsCQxSMzXnq5I78X0fm1KKH7W63ElWr2fmRmG_-M_PtgkZ0.jpg?r=f0d" alt="" />
            </div>
            <div className="trendfilm__container-item">
                <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS2SrvalX8NS2C7tgbftN8yfVPaX3RWGQ_6TbxxnKKlUFsCQxSMzXnq5I78X0fm1KKH7W63ElWr2fmRmG_-M_PtgkZ0.jpg?r=f0d" alt="" />
            </div>
            <div className="trendfilm__container-item">
                <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS2SrvalX8NS2C7tgbftN8yfVPaX3RWGQ_6TbxxnKKlUFsCQxSMzXnq5I78X0fm1KKH7W63ElWr2fmRmG_-M_PtgkZ0.jpg?r=f0d" alt="" />
            </div>
            <div className="trendfilm__container-item">
                <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS2SrvalX8NS2C7tgbftN8yfVPaX3RWGQ_6TbxxnKKlUFsCQxSMzXnq5I78X0fm1KKH7W63ElWr2fmRmG_-M_PtgkZ0.jpg?r=f0d" alt="" />
            </div>
            <div className="trendfilm__container-item">
                    <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS2SrvalX8NS2C7tgbftN8yfVPaX3RWGQ_6TbxxnKKlUFsCQxSMzXnq5I78X0fm1KKH7W63ElWr2fmRmG_-M_PtgkZ0.jpg?r=f0d" alt="" />
            </div>
            <div className="trendfilm__container-item">
                <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS2SrvalX8NS2C7tgbftN8yfVPaX3RWGQ_6TbxxnKKlUFsCQxSMzXnq5I78X0fm1KKH7W63ElWr2fmRmG_-M_PtgkZ0.jpg?r=f0d" alt="" />
            </div>
            <div className="trendfilm__container-item">
                <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS2SrvalX8NS2C7tgbftN8yfVPaX3RWGQ_6TbxxnKKlUFsCQxSMzXnq5I78X0fm1KKH7W63ElWr2fmRmG_-M_PtgkZ0.jpg?r=f0d" alt="" />
            </div>
            <div className="trendfilm__container-item">
                <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS2SrvalX8NS2C7tgbftN8yfVPaX3RWGQ_6TbxxnKKlUFsCQxSMzXnq5I78X0fm1KKH7W63ElWr2fmRmG_-M_PtgkZ0.jpg?r=f0d" alt="" />
            </div>
            <div className="trendfilm__container-item">
                <img src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS2SrvalX8NS2C7tgbftN8yfVPaX3RWGQ_6TbxxnKKlUFsCQxSMzXnq5I78X0fm1KKH7W63ElWr2fmRmG_-M_PtgkZ0.jpg?r=f0d" alt="" />
            </div>
        </div>
      
    </div>
      )
  }
    
    </AnimationPages>
  )
}
