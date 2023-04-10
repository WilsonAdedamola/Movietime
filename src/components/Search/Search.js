import React from 'react'
import {CiSearch} from 'react-icons/ci'
import './Search.css'

const Search = () => {
  return (
    <>
      <div className="search">
        <div><CiSearch className='search-icon'/></div>
        <div><input type="text" placeholder='Search' className='search-bar'/></div>
      </div>
    </>
  )
}

export default Search
