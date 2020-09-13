import React from "react";
import "../CSS/Home.css"

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
              <button style={studentsCircle}>
                  <h1 style={{color: "white", marginLeft: 25, marginTop: 15}}>יחיד/קבוצה</h1>
              </button>
              <button style={organizationsCircle}>
                  <h1 style={{color: "white", marginTop: 15}}>עמותות/עסקים</h1>
              </button>
          </div>
      </div>
  );
}

export default Home;
