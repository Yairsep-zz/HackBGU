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
      <h1 style={{ textAlign: "center" }}>שיווק</h1>
        <CardDeck>
            {marketing.map(({ name, desc, imageUrl , url }) => (
                <Card
                    style={{ width: "18rem", direction: "rtl", textAlign: "right" , fontSize: "16px" }}
                >
                    <Card.Img style={{ width: "540px" , height: "400px"}}variant="top" src={imageUrl} />
                    {console.log(imageUrl)}
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{desc}</Card.Text>
                        <Button variant="outline-primary"  size="lg" block onClick={(e) => {
                            e.preventDefault();
                            window.location.href=url;
                        }}>פרטים והרשמה</Button>
                    </Card.Body>
                </Card>
            ))}
        </CardDeck>
    </div>
  );
}

export default Marketing;
