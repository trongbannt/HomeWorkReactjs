import React from "react";
import "./UserOutput.css"

const UserOutput = (props) => {

    return (
        <div className="userOutput">
            <p>User name: {props.userName}</p>
            <p>This is paragraph 2</p>
        </div>
    );
};

export default UserOutput;