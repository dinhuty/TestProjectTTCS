import React, { useContext, useEffect, useState } from 'react'
import './detail.css'
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AnimationPages from '../../Animation/AnimationPages';
import { MovieContext } from '../../Provider/MovieProvider';
import { useParams } from 'react-router-dom';


export default function Detail_film() {
    useEffect(() =>{
    window.scrollTo(0, 0)

    },[])

    // testloading
    const [loading,setLoading] = useState(true)
    
    useEffect(() => {
      setTimeout(()=>{

        setLoading(false)    
      }, 1000);
    },[])
    const [desc__active,setDesc__active] = useState(true)
    // getid
    const movies = useContext(MovieContext)
    const { movieID } = useParams();
    console.log(movieID)
    const thisMovie = movies.find(movie => movie.movie._id === movieID)
    // console.log(thisMovie)
    const movies_add = movies.filter ((movie) => movie.movie._id !== movieID)
    console.log(movies_add)

  return (
    <AnimationPages>
    {loading ? (
       <div className="loading">
       <div className='loading__content'></div>
       <div><h1>Dinhuty</h1></div>
     </div> 
    )
      : (
        <div className='detailfilm'>
        <div className="detail__container">
              <iframe src={thisMovie.link_embed} frameBorder="0" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>
        </div>
        <div className={desc__active ? 'detail__film-description' : 'detail__film-description desc__active'}>
            <p className='film__description-title'>{thisMovie.movie.name}</p>
            <p>Đánh giá</p>
            <Stack spacing={1}>
              <Rating name="size-medium" defaultValue={2} className="film__description-rate" />
            </Stack>
            <p className='film__description-desc'>{thisMovie.movie.origin_name}</p>
            <p className='film__description-desc'>Thể loại: {thisMovie.movie.category[0].name}</p>
            <p className='film__description-desc'>Quốc gia: {thisMovie.movie.country[0].name}</p>
            <p className='film__description-desc'>Ngày phát hành: {thisMovie.movie.modified.time}</p>
            <p className='film__description-desc'>{`${thisMovie.movie.content}`}</p>
           
            
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
        <div className="films__container" id="detail_film_container">
          {movies_add && movies_add.slice(0,8).map((movie) => (
               <div className="films__container-item" key={movie.movie._id}>
                    <Link to={`/films/${movie.movie._id}`}>
                    <img className='films__img' src={movie.movie.thumb_url} alt="" />
                    </Link>
                </div>
            ))}
          </div>
    </div>
      )
  }
    
    </AnimationPages>
  )
}
