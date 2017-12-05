'use strict';



import './style/main.scsss';
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import {say} from 'cowsay';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <header>
      <h1>Cowsay Lorem using Faker</h1>
      </header>

    );
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: 'Lorem Sentence'
    };

    this.handleButton = this.handleButton.bind(this);
  }


  handleButton(e) {
    console.log('button controller');
    const content = faker.fake('{{lorem.sentence}}');
    this.setState({content});
  }

  render() {
    return (
      <div>
      <Header />
      <pre>
      {say({text: this.state.content})}
      </pre>

      <button onClick={this.handleButton}>Click Here!</button>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'));
