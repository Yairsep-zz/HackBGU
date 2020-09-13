import React from "react";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
function Student() {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Student</h1>
            <div style={{ textAlign: "center"}}>
                <Link to='/Technology'>
                <Button>Technology</Button>
                </Link>
                <br/><br/>
                <Link to='/Marketing'>
                <Button>Marketing</Button>
                </Link>
                <br/><br/>
                <Link to='/Design'>
                <Button>Design</Button>
                </Link>
                <br/><br/>
                <Link to='/Consulting'>
                <Button>Consulting</Button>
                </Link>
            </div>
        </div>
    );
}

export default Student;
