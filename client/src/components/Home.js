import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink , Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Technology from "./Catagories/Technology";
import Marketing from "./Catagories/Marketing";

function Home() {
    // TODO: create one circle style to both students and organizations.
    const studentsCircle = {
        padding: 10,
        margin: 20,
        marginLeft: 80,
        display: "inline-block",
        backgroundColor: "#0099ff",
        borderRadius: "50%",
        width: 250,
        height: 250,
        alignItems: "center",
        justifyContent: "center",
    };
    const organizationsCircle = {
        padding: 10,
        margin: 20,
        marginRight: 80,
        display: "inline-block",
        backgroundColor: "#9966ff",
        borderRadius: "50%",
        width: 250,
        height: 250,
        alignItems: "center",
        justifyContent: "center",
    };
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div>
                <h1 style={{marginTop: 15}}>מי אתם?</h1>
            </div>
            <div className={"row"}>
                <Link to='/Student'>
                <Button style={studentsCircle}>
                    <h1 style={{color: "white", marginLeft: 25, marginTop: 15}}>
                        יחיד/קבוצה
                    </h1>
                </Button>
                </Link>
                <Link to='/Organization'>
                <button style={organizationsCircle}>
                    <h1 style={{color: "white", marginTop: 15}}>עמותות/עסקים</h1>
                </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
