import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimationPages from '../Animation/AnimationPages'
import { MovieContext } from '../Provider/MovieProvider'
import { NewsContext } from '../Provider/NewsProvider'
import './News.css'
import Aos from 'aos';
import "aos/dist/aos.css"

export default function News() {
  useEffect(() => {
    window.scrollTo(0, 0)
    Aos.init({duration: 1000})

    },[])
  const news = useContext(NewsContext)
  console.log(news)

  return (
    <AnimationPages>
    <div className='news'>
      <div className="news__container">
        <h1>Tin mới nhất</h1>
        {news && news.map((newx) => (
          
              <Link to={`/news/${newx._id}`} className='link' key={newx._id}>
                <div data-aos="fade-up" className='news_container-item'>
                <div className="news__col1">
                  <p className="new__title">{newx.title}</p>
                  <p className="new__time">{newx.time}</p>
                  <p className='new__desc'>{newx.desc}</p>
                </div>
                <div className="news__col2">
                  <img src={newx.img} alt="" />
                </div>
                </div>
           
            </Link>
        ))}
       
      </div>
    </div>
  </AnimationPages>
  )
}
