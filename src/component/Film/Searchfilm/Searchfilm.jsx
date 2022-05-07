import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Header_content from '../../Header/Header_content'
import './searchfilm.css'

export default function Searchfilm() {
  var {keyword} = useParams()
  if (keyword === 'noInput$9999223'){
    keyword =" "
  }
  return (
    <div className='searchfilm'>
        <Header_content ></Header_content>
        <h1>Không có kết quả phù hợp cho '{keyword}'</h1>
    </div>
  )
}
