import { Routes, Route } from 'react-router-dom'
import { Fragment } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Navbar from './components/navbar/Navbar'
import './index.css'
import Layout from './components/Layout'

function App() {
  return (
    <Fragment>
      <Navbar />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Layout>
    </Fragment>
  )
}

export default App
