import React from 'react'
import { useSelector } from 'react-redux'
import { getAllmovies } from '../../features/movie/Movieslice'

function MovieList() {
  const movies = useSelector(getAllmovies)
  console.log(movies,'^^^^^^^^^^')
  return (
    <div>MovieList</div>
  )
}

export default MovieList