import { Link } from 'react-router-dom'

function Card({ films }) {
  return (
    <Link to={`./single/${films.id}`} className='w-[200px] h-[500px]  text-center '>
      <img src={"https://image.tmdb.org/t/p/original/" + films.poster_path} className='w-[400px] h-[400px]' />
      <div className='flex justify-between'>
        <h1 className='flex justify-between'>{films.original_title} </h1>
        {films.vote_average > 5 ? <div className={`bg-green-600 w-10 h-6`}>{films.vote_average}</div> : <div className={`bg-red-700 w-10 h-6`}>{films.vote_average}</div>}
      </div>
    </Link>
  )
}

export default Card