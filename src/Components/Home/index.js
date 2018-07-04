import React, { Component } from 'react'
import Menu from '../../Components/Menu'
import Fire from '../../Components/Fire'
import Swipe from '../../Components/Swipe'

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
      <Fire/>
      <Swipe/>
      </div>
    )
  }
}
