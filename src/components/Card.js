import React from 'react'
import { Link } from 'react-router-dom'

function Card({ films }) {
  return (
    <Link to={`./single/${films.id}`} className='w-[400px] h-[600px] smol:w-full text-center'>
      <img src={"https://image.tmdb.org/t/p/original/" + films.poster_path} className='w-[400px] h-[500px]' />
      <h1>{films.original_title}</h1>
    </Link>
  )
}

export default Card