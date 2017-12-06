'use strict';


import React from 'react';
import ReactDOM from 'react-dom';
import { say } from 'cowsay';
import faker from 'faker';
import '../style/main.scss';


const main = document.getElementById('main');


class Header extends React.Component {
    render() {
        return (
        <header>
        <h1>Generate Cowsay Lorem</h1>
        </header>
        )
    }
}



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "Please enter what you'd like the cow to say!"
        }
    }

    generateCowsay = () => {
        console.log("testing");
        this.setState({content: "This should be generated when clicking on button"});
    };

    render() {
        return (
            <div>
            <Heading />
            <pre>{say({ text: this.state.content})}</pre>
            <button onClick={this.generateCowsay}>Click Me to Change Cowsay</button>
            </div>
        )
    }
}

ReactDOM.render(<App/>, main);
