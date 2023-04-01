import React from 'react'
import './Navbar.css'
import '../images/13935005400_0a6452b340_b.jpg' 

export default function Navbar() {
  return (
    <div className='top'>
        <div className='topLeft'>
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>Home</li>
                <li className='topListItem'>About</li>
                <li className='topListItem'>Contact</li>
                <li className='topListItem'>Write</li>
                <li className='topListItem'>Logout</li>
            </ul>
        </div>
        <div className='topRight'>
            <img className='topImg' src={require('../images/13935005400_0a6452b340_b.jpg')} alt=''></img>
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
