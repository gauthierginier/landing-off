import React, { Component } from 'react';
import Signing from '../../Images/signing.png';
import Money from '../../Images/moneyBag.png';
import Time from '../../Images/time.png';
import Marker from '../../Images/MarkerMap.png';
import Contrat from '../../Images/contract.png';


class Card extends Component {
    render() {
        return (

         
  <div class="card">
  <div class="card-image waves-effect waves-block waves-light">
    
  </div>
  <div class="card-content">
    <span class="card-title grey-text text-darken-4">{this.props.titre}</span>

    <div class="divIcon">
   <div class="divImgCard"><img src={Money} alt="money"/><p>{this.props.remuneration}</p></div>
   <div class="divImgCard"><img src={Time} alt="time"/><p>{this.props.date}</p></div>
    <div class="divImgCard"><img src={Marker} alt="marker"/>{this.props.lieu}<p></p></div>
    <div class="divImgCard"><img src={Contrat} alt="contrat"/><p>{this.props.type}</p></div>
    </div>
   

    <span class="card-title activator ">En savoir plus...</span>
  </div>
  <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">Mission :<i class="material-icons right">close</i></span>
    <p>{this.props.mission}</p>
    <span class="card-title grey-text text-darken-4">Profil :</span>
    <p>{this.props.profil}</p>
  </div>
</div>
    
         );
    }
}


export default Card;