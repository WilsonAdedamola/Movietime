import React from 'react'
import { useGlobalContext } from '../../context'
import MovieCard from '../../components/MovieCard/MovieCard'
import './Movies.css'

const Movies = () => {

  const { popularMovieCard, continueMovieCard } = useGlobalContext()

  const Movies = popularMovieCard.map((movie) => {
    return <MovieCard movie={movie} />
  })

  return (
    <div className='movies'>
      {Movies}
    </div>
  )
}

export default Movies
