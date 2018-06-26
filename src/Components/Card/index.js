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
    <span class="card-title grey-text text-darken-4">Card Title</span>

    <div class="divIcon">
   <div class="divImgCard"><img src={Money} alt="money"/><p>35$ /heure</p></div>
   <div class="divImgCard"><img src={Time} alt="time"/><p>35heures /semaine</p></div>
    <div class="divImgCard"><img src={Marker} alt="marker"/>Jarry 97115<p></p></div>
    <div class="divImgCard"><img src={Contrat} alt="contrat"/>CDD<p></p></div>
    </div>
   

    <p><a href="#"><span class="card-title activator ">Card Title</span></a></p>
  </div>
  <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
    <p>Here is some more information about this product that is only revealed once clicked on.</p>
  </div>
</div>
    
         );
    }
}


export default Card;