import './Nav.css'

export default function Nav(){
    return (
        <div className='nav-bar'>
            <div>
                <h1>JWT Auth</h1>
            </div>
            <div>
                <button>Login</button>
                <button>Register</button>
            </div>
        </div>
    )
}