import React, { Suspense } from "react";
import Spinner from "react-bootstrap/Spinner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Technology from "./Catagories/Technology";
import ProjectTicket from "./ProjectTicket";

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
         <ProjectTicket />

    </div>
  );
}

export default Projects;
