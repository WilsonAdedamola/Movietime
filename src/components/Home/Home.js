import React from 'react'
import './Home.css'
import { BsFillPlayFill } from 'react-icons/bs'
import { BsBookmark } from 'react-icons/bs'
import cover from '../../images/cover-image.png'
import { useGlobalContext } from '../../context'
import MovieCard from '../MovieCard/MovieCard'
import { NavLink } from 'react-router-dom'

const Home = () => {

  const { popularMovieCard, continueMovieCard } = useGlobalContext()

  const popularCard = popularMovieCard.map((movie) => {
    return <MovieCard movie={movie} />
  })

  const continueCard = continueMovieCard.map((movie) => {
    return <MovieCard movie={movie} />
  })

  return (
    <section className='home'>
      <p className='head'>New Release</p>
      <div className="new-release">
        <img src={cover} alt="Avatar" className='new-release__img' />
        <div className="absolute">
          <h1>AVATAR: THE WAY OF THE WATER</h1>
          <div className="new-release__details">
            <p>2022</p>
            <p>162 min</p>
            <p>Action</p>
            <p>Adventure</p>
            <p>Science Fiction</p>
          </div>
          <div className="new-release__description">
            <p>Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.</p>
          </div>
          <div className="new-release__cta">
            <div className="cta1 cta">
              <BsFillPlayFill className='cta-icon' /><p>WATCH NOW</p>
            </div>
            <div className="cta2 cta">
              <BsBookmark className='cta-icon' /><p>ADD TO LIST</p>
            </div>
          </div>
        </div>
      </div>
      <section className="popular">
        <div className='popular__top'>
          <p className='head'>Popular</p>
          <NavLink className='head-two'>View All</NavLink>
        </div>
        <div className="popular__card">
          {popularCard}
        </div>
      </section>
      <section className="popular">
        <p className='head'>Continue Watching</p>
        <div className="popular__card">
          {continueCard}
        </div>
      </section>
    </section>
  )
}

export default Home
