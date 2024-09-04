import React from 'react'
import SearchBar from './Search'


const Navbar = () => {
  return (
    <>
    <div className="Nav-bar">
        <div className="brand">ECart</div>
        <div className="SearchBar">
             <SearchBar/>
        </div>
       <div className="cart"> cart</div>

    </div>
    <div className="nav-bar-wrapper">
      <div className="items">filter</div>
      <div className="items">mobiles</div>
      <div className="items">tablets</div>
      <div className="items">PCs</div>
    </div>
    
    </>

  )
}

export default Navbar