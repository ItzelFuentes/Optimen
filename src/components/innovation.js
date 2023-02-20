import React from 'react'
import Footer from '../layouts/footer';
import '../App.css';
import hannover from '../img/innovation/Hannover_Messe.png';
import ana from '../img/innovation/ana_avatar_XPrize.jpeg';
import innovation from '../img/innovation/innovation_hub_Optimen.png';
import educate from '../img/innovation/Educate_Optimen.png';
import aws from '../img/innovation/aws_mentefactura.png';
import CardGroup from './innovation-card/card.js';


const Innovation = () => {
  return(
      <div className='innovation'>
        <div>
      <h1>Mi Grupo de Tarjetas</h1>
      
    </div>
        <div>
          <Footer/>
        </div>
      </div>
  );
}

export default Innovation
