import React, { Component } from 'react';
import Person from './Person';
import './css/ListState.css'

class ListState extends Component {
    state = {
        persons: [
            { id: 'p1', name: 'Person_1', age: 25 },
            { id: 'p2', name: 'Person_1', age: 25 },
            { id: 'p3', name: 'Person_1', age: 25 }
        ]
    }

    changeNameHandler = (event, id) => {
        debugger;
        const personIndex = this.state.persons.findIndex(p => { return p.id === id });
        const person = { ...this.state.persons[personIndex] };
        person.name = event.target.value;
        const personsTemp = [...this.state.persons]
        personsTemp[personIndex] = person;

        this.setState({
            persons: personsTemp
        });
    };

    deletePersonHandler = (personIndex) => {
        let tempPersons = [...this.state.persons];
        tempPersons.splice(personIndex, 1);
        this.setState({
            persons: tempPersons
        });
    }

    render() {
        const person = (
            <div>
                {this.state.persons.map((i, index) => {
                    return (
                        <div key={i.id}>
                            <Person
                                name={i.name}
                                age={i.age}
                                currentValue={i.name}
                                changeName={(event, id) => { this.changeNameHandler(event, i.id) }}
                            />
                            <button type='button' className='btn btn-danger btn-circle' onClick={() => this.deletePersonHandler(index)}>X</button>
                        </div>
                    )
                })}
            </div>
        );

        return (
            <React.Fragment>
                {person}
            </React.Fragment>
        );
    }
}

export default ListState;