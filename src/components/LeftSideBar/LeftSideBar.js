import React from 'react'
import { useGlobalContext } from '../../context'
import Logo from './../Logo'
import './LeftSideBar.css'
import { CiHome } from 'react-icons/ci'
import { RiCompassDiscoverLine } from 'react-icons/ri'
import { SlPeople } from 'react-icons/sl'
import { MdOutlineTimer } from 'react-icons/md'
import { MdOutlineAccessTime } from 'react-icons/md'
import { BsBookmarkPlus } from 'react-icons/bs'
import { AiOutlineStar } from 'react-icons/ai'
import { BsDownload } from 'react-icons/bs'
import { SlSettings } from 'react-icons/sl'
import { AiOutlineClose } from 'react-icons/ai'
import { TfiHelpAlt } from 'react-icons/tfi'
import { SlLogout } from 'react-icons/sl'
import Navigation from '../Navigation/Navigation'
import Search from '../Search/Search'
import { NavLink } from 'react-router-dom'

const LeftSideBar = () => {

  const { mobile, openLeft, setOpenLeft } = useGlobalContext()

  function handleCloseLeft() {
    setOpenLeft(false)
  }

  return (
    <div className={openLeft ? 'leftsidebar left-reveal' : 'leftsidebar'}>
      <div className="leftsidebar__top">
        {openLeft && <AiOutlineClose onClick={handleCloseLeft} className='closebtn' />}
        <div className='searchh'><Search /></div>
        <div className='logo'><Logo /></div>
        <div className="leftsidebar__menu menu">
          <div className='visible'>
            <h4>Navigation</h4>
            <Navigation/>
            <hr />
          </div>
          <h4>Menu</h4>
          <NavLink to='/' ><CiHome className='icons' />Home</NavLink>
          <a><RiCompassDiscoverLine className='icons' />Discovery</a>
          <a><SlPeople className='icons' /> Community</a>
          <a><MdOutlineTimer className='icons' /> Coming Soon</a>
        </div>
        <hr />
        <div className="leftsidebar__library menu">
          <h4>Library</h4>
          <a><MdOutlineAccessTime className='icons' /> Recent</a>
          <a><BsBookmarkPlus className='icons' /> Bookmarked</a>
          <a><AiOutlineStar className='icons' /> Top rated</a>
          <a><BsDownload className='icons' /> Downloaded</a>
        </div>
        <hr />
        <div className=" menu">
          <a><SlSettings className='icons' /> Settings</a>
          <a><TfiHelpAlt className='icons' /> Help</a>
        </div>
      </div>
      <div className="leftsidebar__bottom">
        <a className='logout'><SlLogout className='icons' />Logout</a>
      </div>
    </div>
  )
}

export default LeftSideBar
