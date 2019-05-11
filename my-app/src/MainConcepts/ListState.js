import React, { Component } from "react";
import Person from "./Person";
import "./css/ListState.css"

class ListState extends Component {
    state = {
        persons: [{ name: "Person_1", age: 25 }, { name: "Person_1", age: 25 }, { name: "Person_1", age: 25 }]
    }

    deletePersonHandler = (personIndex) => {
        let tempPersons = this.state.persons;
        tempPersons.splice(personIndex, 1);
        this.setState({
            persons: tempPersons
        });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.persons.map((i, index) => {
                    return (
                        <React.Fragment>
                            <Person name={i.name} age={i.age} />
                            <button type="button" className="btn btn-danger btn-circle" onClick={() => this.deletePersonHandler(index)}>X</button>
                        </React.Fragment>
                    )
                })}

            </React.Fragment>
        );
    }
}

export default ListState;