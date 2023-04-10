import React from 'react'
import './Navigation.css'
import { useGlobalContext } from '../../context'
import Search from '../Search/Search'
import { NavLink } from 'react-router-dom'
import { BiMoviePlay } from 'react-icons/bi'
import { RiMovie2Line } from 'react-icons/ri'
import { MdAnimation } from 'react-icons/md'
import { BiSlideshow } from 'react-icons/bi'
import { TbMovie } from 'react-icons/tb'
import avatar from '../../images/user-avatar.png'


const Navigation = () => {

    const { openRight, setOpenRight } = useGlobalContext()
    function handleOpenRight() {
        setOpenRight(true)
        console.log(openRight)
    }

    return (
        <nav className='navigation'>
            <div className='nav-div'>
                <NavLink to='all'><TbMovie className='navigate-icon' />All</NavLink>
                <NavLink to='movies'><BiMoviePlay className='navigate-icon' />Movies</NavLink>
                <NavLink to='series'><RiMovie2Line className='navigate-icon' />Series</NavLink>
                <NavLink to='animations'><MdAnimation className='navigate-icon' />Animations</NavLink>
                <NavLink to='tvShows'><BiSlideshow className='navigate-icon' />TV Shows</NavLink>
            </div>
            <div className='search-div'><Search /></div>
            <div className="rightsidebar__avatar avatarr">
                <img src={avatar} alt="user" onClick={handleOpenRight} className='pointer' />
            </div>
        </nav>
    )
}

export default Navigation
