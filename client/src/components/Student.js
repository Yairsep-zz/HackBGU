import React, {Suspense} from "react";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {useAuth, useUser , AuthCheck} from "reactfire";
import firebase from "firebase/app"
import GoogleButton from 'react-google-button'

function Student() {
    const auth = useAuth();
    const user = useUser();

    const signIn = () => {
        auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    const signOut = () => {
        auth.signOut();
    }
    return (
        <div style={{display: "block",
            marginLeft: "auto",
            marginRight: "auto"}}>
            {/*<h1 style={{ textAlign: "center" }}>לסטודנטים</h1>*/}
            <br/>
            <AuthCheck  fallback={<div class="row" style={{textAlign: "center", alignItems: "center" , justifyContent: "center"}}>
                <GoogleButton
                    onClick={() => { signIn() }}
                />
            </div>}>
                <div>
                <div style={{textAlign: "center", alignItems: "center" , justifyContent: "center"}}> שלום {user?.displayName}!
                <div className="row" style={{textAlign: "center", alignItems: "center", justifyContent: "center"}}>
                    <Link to='/Technology'>
                        <Button variant={"outline-info"}
                                style={{width: 250, height: 175, margin: 50 , fontSize: "34px"}}>טכנולוגיה</Button>
                    </Link>
                    <Link to='/Consulting'>
                        <Button variant={"outline-info"} style={{width: 250, height: 175, margin: 50, fontSize: "34px"}}>ייעוץ</Button>
                    </Link>
                </div>
                <div className="row" style={{textAlign: "center", alignItems: "center", justifyContent: "center" }}>
                    <Link to='/Design'>
                        <Button variant={"outline-info"} style={{width: 250, height: 175, margin: 50, fontSize: "34px"}}>עיצוב</Button>
                    </Link>
                    <Link to='/Marketing'>
                        <Button variant={"outline-info"} style={{width: 250, height: 175, margin: 50, fontSize: "34px"}}>שיווק</Button>
                    </Link>
                </div>
                </div>
                    <div style={{textAlign: "center", alignItems: "center" , justifyContent: "center"}}>
                    <Button onClick={signOut}>Sign Out</Button>
                    </div>
                </div>
            </AuthCheck>


        </div>
    );
}

export default Student;
