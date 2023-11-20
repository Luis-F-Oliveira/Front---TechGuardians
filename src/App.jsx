import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./Pages/Login"
import Container from './Components/Container'
import Dashboard from './Pages/Dashboard'
import { DashProvider } from './Context/DashContext'
import { ToastContainer } from 'react-toastify'
function App() {
  return (
    <>
      <Container>
        <DashProvider>
          <ToastContainer/>  
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </DashProvider>
      </Container>
    </>
  )
}

export default App
