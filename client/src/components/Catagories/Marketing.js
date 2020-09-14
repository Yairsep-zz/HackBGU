import React from "react";
import {useFirestore, useFirestoreCollectionData} from "reactfire";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Marketing() {

    const collection = useFirestore().collection("Marketing");
    const marketing = useFirestoreCollectionData(collection);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Marketing</h1>
        <CardDeck>
            {marketing.map(({ name, desc, imageUrl }) => (
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

export default Marketing;
