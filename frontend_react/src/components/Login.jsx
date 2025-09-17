import './Login.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
    const navigate = useNavigate();
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const [error, setError]=useState({});

    function usernameHandler(e){
        setUsername(e.target.value)
    }

    function passwordHandler(e){
        setPassword(e.target.value)
    }

    async function loginHandler(e){
        e.preventDefault();
        const userData={
            username, password
        }
        try{
            const response= await axios.post('https://bookish-parakeet-jj5g775prrp53pgg5-8000.app.github.dev/api/token/', userData);
            console.log(response.data)
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            setError({})
            navigate('/account');
        }
        catch(error){
            console.log(error.response.data)
            setError(error.response.data)
        }
        
    }
    return(
        <div className='login-container'>
            <div className='input-container'>
                <h1>LOGIN</h1>
                <form onSubmit={(e)=>loginHandler(e)}>
                <input type='username' name='username' onChange={(e)=>usernameHandler(e)} placeholder="Enter Username..." value={username} required></input>
                <input type='password' name='password' onChange={(e)=>passwordHandler(e)} placeholder="Enter Password..." value={password} required></input>
                {error.detail && <p className='error'>{error.detail}</p>}
                <button type='submit'>Login</button>
                <p>Dont have an account? <Link to='/register'>Register</Link></p>
                </form>
            </div>
            <div className='image-container'>
                <img src='https://static.vecteezy.com/system/resources/previews/005/879/539/non_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg' height='400px'></img>
            </div>
        </div>
    )
}