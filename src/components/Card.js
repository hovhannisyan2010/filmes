import React from 'react'
import { Link } from 'react-router-dom'

function Card({films}) {
  return (
    <Link to={`./single/${films.id}`} className='card'>
      <img src={"https://image.tmdb.org/t/p/original/"+films.poster_path} className='img'/>
      <h1>{films.original_title}</h1>
    </Link>
  )
}

export default Card