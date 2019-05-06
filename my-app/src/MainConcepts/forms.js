import React from 'react'

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { valueText: '', valueSelect: 'coconut' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ valueText: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.valueText + '-' + this.state.valueSelect);
        event.preventDefault();
    }



    render() {
        const numbers = [1, 2, 3];
        const numbers_2 = numbers.map((i) => { return i * 2; });
        console.log("numbers: ", numbers);
        console.log("numbers_2: ", numbers_2);

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name </label>
                    <input type="text" value={this.state.valueText} onChange={this.handleChange} />
                </div>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm;