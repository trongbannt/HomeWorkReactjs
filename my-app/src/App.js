import React, { Component } from 'react';
import './App.css';
import Calculator from './MainConcepts/lifting-state-up';
import Person from './MainConcepts/Person'
import { Button } from 'react-bootstrap';
import Hook from "./MainConcepts/Hook"
import ListState from "./MainConcepts/ListState"

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
        <div className="left-side">
          <div className="section" ><Calculator/></div>
          <div className="section" >
            <h3>List & State</h3>
            <ListState></ListState>
          </div>
        </div>
        <div className="right-side">
          <div className="section" >
            <Person
              name={this.state.name}
              age={this.state.age}
              click={this.up.bind(this, this.state.age + 1)}
              changeName={this.changeNameHandler}
            > </Person>
            <Button variant="success" onClick={() => this.up(this.state.age + 1)}>Up</Button></div>
          <div className="section" > <Hook></Hook></div>
        </div>
      </div>
    );
  }
}

export default App;
