import React from 'react'
import './Navbar.css'
import '../images/13935005400_0a6452b340_b.jpg' 
import { Link } from 'react-router-dom'

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
                <li className='topListItem'>
                    <Link  to='/' style={{textDecoration:"none",color:"black"}}>Home</Link>
                </li>
                <li className='topListItem'>
                    <Link  to='/post/:postId' style={{textDecoration:"none",color:"black"}}>Post</Link>
                </li>
                <li className='topListItem'>Contact</li>
                <li className='topListItem'>
                    <Link  to='/write' style={{textDecoration:"none",color:"black"}}>Write</Link>
                </li>
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
