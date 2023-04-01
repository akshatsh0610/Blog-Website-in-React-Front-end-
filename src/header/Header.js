import './Header.css'
import '../images/PowerfulReasons_hero.jpg'

export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>Travel</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src={require('../images/PowerfulReasons_hero.jpg')} alt=''></img>
    </div>
  )
}
