import React, { useState } from "react";
import { Button } from "react-bootstrap"
import Person from "./Person";
import "./css/Hook.css";
import './css/ListConditional.css'

const hook = () => {

    const [personState, setPersonState] = useState({
        persons: [
            { name: "Jack jons", age: 25 },
        ],
        togglePerson: false,
        nameToggle: "Show"
    });

    const changeNameHandler = (event) => {
        setPersonState({
            persons: [
                { name: event.target.value, age: personState.persons[0].age},
            ],
            togglePerson: true,
            nameToggle: personState.nameToggle
        });
      };

    const switchNameHandler = () => {
        if (personState.togglePerson === true) {
            setPersonState({
                persons: [
                    { name: "Jack jons", age: personState.persons[0].age + 1 },
                ],
                togglePerson: true,
                nameToggle: personState.nameToggle
            });
        }
    }

    const TogglePersonHandler = () => {
        const currentValue = personState.togglePerson;
        const nameToggleCurrent = personState.nameToggle === "Show" ? "Hidden" : "Show";
        setPersonState({
            persons: [
                { name: "Jack jons", age: personState.persons[0].age },
            ],
            togglePerson: !currentValue,
            nameToggle: nameToggleCurrent
        });
    }

    let paragraph = null;
    if (personState.togglePerson === true) {
        paragraph = (
            <div className="panel">
                <h4>What's this course about?</h4>
                <p>Learn React or dive deeper into it. Learn the theor, solve assignments,
                    practice in demo projects and build one big application which is improved
        throughout the course: The Burger Builder!</p>
            </div>
        )
    }

    return (
        <React.Fragment>
            {personState.togglePerson === true ?
                <div>
                    <Person
                        name={personState.persons[0].name}
                        age={personState.persons[0].age}
                        changeName = {changeNameHandler}
                    >
                    </Person>
                </div> : null
            }
            {paragraph}
            <Button variant="success" onClick={switchNameHandler}>Switch name</Button>
            <Button variant="info" onClick={TogglePersonHandler}>{personState.nameToggle}</Button>
        </React.Fragment>
    );
}

export default hook;