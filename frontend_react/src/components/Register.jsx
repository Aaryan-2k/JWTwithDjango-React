import './Login.css'
import {Link} from 'react-router-dom'

export default function Register(){
return(
    <div className='register-container'>
        <div className='input-container'>
            <h1>SIGNUP</h1>
            <input type='email' name='email' placeholder='Enter Email' required></input>
            <input type='text' name='username' placeholder='Enter Username' required></input>
            <input type='password' name='password' placeholder='Enter Password' required></input>
            <input type='password' name='confirm-password' placeholder='Confirm password' required></input>
            <button>Register</button>
            <p>Already have an account? <Link to='/'>Login</Link></p>
        </div>
        <div className="image-container"><img src='https://img.freepik.com/premium-vector/fill-registration-form-data-online-computer_999616-2980.jpg'>
            </img>
        </div>
   </div>
)
}