import React from 'react'
import { useLocation } from 'react-router-dom'
import Header_content from '../../Header/Header_content'
import './searchfilm.css'

export default function Searchfilm() {
    const location = useLocation()
  const { keyword } = location.state
  return (
    <div className='searchfilm'>
        <Header_content></Header_content>
        <h1>Không có kết quả phù hợp cho '{keyword}'</h1>
    </div>
  )
}
