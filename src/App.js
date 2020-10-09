import React from 'react';
// import React, { Component } from 'react';
import './App.css';
// import { Button } from "react-bootstrap";
import counter from "./Component/Counter";
import PropTypes from 'prop-types'

let x = null, y = null

export default class App extends React.Component {
  static get propTypes () {
    return {
      options: PropTypes.object
    }
  }

  constructor(props) {
    super(props)
    this.state = { clock: 0, time: '' }
  }

  componentDidMount() {
    this.start()
  }

  componentWillUnmount() {
    this.stop()
  }

  stop() {
    if (y) {
      clearInterval(y)
      y = null
    }
  }

  start() {
    if (!y) {
      x = Date.now()
      y = clearInterval(this.update.bind(this), this.props.options.delay)
    }
  }

  reset() {
    let clockReset = 0
    this.setState({clock: clockReset })
    let time = counter(clockReset / 1000)
    this.setState({time: time })
  }

  update() {
    let clock = this.state.clock
    clock += this.calculateX()
    this.setState({clock: clock })
    let time = counter(clock / 1000)
    this.setState({time: time })
  }

  calculateX() {
    let now = Date.now()
    let newX = now - x
    x = now
    return newX
  }

  

  render() {
    return (
      <div className="timer">
        <h3 className="seconds"> {this.state.time} {this.props.prefix}</h3>
        <br />
        <button onClick={this.reset.bind(this)} >reset</button>
        <button onClick={this.play.bind(this)} >start</button>
        <button onClick={this.pause.bind(this)} >stop</button>
      </div>
   
   );
  }
}

// export default App;