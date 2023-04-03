import './Settings.css'
import Sidebar from '../../sidebar/Sidebar'
import '../../images/13935005400_0a6452b340_b.jpg'
export default function Settings() {
  return (
    <div className='settings'>
        <div className='settingsWrapper'>
            <div className='settingsTitle'>
                <span className='settingsUpdateTitle'>Update Your Account</span>
                <span className='settingsDeleteTitle'>Delete Account</span>
            </div>
            <form className='settingsForm'>
                <label>Profile Picture</label>
                <div className='settingsPP'>
                    <img className='settingsImg' src={require('../../images/13935005400_0a6452b340_b.jpg')} alt=''></img>
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-solid fa-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                </div>
                <label>Username</label>
                <input type='text'  placeholder='Name'/>
                <label>Email</label>
                <input type='email'  placeholder='xyz@gmail.com'/>
                <label>Password</label>
                <input type='password'/>
                <button className='settingsButton'>Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
