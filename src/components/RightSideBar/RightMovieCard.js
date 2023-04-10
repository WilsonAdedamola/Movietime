import React from 'react'
import './RightMovieCard.css'

const RightMovieCard = ({img, title, year, description, type, alt}) => {
  return (
    <div className='rightmoviecard'>
      <img src={img} alt={alt} />
      <h3 className='rightmoviecard__title'>{title}</h3>
      <div className="movie-description">
        <p>{type}</p>
        <p>{description}</p>
      </div>
      <p className='rightmoviecard__year'>{year}</p>
    </div>
  )
}

export default RightMovieCard
