// rcc 
import React, { Component } from 'react'

export default class Navi extends Component { // Class name = Pascal Case
  render() {
    return (
      <div>
          <h2>{this.props.title}</h2>
      </div>
    )
  }
}
