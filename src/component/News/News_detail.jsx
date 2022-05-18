import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import AnimationPages from '../Animation/AnimationPages'
import { NewsContext } from '../Provider/NewsProvider'
import './News_detail.css'


export default function News_detail() {
     window.scrollTo(0, 0)
    const news = useContext(NewsContext)
    const {newID} = useParams()
    const thisNew = news.find(newx => newx._id === newID)
    console.log(thisNew)
  return (
    <AnimationPages>
        <div className='news_detail'>
        {thisNew && 
            (
                <div className="news_detail__container">
                    <p className='news_detail-title'>{thisNew.title}</p>
                    <p className='news_detail-time'>{thisNew.time}</p>
                    <p className='news_detail-desc'>{thisNew.desc}</p>
                    <p className='news_detail-content'>{thisNew.content}</p>
                    <img className='news_detail-img' src={thisNew.img} alt="" />
                    <p className='news_detail-content'>{thisNew.content}</p>
                    <p className='news_detail-content'>{thisNew.content}</p>
                </div>
            )
        }
    </div>
    </AnimationPages>
  )
}
