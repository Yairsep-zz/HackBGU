import React, {Suspense} from "react";
import {useFirestore, useFirestoreCollectionData} from "reactfire";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import {onLog} from "firebase";

function Technology() {

    const collection = useFirestore().collection("Coding");
    const coding = useFirestoreCollectionData(collection);

  return (
    <div>
        {console.log(coding)}
      <h1 style={{ textAlign: "center" }}>Technology</h1>
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
                        <Button variant="outline-primary" size="lg" block>בחר פרוייקט</Button>
                    </Card.Body>
                </Card>
            ))}
        </CardDeck>
    </div>
  );
}

export default Technology;
