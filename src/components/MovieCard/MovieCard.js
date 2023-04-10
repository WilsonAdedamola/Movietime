import React from 'react'
import { useGlobalContext } from '../../context'
import './MovieCard.css'

const MovieCard = (props) => {

  const {result} = useGlobalContext()

  return (
    <div className='moviecard'>
      <img src={props.movie.img} alt={props.movie.alt} />
      <p className='moviecard__title'>{props.movie.title}</p>
      <div className="moviecard__details">
        <p>{props.movie.year}</p>
        <div className="line"></div>
        <p>{props.movie.time}</p>
      </div>
    </div>
  )
}

export default MovieCard
