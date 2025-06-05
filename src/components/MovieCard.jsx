import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

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
        <Card>
            <Card.Img variant="top" src={props.movie.image} />
            <Card.Body>
                <Card.Title>
                    <Link to = {"/movie-details/"+props.movie.id}>{props.movie.title}</Link>
                </Card.Title>
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
                    <img src = {props.movie.image} style = {{height: "250px", width: "100%", objectFit: "contain"}}/>
                    <Modal.Title style = {{textAlign: 'center'}}>{props.movie.title}</Modal.Title>
                </div>
            </Modal.Header>
            <Modal.Body>
                {props.movie.description}
                <div>
                    <input type = "number" max={5} min = {1} /> <br />
                    <input type="text"  /> <br />
                    <button>Submit</button>
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