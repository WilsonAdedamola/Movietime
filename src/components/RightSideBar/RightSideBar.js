import React from 'react'
import avatar from '../../images/user-avatar.png'
import RightMovieCard from './RightMovieCard'
import './RightSideBar.css'
import coming from '../../images/coming.png'
import recently1 from '../../images/recently1.png'
import recently2 from '../../images/recently2.png'
import { CiBellOn } from 'react-icons/ci'
import { useGlobalContext } from '../../context'
import { AiOutlineClose } from 'react-icons/ai'

const RightSideBar = () => {

  function handleCloseRight() {
    setOpenRight(false)
    console.log(openRight)
  }

  const Rsb = () => {
    return (
      <div className={openRight ? "rightsidebar reveal" : "rightsidebar"}>
        <div className="flx">
          <div className="rightsidebar__avatar">
            <img src={avatar} alt="user" className='rightsidebar__avatar--img'/>
            <div className="rightsidebar__avatar--text">
              <p className='name'>Leslie Alexander</p>
              <p className='mail'>Darlene@gmail.com</p>
            </div>
          </div>
          {openRight && <AiOutlineClose onClick={handleCloseRight} className='closebtn' />}
        </div>
        <h3 className='margin'>Coming this week</h3>
        <RightMovieCard
          img={coming}
          title='Chucky'
          alt='Chucky'
          type='Horror'
          description='Adventure'
          year='2022'
        />
        <div className="remind">
          <CiBellOn className='remind-icon' /><p>Remind me</p>
        </div>
        <h3>Recently Added</h3>
        <RightMovieCard
          img={recently1}
          title='One Of Us Is Lying'
          alt='One Of Us Is Lying'
          type='Mystery'
          description='Adventure'
          year='2022'
        />
        <RightMovieCard
          img={recently2}
          title='Gatlopp'
          alt='Gatlopp'
          type='Comedy'
          description='Adventure'
          year='2022'
        />
      </div>
    )
  }

  const { openRight, setOpenRight } = useGlobalContext()

  return (
    <div className={openRight && 'rightsidebar-tablet'}>
      <Rsb />
    </div>
  )
}

export default RightSideBar
