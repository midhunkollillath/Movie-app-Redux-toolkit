import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import Header from './components/header/Header'
import Home from './components/Home/Home'
import MovieDetail from './components/movieDetail/MovieDetail'
import Pagenotfnd from './components/pagenotfnd/pagenotfnd'
import Footer from './components/footer/Footer'
import './App.scss'
function App() {
  return (
    <div className='app'>
      <Router>
        <React.Fragment>
          <Header />
          <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:imdb' element={<MovieDetail />} />
            <Route path='*' element={<Pagenotfnd/>} />
          </Routes>
          </div>
          <Footer />
        </React.Fragment>
      </Router>
    </div>
  )
}

export default App
