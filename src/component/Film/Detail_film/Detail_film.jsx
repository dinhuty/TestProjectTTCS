import React, { useContext, useEffect, useState } from 'react'
import './detail.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import AnimationPages from '../../Animation/AnimationPages';
import { MovieContext } from '../../Provider/MovieProvider';
import { useParams } from 'react-router-dom';
import { UsersContext } from '../../Provider/UserContextProvider';
import { AuthContext } from '../../Provider/AuthUser';
import usersApi from '../../Api/Api'
import axios from 'axios';
import Aos from 'aos';
import "aos/dist/aos.css"



export default function Detail_film() {
    const [loading,setLoading] = useState(true)
    const [active_alert,setActive_alert] = useState(false)
    const [desc__active,setDesc__active] = useState(true)
    let time = new Date()
    

    const { movieID } = useParams();

    const movies = useContext(MovieContext)
    const userAuth = useContext(AuthContext)


    const thisMovie = movies.movies.find(movie => movie.movie.slug === movieID)
    const movies_add = movies.movies.filter ((movie) => movie.movie.slug !== movieID)
    const navigate = useNavigate();
    
    const handlOntop = async (slug) =>{
      window.scrollTo(0, 0)
      navigate(`/films/${slug}`)
      window.location.reload();
    }
    const [ndcmt,setNdcmt] = useState('')
    const [cmts,setCmts] = useState([])
    useEffect(() => {
      window.scrollTo(0, 0)
      const getcmt = async () =>{
        const res = await usersApi.get('/comments')
        setCmts (res.data.filter((cmt) => cmt.id_film === movieID))
        setLoading(false)
      }
      getcmt();
      Aos.init({duration: 1000})

      
    },[])
    const handleComment = (e) =>{
      e.preventDefault();

      if (userAuth.userAuth.stt ){
        if( ndcmt.trim().length >0){
          setCmts([...cmts,{id_film: movieID,content: ndcmt,username: userAuth.userAuth.username}])
          usersApi.post('/comments',{id_film: movieID,content: ndcmt,username: userAuth.userAuth.username})
        }
      }else{
        setActive_alert(true)
      }
      setNdcmt('')
      console.log(time.getHours() + 'h' + time.getMinutes()+ '-' + time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate())
    }
    const Loading = () => {
      return (
        <div className="loading">
        <div className='loading__content'></div>
        <div><h1>Dinhuty</h1></div>
      </div> 
     )
    } 
       
    

  return (
    <AnimationPages>
    {loading ? 
      <Loading />
      :
      (
        thisMovie && 
        <div className='detailfilm'>
            <div onClick={() => setActive_alert(false)} className={active_alert ? 'coating active_alert' : 'coating'}></div>
          <div className={active_alert ? 'alert_login active_alert' : 'alert_login'}>
            <p className='alert_login-title'>Yêu cầu đăng nhập</p>
            <i className="fa-solid fa-triangle-exclamation"></i>
            <div className='alert_login-option'>
              <div className="alert_login-exit" onClick={() => setActive_alert(false)}>
                cancel
              </div>
              <NavLink to='/user/login' className="alert_login-log link">
                Đăng nhập ngay  
              </NavLink>
            </div>
          </div>
        <div className="navigate">
          <p className='navigate-back-movies' onClick={() =>navigate("/films")}>Movies</p>
        <i className="fa-solid fa-angle-right"></i>
        <p>{thisMovie.movie.name}</p>
        </div>

        <div className="detail__container">
              {
              userAuth.userAuth.stt ?  <iframe src={thisMovie.link_embed} frameBorder="0" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe> :
              <div className='iframe'>
                
               <i className="fa-solid fa-circle-exclamation"></i>
                <p>Cần đăng nhập</p>
               </div>
            }
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
          <form action="" className="film__comments" onSubmit={handleComment} >
          <input type="text"
                 placeholder='Nhập bình luận của bạn'
                 value={ndcmt}
                 onChange={event => setNdcmt(event.target.value)}
                 />
          <button ><i className="fa-solid fa-paper-plane"></i></button>
          </form>
        {
          cmts && cmts.map((cmt) =>(
            <div className="film__comments-content" data-aos="fade-up" key={cmt.id}>
              <p className='film__comments-nameuser'><i className="fa-solid fa-user-tie"></i>{cmt.username} :</p>
              <p className='film__comments-cmt'>{cmt.content}</p>
            </div>
          )) 
        }
        <h1>Phim khác</h1>
        <div className="films__container" id="detail_film_container">
          {movies_add && movies_add.slice(0,8).map((movie) => (
               <div className="films__container-item" key={movie.movie.slug}>
                    {/* <Link to={`/films/${movie.movie.slug}`}> */}
                      <img className='films__img' onClick={() => {handlOntop(movie.movie.slug)}} src={movie.movie.thumb_url} alt="" />
                    {/* </Link> */}
                </div>
            ))}
          </div>
    </div>
      )
  }
    
    </AnimationPages>
  )
}
