import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import { say } from 'cowsay';
import './style/app.scss';


class Header extends React.Component {
  render() {
    return <h1>Generate Cowsay Lorem</h1>;
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.theCowSay = this.theCowSay.bind(this);
    this.state = { content: 'click the button' };
  }
  theCowSay() {
    this.setState({ content: faker.hacker.adjective() });
  }
  render() {
    return (
      <div>
        <Header />
        <button className="cowsayButton" onClick={this.theCowSay}> click me </button>
        <pre>{say({ text: this.state.content })}</pre>
      </div>
    );
  }
}


ReactDom.render(<App />, document.getElementById('root'));
