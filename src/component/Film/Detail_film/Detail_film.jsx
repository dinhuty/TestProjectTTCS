import React, { useContext, useEffect, useState } from 'react'
import './detail.css'
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import AnimationPages from '../../Animation/AnimationPages';
import { MovieContext } from '../../Provider/MovieProvider';
import { useParams } from 'react-router-dom';
import { UsersContext } from '../../Provider/UserContextProvider';
import { AuthContext } from '../../Provider/AuthUser';
import usersApi from '../../Api/Api'



export default function Detail_film() {
    useEffect(() =>{
    window.scrollTo(0, 0)

    },[])
    // testloading
    const [loading,setLoading] = useState(false)
    useEffect(() => {
      setTimeout(()=>{

        setLoading(false)    
      }, 500);
    },[])
    const handlOntop =() =>{
      window.scrollTo(0, 0)
    }
    
    
   
    const [desc__active,setDesc__active] = useState(true)
    // getid
    const movies = useContext(MovieContext)
    const { movieID } = useParams();
    const thisMovie = movies.find(movie => movie.movie.slug === movieID)
    const movies_add = movies.filter ((movie) => movie.movie.slug !== movieID)
    // comment
    const Comments = useContext(UsersContext)
    var thisComments = Comments.comments.filter((cmt) => cmt.id_film === movieID)
    const [thiscmt,setThiscmt] = useState(thisComments)
    
    // get user Current
    const userAuth = useContext(AuthContext)
    const [ndcmt,setNdcmt] = useState('')

    const handleComment = (e) =>{
      e.preventDefault();

      if (userAuth.userAuth.stt){
        setThiscmt([...thiscmt,{id_film: movieID,content: ndcmt,username: userAuth.userAuth.username}])
        Comments.setComments([...Comments.comments,{id_film: movieID,content: ndcmt,username: userAuth.userAuth.username}])
        usersApi.post('/comments',{id_film: movieID,content: ndcmt,username: userAuth.userAuth.username})
      }else{
        alert("Đăng nhập để cmt")
      }
    }
 
        
   
    

  return (
    <AnimationPages>
    {loading ? (
       <div className="loading">
       <div className='loading__content'></div>
       <div><h1>Dinhuty</h1></div>
     </div> 
    )
      : (
        thisMovie && 
        <div className='detailfilm'>
        <div className="detail__container">
              <iframe src={thisMovie.link_embed} frameBorder="0" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>
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
          thiscmt.length>0 ? thiscmt.map((cmt) =>(
            <div className="film__comments-content" key={cmt.id}>
              <p className='film__comments-nameuser'><i className="fa-solid fa-user-tie"></i>{cmt.username} :</p>
              <p className='film__comments-cmt'>{cmt.content}</p>
            </div>
          )) 
          : thisComments.map((cmt) =>(
            <div className="film__comments-content" key={cmt.id}>
              <p className='film__comments-nameuser'><i className="fa-solid fa-user-tie"></i>{cmt.username} :</p>
              <p className='film__comments-cmt'>{cmt.content}</p>
            </div>
          ))
        }
        <h1>Phim khác</h1>
        <div className="films__container" id="detail_film_container">
          {movies_add && movies_add.slice(0,8).map((movie) => (
               <div className="films__container-item" key={movie.movie._id}>
                    <Link to={`/films/${movie.movie.slug}`}>
                      <img className='films__img' onClick={handlOntop} src={movie.movie.thumb_url} alt="" />
                    </Link>
                </div>
            ))}
          </div>
        {/* <div className='noti'>Thong báo</div> */}
    </div>
      )
  }
    
    </AnimationPages>
  )
}
