
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Footer/Footer'

function App() {

  return (
    <>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App

