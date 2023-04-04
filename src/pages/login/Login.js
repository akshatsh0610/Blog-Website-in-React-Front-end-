import './Login.css'

export default function Login() {
  return (
    <div className='login'>
        <span className='loginTitle'>Login</span>
        <form className='loginForm'>
            <label>Email</label>
            <input className='loginFormInput' type="text" placeholder="Email ... " />
            <label>Password</label>
            <input className='loginFormInput' type="password"/>
            <button className='loginButton'>Login</button>
        </form>
        <button className='loginRegisterButton'>Register</button>
    </div>
  )
}
