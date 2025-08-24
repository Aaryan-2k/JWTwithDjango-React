import './App.css'
import Nav from './components/Nav'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div> 
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>}></Route>
        <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
      </Routes>
    </div>
  )
}

export default App
