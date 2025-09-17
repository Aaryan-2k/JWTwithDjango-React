import './Login.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function Register(){
    const [username, setUsername]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [confirmpassword, setConfirmpassword]=useState('');
    const [errors, setErrors]=useState({});

    function emailHandler(event){
        setEmail(event.target.value)
    }
    function usernameHandler(event){
        setUsername(event.target.value)
    }
    function passwordHandler(event){
        setPassword(event.target.value)
    }
    function confirmpasswordHandler(event){
        setConfirmpassword(event.target.value)
    }

    async function handleRegistration(e){
        e.preventDefault();
        const userdata={
            username, email, password
        }
        try{
            const response=await axios.post('https://bookish-parakeet-jj5g775prrp53pgg5-8000.app.github.dev/api/register/',userdata)
            console.log(response.data)
        }
        catch(error){
            console.log(error.response.data)
            setErrors(error.response.data)
        }

    }

return(
    <div className='register-container'>
        <div className='input-container'>
            <h1>SIGNUP</h1>
            <form onSubmit={(e)=>{handleRegistration(e)}}>
            <input type='email' name='email' placeholder='Enter Email' value={email} onChange={(e)=>{emailHandler(e)}} required></input>
            {errors.email && <p className='error'>{errors.email}</p>}
            <input type='text' name='username' placeholder='Enter Username' value={username} onChange={(e)=>{usernameHandler(e)}} required></input>
            {errors.username && <p className='error'>{errors.username}</p>}
            <input type='password' name='password' placeholder='Enter Password' value={password} onChange={(e)=>{passwordHandler(e)}} required></input>
            {errors.password && <p className='error'>{errors.password}</p>}
            <input type='password' name='confirm-password' placeholder='Confirm password' value={confirmpassword} onChange={(e)=>{confirmpasswordHandler(e)}} required></input>
            <button type='submit'>Register</button>
            </form>
            <p>Already have an account? <Link to='/'>Login</Link></p>
        </div>
        <div className="image-container"><img src='https://img.freepik.com/premium-vector/fill-registration-form-data-online-computer_999616-2980.jpg'>
            </img>
        </div>
   </div>
)
}