import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import UserHeader from '../components/UserHeader'

const MovieDetails = () => {
    const [movie, setMovie] = useState({})

    const params = useParams()
    
    const movieID = params.id
    
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/"+movieID)
        .then(res => {
            setMovie(res.data)
        })
    }, [])
  return (
    <>
      <MovieCard movie = {movie}/>
    </>
  )
}

export default MovieDetails