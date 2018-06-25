import React, { Component } from 'react';
import Signing from '../../Images/signing.png';

class Card extends Component {
    render() {
        return (
          <div class="card">
          <div class="card-header">
            <h2>{this.props.titre}</h2>
          </div>
          <div class="card-body">
            <h3 className="card-typeContrat" >{this.props.type}</h3>
            <h4>
            <i class="fas fa-stopwatch"></i>ASAP 

            <i class="fas fa-dollar-sign"></i>{this.props.remuneration}
           
            <i class="fas fa-map-marker-alt"></i>{this.props.lieu}
           
           <i class="fas fa-building"></i>{this.props.entreprise}
            </h4>
            

          </div>
          <a href="#" class="btn btn-primary">POSTULER</a>
        </div>
    
         );
    }
}


export default Card;