import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const MovieCard = (props) => {
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }
  return (
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.movie.movieImage} />
            <Card.Body>
                <Card.Title>{props.movie.movieName}</Card.Title>
                <Card.Text>
                {props.movie.description}
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>
                    Add Rating
                </Button>
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
                    <Modal.Title style = {{textAlign: 'center'}}>{props.movie.movieName}</Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body>
                {props.movie.description}
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