import React from 'react'
import AnimationPages from '../Animation/AnimationPages'
import Newfilm from '../Film/NewFilm/Newfilm'
import Trendfilm from '../Film/Trendfilm/Trendfilm'
import Header from '../Header/Header'
import Header_content from '../Header/Header_content'
import './home.css'

export default function Home() {

  window.scrollTo(0, 0)

  return (
    <AnimationPages>
       <div className='home'>
        <Header_content />
        <Trendfilm />
        <Newfilm />
      </div>
    </AnimationPages>
   

  )
}
