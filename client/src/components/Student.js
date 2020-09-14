import React, {Suspense} from "react";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

function Student() {
    return (
            <div style={{display: "block",
                marginLeft: "auto",
                marginRight: "auto"}}>
            <h1 style={{ textAlign: "center" }}>לסטודנטים</h1>

            <div class="row" style={{textAlign: "center", alignItems: "center" , justifyContent: "center"}}>
                <Link to='/Technology'>
                <Button variant={"outline-info"} size="lg" block style={{width: 250, height: 175, margin: 50}}>טכנולוגיה</Button>
                </Link>
                <Link to='/Consulting'>
                <Button variant={"outline-info"} size="lg" block style={{width: 250, height: 175, margin: 50}}>ייעוץ</Button>
                </Link>
                </div>
            <div className="row" style={{textAlign: "center", alignItems: "center", justifyContent: "center"}}>
                <Link to='/Design'>
                <Button variant={"outline-info"} style={{width: 250, height: 175, margin: 50}}>עיצוב</Button>
                </Link>
                <Link to='/Marketing'>
                <Button variant={"outline-info"} style={{width: 250, height: 175, margin: 50}}>שיווק</Button>
                </Link>
            </div>

        </div>
    );
}

export default Student;
