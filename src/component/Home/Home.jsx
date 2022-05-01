import React from 'react'
import Newfilm from '../Film/NewFilm/Newfilm'
import Trendfilm from '../Film/Trendfilm/Trendfilm'
import Header from '../Header/Header'
import Header_content from '../Header/Header_content'

export default function Home() {
  return (
    <div className='home'>
        <Header_content />
        <Trendfilm />
        <Newfilm />
    </div>

  )
}
