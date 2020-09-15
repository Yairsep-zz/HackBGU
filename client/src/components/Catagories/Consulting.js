import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import {useFirestore, useFirestoreCollectionData} from "reactfire";
import {Link} from "react-router-dom";

function Consulting() {

    const collection = useFirestore().collection("Consulting");
    const consulting = useFirestoreCollectionData(collection);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>ייעוץ</h1>
        <CardDeck>
            {consulting.map(({ name, desc, imageUrl , url }) => (
                <Card
                    style={{ width: "18rem", direction: "rtl", textAlign: "right", fontSize: "16px" }}
                >
                    <Card.Img style={{ width: "540px" , height: "400px"}}variant="top" src={imageUrl} />
                    <Card.Body className={"d-flex flex-column"}>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{desc}</Card.Text>
                        <Button className={"mt-auto"} variant="outline-primary"  size="lg" block onClick={(e) => {
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

export default Consulting;
