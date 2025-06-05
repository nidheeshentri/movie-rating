import React, { useEffect, useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import MovieCard from '../components/MovieCard'
import axios from 'axios'
import UserHeader from '../components/UserHeader'

const Homepage = () => {
    let [movies, setMovies] = useState([])

    function onPageLoad(){
      console.log("Page loaded")
    }
    

    function getMovies(){
      console.log("getMovies function")
      // fetch("https://fakestoreapi.com/products")
      // .then(res => res.json())
      // .then((data) => {
      //   setMovies(data)
      // })
      axios("https://fakestoreapi.com/products")
      .then((res) => {
        setMovies(res.data)
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
    
    const [rating, setRating] = useState([])

  return (
    <>
      <Container>
          <h1>Movies list</h1>
          <Row>
              {movies.map((movie, index) => {
                  return <Col xs={12} xm = {6} md = {4} lg = {4} xl = {3} key = {index}><MovieCard movie = {movie}/></Col>
              })}
          </Row>
      </Container>
    </>
  )
}

export default Homepage