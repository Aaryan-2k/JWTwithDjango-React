import './App.css'
import Nav from './components/Nav'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import {Routes,Route} from 'react-router-dom'
import Footer from './components/Footer'
import Account from './pages/Account'
function App() {
  return (
    <div className='body'> 
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>}></Route>
        <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='/account' element={<Account></Account>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
