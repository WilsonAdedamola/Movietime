import React from 'react'
import Logo from '../Logo'
import './MobileHeader.css'
import { useGlobalContext } from '../../context'
import avatar from '../../images/user-avatar.png'
import { GiHamburgerMenu } from 'react-icons/gi'

const MobileHeader = () => {

    const { openLeft, setOpenLeft, openRight, setOpenRight } = useGlobalContext()

    function handleOpenRight() {
        setOpenRight(true)
    }

    function handleOpenLeft() {
        setOpenLeft(true)
    }

    return (
        <div className='moible-header'>
            <GiHamburgerMenu className='ham' onClick={handleOpenLeft} />
            <Logo className='llogo'/>
            <div className="rightsidebar__avatar">
                <img src={avatar} alt="user" onClick={handleOpenRight} className='pointer' />
            </div>
        </div>
    )
}

export default MobileHeader
