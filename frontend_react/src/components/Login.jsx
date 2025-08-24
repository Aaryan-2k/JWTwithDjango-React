import './Login.css'
import {Link} from 'react-router-dom'

export default function Login(){
    return(
        <div className='login-container'>
            <div className='input-container'>
                <h1>LOGIN</h1>
                <input type='email' name='email' placeholder="Enter Email..." required></input>
                <input type='password' name='password' placeholder="Enter Password..." required></input>
                <button>Login</button>
                <p>Dont have an account? <Link to='/register'>Register</Link></p>

            </div>
            <div className='image-container'>
                <img src='https://static.vecteezy.com/system/resources/previews/005/879/539/non_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg' height='400px'></img>
            </div>
        </div>
    )
}