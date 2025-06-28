import React, { useEffect, useState } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import MovieCard from '../components/MovieCard'
import axios from 'axios'
import UserHeader from '../components/UserHeader'
import { useSelector, useDispatch } from 'react-redux'
import { getMoviesData, updateLimit } from '../features/movies/movieSlice'

const Homepage = () => {

    const movies = useSelector(state => state.movies.value)
    const limit = useSelector(state => state.movies.limit)

    const [newMovie, setNewMovie] = useState({
      movieTitle: "",
      ratings: "",
      image: "",
    })

    function onPageLoad(){
      console.log("Page loaded")
    }

    const moviesData = useSelector(state => state.movies.limit)

    const dispatch = useDispatch()
    

    function getMovies(){
      console.log("getMovies function")
      axios("http://127.0.0.1:3000/movies-list")
      .then((res) => {
        
        dispatch(getMoviesData(res.data))
      })
      .catch((err) => {
        console.log(err)
      })
    }
    

    useEffect(()=>{
      getMovies()
      onPageLoad()
    }, [])

    useEffect(()=>{
      console.log(movies);
    }, [movies])
    

    const movieInputChangeHandler = (event) => {
      let tempNewMovie = {...newMovie}
      tempNewMovie[event.target.name] = event.target.value
      setNewMovie(tempNewMovie)
    }

    const addMovie = (event) => {
      event.preventDefault()

      axios.post("https://movie-rating-backend-xe3v.onrender.com/movies-create", newMovie)
      .then(res => {
        console.log(res.data)
        getMovies()
      })
    }


  return (
    <>
      <Container>
        <form onSubmit={addMovie}>
          <input type="text" name="movieTitle" onChange = {movieInputChangeHandler} id="movieTitle" placeholder='Title' value = {newMovie.movieTitle}/><br />
          <input type="number" name="ratings" onChange = {movieInputChangeHandler} id="ratings" placeholder='Ratings' max = {5} value = {newMovie.ratings}/><br />
          <input type="text" name="image" onChange = {movieInputChangeHandler} id="image" placeholder='image' value = {newMovie.image}/><br />
          <input type = "submit" className='btn btn-success' value = "Add Movie" />
        </form>
          <h1>Movies list ({moviesData})</h1>
          <Row>
              {movies.map((movie, index) => {
                  return <Col xs={12} xm = {6} md = {4} lg = {4} xl = {3} key = {index}><MovieCard movie = {movie} indexValue = {index}/></Col>
              })}
          </Row>
      </Container>
    </>
  )
}

export default Homepage