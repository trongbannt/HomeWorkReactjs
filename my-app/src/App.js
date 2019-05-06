import React, { Component } from 'react';
import './App.css';
import Calculator from './MainConcepts/lifting-state-up';
import Person from './MainConcepts/Person'
import { Button } from 'react-bootstrap';
import Hook from "./MainConcepts/Hook"

class App extends Component {

  state = {
    name: "BanNT",
    age: 25
  };

  up = (agePara) => {
    this.setState({
      ...{ name: this.state.name },
      age: agePara
    })
  };

  changeNameHandler = (event) => {
    this.setState({
      name: event.target.value,
      age: this.state.age
    });
  };

  render() {
    return (
      <div className="App">
        <Calculator></Calculator>
        <Person
          name={this.state.name}
          age={this.state.age}
          click={this.up.bind(this, this.state.age + 1)}
          changeName={this.changeNameHandler}
        >
        </Person>
        <br/>
        <Button variant="success" onClick={() => this.up(this.state.age + 1)}>Up</Button>
        <Hook></Hook>

      </div>
    );
  }
}

export default App;
