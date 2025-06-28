import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getMoviesData, updateLimit } from '../features/movies/movieSlice'
import { useSelector, useDispatch } from 'react-redux'

const MovieCard = (props) => {

    const dispatch = useDispatch()

    const [show, setShow] = useState(false)
    const [rating, setRating] = useState(props.movie.ratings)
    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }


    const submitRating = () => {
        const token = localStorage.getItem("access_token")
        const header = {
            "Authorization": `Bearer ${token}`
        }
        axios.put("https://movie-rating-backend-xe3v.onrender.com/movies-rating", {newRating: rating, id: props.movie._id}, {
            headers: header
        })
        .then(res => {
            console.log(res.data)
            axios("https://movie-rating-backend-xe3v.onrender.com/movies-list")
            .then((res) => {
                dispatch(getMoviesData(res.data))
                handleClose()
            })
            .catch((err) => {
                console.log(err)
            })
        })
    }

    const ratingChangeHandler = (event) => {
        setRating(event.target.value)
    }

    const deleteMovie = () => {
        axios.delete("https://movie-rating-backend-xe3v.onrender.com/movies-delete?id="+props.movie._id)
        .then(res => {
            console.log(res.data)
            axios.get("https://movie-rating-backend-xe3v.onrender.com/movies-list")
            .then((res) => {
                dispatch(getMoviesData(res.data))
            })
            .catch((err) => {
                console.log(err)
            })
        })
    }

  return (
    <>
        <Card>
            <Card.Img variant="top" src={props.movie.movieImage} />
            <Card.Body>
                <Card.Title>
                    <Link to = {"/movie-details/"+props.movie.id}>{props.movie.movieTitle}</Link>
                </Card.Title>
                <Card.Text>
                {props.movie.ratings}
                </Card.Text>
                <p>{props.movie._id}</p>
                <Button variant="primary me-3" onClick={handleShow}>
                    Edit Rating
                </Button>
                <Button variant='danger' onClick = {deleteMovie}>Delete</Button>
            </Card.Body>
        </Card>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                <div style = {{flex: 1}}>
                    <img src = {props.movie.movieImage} style = {{height: "250px", width: "100%", objectFit: "contain"}}/>
                    <Modal.Title style = {{textAlign: 'center'}}>{props.movie.movieTitle}</Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body>
                {props.movie.description}
                <div>
                    <input type = "number" max={5} min = {1} value={rating} onChange = {ratingChangeHandler}/> <br />
                    <button onClick = {submitRating}>Submit</button>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary">Understood</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default MovieCard