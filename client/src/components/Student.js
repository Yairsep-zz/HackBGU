import React, {Suspense} from "react";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import ProjectTicket from "./ProjectTicket";
function Student() {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>לסטודנטים</h1>

            <div className={"row"} style={{textAlign: "center", alignItems: "center"}}>
                <Link to='/Marketing'>
                <Button variant={"outline-info"} style={{width: 250, height: 175, margin: 50}}>שיווק</Button>
                </Link>
                <br/><br/>
                <Link to='/Design'>
                <Button variant={"outline-info"} style={{width: 250, height: 175, margin: 50}}>עיצוב</Button>
                </Link>
                <br/><br/>
                <Link to='/Consulting'>
                <Button variant={"outline-info"} style={{width: 250, height: 175, margin: 50}}>ייעוץ</Button>
                </Link>
                <Link to='/Technology'>
                <Button variant={"outline-info"} style={{width: 250, height: 175, margin: 50}}>טכנולוגיה</Button>
                </Link>
                <br/><br/>
            </div>

        </div>
    );
}

export default Student;
