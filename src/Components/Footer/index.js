import React, { Component } from 'react';
import Konektey from '../../Images/konektey.png';
import Like from '../../Images/like.png';

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <h1 class="h1Footer">Le site d'officium est en cours de développement ...</h1>
        <p class="pFooter">En attendant vous pouvez nous suivre sur nos réseau sociaux ..</p>
        <div class="divReseau">
        <a href="https://www.facebook.com/officiumconseil/"><div className="Icon"><i class="fab fa-facebook"></i></div></a>
      <a href="https://www.instagram.com/yannick_jotham/"><div className="Icon"><i class="fab fa-instagram"></i></div></a>
        <a href="https://www.linkedin.com/company/infinity-rh/"><div className="Icon"><i class="fab fa-linkedin-in"></i></div></a>
        </div>
       <div class="divMade"><h2 class="Made">Made with <img src={Like} alt="Like" class="Like"/> by <img src={Konektey} alt="Konektey" class="Konektey"/></h2></div> 
      </div>
    )
  }
}
