import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "@mui/material/Rating";

const MovieCard = ({ movieInfo }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movieInfo.posterUrl} />
        <Card.Body>
          <Card.Title>{movieInfo.title} </Card.Title>
          <Card.Text>{movieInfo.description}</Card.Text>
          <Button variant="primary">Go </Button>
          <br />
          <Rating name="read-only" value={movieInfo.rating} readOnly max={10} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
