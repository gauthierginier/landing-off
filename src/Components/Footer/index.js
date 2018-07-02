import React, { Component } from 'react';
import Konektey from '../../Images/konektey.png';
import Like from '../../Images/like.png';

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <h1 class="h1Footer">Le site d'officium est en cours de développement ...</h1>
        <h2>Made with <img src={Like} alt="Like" class="Like"/> by <img src={Konektey} alt="Konektey" class="Konektey"/></h2>
      </div>
    )
  }
}
