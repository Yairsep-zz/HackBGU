import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./firebaseConfig";

class App extends Component {
  state = {
    data: null,
  };

  // componentDidMount() {
  //   // Call our fetch function below once the component mounts
  //   this.callBackendAPI()
  //     .then((res) => this.setState({ data: res.express }))
  //     .catch((err) => console.log(err));
  // }
  // // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch("/express_backend");
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message);
  //   }
  //   return body;
  // };

  render() {
    return (
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <div>
          <NavigationBar />
          {/* <p className="App-intro">{this.state.data}</p> */}
        </div>
      </FirebaseAppProvider>
    );
  }
}

export default App;
