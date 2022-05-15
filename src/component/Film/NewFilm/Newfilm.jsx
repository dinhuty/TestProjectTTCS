
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MovieContext } from '../../Provider/MovieProvider'
import Header_content from '../../Header/Header_content'
// test aos
import Aos from 'aos';
import "aos/dist/aos.css"

export default function Newfilm() {
  useEffect(() => {
    Aos.init({duration: 2000})
    },[])
  const movies = useContext(MovieContext)
  const chinese_movies = movies.filter((movie) => movie.movie.country[0].name === "Trung Quốc")
  const japan_movies = movies.filter((movie) => movie.movie.country[0].name === "Nhật Bản")

  console.log(chinese_movies)
  return (
    <div className='newfilm'>
        <p className="newfilm__title title">
            Phim Trung Quốc
        </p>
        <div className="films__container">
          {chinese_movies && chinese_movies.map((movie) => (
               <div data-aos="fade-up" className="films__container-item" key={movie.movie._id}>
                    <Link to={`/films/${movie.movie.slug}`}>
                    <img className='films__img' src={movie.movie.thumb_url} alt="" />
                    </Link>
                </div>
            ))}
          </div>
          <p className="newfilm__title title">
            Phim Nhật Bản
        </p>
        <div className="films__container">
          {japan_movies && japan_movies.map((movie) => (
               <div data-aos="fade-up" className="films__container-item" key={movie.movie._id}>
                    <Link to={`/films/${movie.movie.slug}`}>
                    <img className='films__img' src={movie.movie.thumb_url} alt="" />
                    </Link>
                </div>
            ))}
          </div>
          <p className="newfilm__title title">
            Phim Tình Cảm
        </p>
        <div className="films__container">
          {chinese_movies && chinese_movies.map((movie) => (
               <div data-aos="fade-up" className="films__container-item" key={movie.movie._id}>
                    <Link to={`/films/${movie.movie.slug}`}>
                    <img className='films__img' src={movie.movie.thumb_url} alt="" />
                    </Link>
                </div>
            ))}
          </div>
        
    </div>
  )
}
