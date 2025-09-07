import './App.css'
import Nav from './components/Nav'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import {Routes,Route} from 'react-router-dom'
import Footer from './components/Footer'
function App() {
  return (
    <div className='body'> 
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>}></Route>
        <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
