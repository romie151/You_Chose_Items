import React from 'react';
import { render } from 'react-dom';

class YouChoose extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: [],
    }
    // this.handleCount = this.handleCount.bind(this);
  }

  handleCount = (e) => {
    const { checked, className } = e.target;
    console.log(checked)

    let { counter } = this.state;
    console.log(counter)

    if (checked && counter.indexOf(className) === -1) {
      counter.push(className);
    } else {
      counter = counter.filter(i => i !== className)
    }

    this.setState({
      counter
    });
  }
  


  render() {
    const { counter } = this.state
    console.log(counter)
    return (
      <div>
        <ul>

          <li> item 1 <input 
            type="checkbox" 
            className="button1"
            checked={counter.indexOf('button1') !== -1}
            onChange={this.handleCount}
            ></input>
          </li>

          <li> item 2 <input 
            type="checkbox"
            className="button2"
            checked={counter.indexOf('button2') !== -1}
            onChange={this.handleCount}></input>
          </li>

          <li> item 3 <input 
            type="checkbox"
            className="button3"
            checked={counter.indexOf('button3') !== -1}
            onChange={this.handleCount}></input>
          </li>

        </ul>
        <p>You chose {counter.length} items</p>
      </div>
    )
  }
}

render(
  <YouChoose />, 
  document.getElementById('root')
);