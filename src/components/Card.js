import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Card({ films }) {
  const [populary , setPopulary] = useState("red-700")
  useEffect(()=>{
    if (films.vote_average >5) {
      setPopulary("green-600")
    }
  })
  return (
    <Link to={`./single/${films.id}`} className='w-[200px] h-[500px]  text-center '>
      <img src={"https://image.tmdb.org/t/p/original/" + films.poster_path} className='w-[400px] h-[400px]' />
      <h1 className='flex justify-between'>{films.original_title} <div className={`bg-${populary} w-10 h-6`}>{films.vote_average }</div></h1>
    </Link>
  )
}

export default Card