import './Register.css'

export default function Register() {
  return (
    <div className='register'>
        <span className='registerTitle'>Register</span>
        <form className='registerForm'>
            <label>Username</label>
            <input className='registerFormInput' type="text" placeholder="Username ... " />
            <label>Email</label>
            <input className='registerFormInput' type="email" placeholder="Email ... " />
            <label>Password</label>
            <input className='registerFormInput' type="password"/>
            <button className='registerButton'>Register</button>
        </form>
    </div>
  )
}
