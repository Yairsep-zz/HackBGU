import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Home() {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div>
                <h1 style={{marginTop: 15}}>מי אתם?</h1>
            </div>
            <div className={"row"}>
                <Link to='/Student'>
                <Button variant={"info"} style={{width: 450, height: 250, margin: 40, borderRadius: 20}}>
                    <h1 style={{color: "white", marginLeft: 25, marginTop: 15}}>
                        סטודנטים
                    </h1>
                </Button>
                </Link>
                <Link to='/Organization'>
                <Button variant={"success"} style={{width: 450, height: 250, margin: 40, borderRadius: 20}}>
                    <h1 style={{color: "white", marginTop: 15}}>ארגונים</h1>
                </Button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
