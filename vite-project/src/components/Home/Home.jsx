import React, { useEffect, useState } from 'react'
import MovieList from '../movielisting/MovieList'
 import MovieApi from '../../common/api/Movieapi'
import { useDispatch } from 'react-redux'
import { addmovies } from '../../features/movie/Movieslice'
// import MovieKey from '../../common/api/Movieapikey'
function Home() {
  const dispatch = useDispatch()
  const movieText="Harry"
  useEffect(()=>{
    
   const FetchMovies=async()=>{
     const response=await MovieApi.get(`?apiKey=${'2f44afe'}&s=${movieText}&type=movie`)
     .catch((error)=>{
      console.log(error,'error in fetching movie')
     })
     dispatch(addmovies(response.data))
   }
   FetchMovies()
  },[])
  return (
    <div>
      <div className='banner-img'>
     
      </div>
    </div>
  )
}

export default Home