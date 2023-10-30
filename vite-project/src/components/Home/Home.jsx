import React, { useEffect, useState } from 'react'
import MovieList from '../movielisting/MovieList'
import { useDispatch } from 'react-redux'

// import MovieKey from '../../common/api/Movieapikey'
import { FetchAsyncMovies, FetchAsyncShows } from '../../features/movie/Movieslice'
function Home() {
  const dispatch = useDispatch()
  useEffect(()=>{
    
   dispatch(FetchAsyncMovies())
   dispatch(FetchAsyncShows())
  },[dispatch])
  return (
    <div>
      <div className='banner-img'>
         <MovieList />
      </div>
    </div>
  )
}

export default Home