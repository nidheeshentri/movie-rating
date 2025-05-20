import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import MovieCard from '../components/MovieCard'

const Homepage = () => {
    const movies = [
  {
    movieImage: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
    movieName: "The Shawshank Redemption",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
    movieImage: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",
    movieName: "The Godfather",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
  },
  {
    movieImage: "https://m.media-amazon.com/images/I/51oBxmV-dML._AC_.jpg",
    movieName: "The Dark Knight",
    description: "Batman faces his greatest psychological and physical tests when he faces the Joker, a criminal mastermind."
  },
  {
    movieImage: "https://m.media-amazon.com/images/I/51s+UkT3jNL._AC_.jpg",
    movieName: "Forrest Gump",
    description: "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and more are seen through the eyes of a man with a low IQ."
  },
  {
    movieImage: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg",
    movieName: "Inception",
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea."
  },{
    movieImage: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
    movieName: "Fight Club",
    description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more."
  },
  {
    movieImage: "https://m.media-amazon.com/images/I/61OUGpUfAyL._AC_SY679_.jpg",
    movieName: "Interstellar",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    movieImage: "https://m.media-amazon.com/images/I/51k0qa6zTPL._AC_.jpg",
    movieName: "Gladiator",
    description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery."
  },
  {
    movieImage: "https://m.media-amazon.com/images/I/71q0bJcTqKL._AC_SY679_.jpg",
    movieName: "The Matrix",
    description: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers."
  },
  {
    movieImage: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
    movieName: "Pulp Fiction",
    description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in tales of violence and redemption."
  }]
  return (
    <Container>
        <h1>Movies list</h1>
        <Row>
            {movies.map((movie, index) => {
                return <Col xs={12} xm = {6} md = {4} lg = {4} xl = {3} key = {index}><MovieCard movie = {movie}/></Col>
            })}
        </Row>
    </Container>
  )
}

export default Homepage