import React, { useState } from "react";
import Person from "./Person";
import { Button } from "react-bootstrap"

const hook = () => {

    const [personState, setPersonState] = useState({
        persons: [
            { name: "Jack jons", age: 25 },
            { name: "Mack Lauton", age: 29 },
        ]
    });

    const switchNameHandler = () => {
        setPersonState({
            persons: [
                { name: "Jack jons", age:  personState.persons[0].age+1 },
                { name: "Mack Lauton", age:  personState.persons[1].age+1 },
            ]
        });
    }

    return (
        <React.Fragment>
            <Person 
                name={personState.persons[0].name} 
                age={personState.persons[0].age}
            >
            </Person>
            <Person name={personState.persons[1].name} age={personState.persons[1].age}></Person>
            <Button variant="success" onClick={switchNameHandler}>Switch name</Button>
        </React.Fragment>
    );
}

export default hook;