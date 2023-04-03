import './Login.css'

export default function Login() {
  return (
    <div className='login'>
        <form className='loginForm'>
            <label>Email</label>
            <input type="text" placeholder="Email ... " />
            <label>Password</label>
            <input type="password"/>
            <button className='loginButton'>Login</button>
        </form>
        <button className='loginRegisterButton'>Register</button>
    </div>
  )
}
