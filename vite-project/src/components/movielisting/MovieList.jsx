import React from 'react'
import './MovieList.scss'
import { useSelector } from 'react-redux'
import { getAllmovies,getAllshow } from '../../features/movie/Movieslice'
import MovieCard from '../moviecard/moviecard'
function MovieList() {
  const movies = useSelector(getAllmovies)
  const shows = useSelector(getAllshow)
  console.log(shows,'^^^^^^^^^^')
  let renderShows,renderMovies = ''
  
  renderMovies = 
  movies.Response === 'True' ?(
    movies.Search.map((movie,index)=>{
    return  <MovieCard key={index} data={movie}/>
    })
  ):(
    <div className='movie-error'>
       <h3>{movies.error}</h3>
    </div>
  )
  renderShows = 
  shows.Response === 'True' ?(
    shows.Search.map((movie,index)=>{
      console.log(movie,'(((((((((((((((');
    return  <MovieCard key={index} data={movie}/>
    })
  ):(
    <div className='movie-error'>
       <h3>{movies.error}</h3>
    </div>
  )
  return (
    <div className='movie-wrapper'>
        <div className='movie-list'>
          <h2>Movies</h2>
            <div className='movie-container'>
               {renderMovies}
            </div>
        </div>
        <div className='movie-list'>
          <h2>Shows</h2>
            <div className='movie-container'>
               {renderShows}
            </div>
        </div>
    </div>
  )
}

export default MovieList