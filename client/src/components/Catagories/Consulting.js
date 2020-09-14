import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import {useFirestore, useFirestoreCollectionData} from "reactfire";

function Consulting() {

    const collection = useFirestore().collection("Consulting");
    const consulting = useFirestoreCollectionData(collection);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Consulting</h1>
        <CardDeck>
            {consulting.map(({ name, desc, imageUrl }) => (
                <Card
                    style={{ width: "18rem", direction: "rtl", textAlign: "right" }}
                >
                    <Card.Img variant="top" src={imageUrl} />
                    {console.log(imageUrl)}
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{desc}</Card.Text>
                        <Button variant="outline-primary" size="lg" block>בחר פרוייקט</Button>
                    </Card.Body>
                </Card>
            ))}
        </CardDeck>
    </div>
  );
}

export default Consulting;
