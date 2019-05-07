import React from "react";

const UserInput = (props) => {
    const style = {
        border: "2px solid red"
    };

    return (
        <div>
            <input type="text" style={style} onChange={props.changeUserName} value={props.currentName} />
        </div>
    );
};

export default UserInput;