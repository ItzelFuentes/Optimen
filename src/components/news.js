import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

import Footer from '../layouts/footer';
import hannover from '../img/innovation/Hannover_Messe.png';
import mundo from '../img/news/mundo.png';
import educate from '../img/innovation/Educate_Optimen.png';



class News extends React.Component {
  render() {
    const { imageUrl, title } = this.props;
    return (
      <div className="cards, container" >
        <img src={hannover} alt={title} />
        <div className="card-info">
          <h2>Red Hat Business Partner</h2>
          <p>Optimen family present at " Industrial Transformation Mexico, Hannover Messe "
           HANNOVER MESSE is the most important international platform and hot spot for industrial transformation - 
           with excellent innovations or unusual products.</p>
        </div>
        <br></br>
        <div className="cards, container" >
        <img src={educate} alt={title} />
        <div className="card-info">
          <h2>Educate optimenr</h2>
          <p>Educate Optimen</p>
        </div>
        <div className='primerText'>
        <div className='card-title'>
        <div className='prim'  style={{  display: "flex", marginTop:"60px",  justifyContent: "center"}}>
          <div>
            <h1 >14th Anniversary OPTIMEN</h1>
            <p style={{width: "490px", height: "600px"}}><button>more Info</button></p></div>
          <hr></hr>
        <img src={mundo} alt="imagen" style={{ marginLeft: "50px",width: "580px", left:"10",height:"360px" }}/>
          </div>
      </div> 
    </div> 
    </div>
    <Footer/>
    </div>
    );
  }
}

News.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

        






export default News;
