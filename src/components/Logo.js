import React from 'react'
import logo from '../images/logo.png'

const Logo = (props) => {
  return (
    <div>
      <img src={logo} alt="Logo" className={props.className}/>
    </div>
  )
}

export default Logo
