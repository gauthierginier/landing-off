import React, { Component } from 'react'
import Loupe from '../../Images/Loupe.png'

export default class First extends Component {
  render() {
    return (
      <div className="First">
        <h1>Vous trouverez ici toutes les offres !</h1>

        <img src={Loupe} id="imgLoupe" class="animated infinite bounce" alt="loop"/>

      </div>
    )
  }
}
