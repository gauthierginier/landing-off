import React, { Component } from 'react';
import Konektey from '../../Images/konektey.png';;

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
         <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l12 s12">
                <h5 class="white-text">Officium conseil</h5>
                <p class="grey-text text-lighten-4">Le site d'Officium-Conseil est en cours de développement...</p>
              </div>
              
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
             Made with <i class="far fa-heart"></i>by <img src={Konektey} alt="logo"/>.
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
