import './Sidebar.css'
import '../images/13935005400_0a6452b340_b.jpg'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>About Me</span>
            <img className='sidebarImg' src={require('../images/13935005400_0a6452b340_b.jpg')} alt=''></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper ultrices nulla quis luctus.
               Ut dictum dignissim ex, vitae imperdiet diam.
            </p>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>Categories</span>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>Solo Travel</li>
                <li className='sidebarListItem'>Weekend Break</li>
                <li className='sidebarListItem'>Package Holiday</li>
                <li className='sidebarListItem'>Group Tour</li>
                <li className='sidebarListItem'>Road Trip</li>
                <li className='sidebarListItem'>Volunteer Travel</li>
                <li className='sidebarListItem'>Event Travel</li>
            </ul>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>Follow Us</span>
            <div className='sidebarSocial'>
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-pinterest"></i>
            </div>
        </div>
    </div>
  )
}
