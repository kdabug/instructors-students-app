import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    instructors: [],
    selectedInstructor: null
  };

  componentDidMount() {
    axios.get("http://localhost:3000/instructors").then(response => {
      this.setState({
        instructors: response.data.instructors
      });
    });
  }

  selectInstructor = instructor => {
    this.setState({
      selectedInstructor: instructor
    });
  };

  instructors = () => {
    return this.state.instructors.map(instructor => (
      <div key={instructor.id}>
        <Link
          to={`/instructors/${instructor.id}`}
          onClick={() => this.selectInstructor(instructor)}
        >
          {instructor.name}
        </Link>
        <hr />
      </div>
    ));
  };

  instructor = () => {
    const instructor = this.state.selectedInstructor;
    return (
      <div>
        <img alt={instructor.name} src={instructor.photo} width="20%" />
        <h1>{instructor.name}</h1>
        <p>{instructor.description}</p>
        <a href={instructor.link}>Connect</a>
      </div>
    );
  };

  render() {
    return (
      <Router>
        <div>
          <Link exact="true" to="/">
            Course App
          </Link>
          <Switch>
            <Route exact path="/" render={this.instructors} />
            <Route exact path="/instructors/:id" render={this.instructor} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
