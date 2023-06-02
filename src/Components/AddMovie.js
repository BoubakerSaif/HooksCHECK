import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const AddMovie = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rating: 0,
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  console.log(newMovie);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add new movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie Infos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie Name :</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                name="title"
                placeholder="Enter your movie title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie Description :</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="description"
                type="text"
                placeholder="Enter your movie description"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie PosterUrl :</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="posterUrl"
                type="text"
                placeholder="Enter your movie posterUrl"
              />
            </Form.Group>
            <Typography component="legend">Movie Rating</Typography>
            <Rating
              name="simple-controlled"
              max={10}
              defaultValue={0}
              onChange={(event, newValue) => {
                setNewMovie({ ...newMovie, rating: newValue });
              }}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
