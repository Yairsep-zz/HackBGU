import React from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
function ProjectTicket() {
  const collection = useFirestore().collection("Coding");
  const coding = useFirestoreCollectionData(collection);

  const size = "/100px160";
  return (
    <div>
      <h3>ProjectTicket</h3>
      <CardDeck>
        {coding.map(({ name, desc, imageUrl }) => (
          <Card
            style={{ width: "18rem", direction: "rtl", textAlign: "right" }}
          >
            <Card.Img variant="top" src={imageUrl} />
            {console.log(imageUrl)}
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{desc}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </div>
  );
}

export default ProjectTicket;
