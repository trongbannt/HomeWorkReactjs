import React from 'react';
import "./css/Person.css"

const person = (props) => {
    return (
        <div className="person">
            <p onClick={props.click}>I'm {props.name}, I'm {props.age} year old.</p>
            <input type="text" onChange={props.changeName} value={props.currentValue} />
        </div>
    );
};

export default person;