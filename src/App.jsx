import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from"./Pages/Login"
import Home from"./Pages/Home"
import Container from './Components/Container'
function App() {
  return (
    <>
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      </Container>
    </>
  )
}

export default App
