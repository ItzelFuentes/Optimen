import React, { Component } from 'react';
import '../App.css';

import video from '../img/about/video_optimen.mp4'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'react-html5video/dist/styles.css';
import Optimen from '../img/about/Optimen.jpeg';
import Footer from '../layouts/footer';

import ap1 from '../img/about/airplane.png';

import ap2 from '../img/about/airplane2.png';
import ap3 from '../img/about/CABINA3.png';


export default class About_Us extends Component {
  render() {
    return (
<div className='primerText'>
       
        <div className='card-title'>
        <div>
       
        <div className='prim'  style={{  display: "flex", marginTop:"60px",  justifyContent: "center"}}>
          <div>
            <h1 >WHAT IS OPTIMEN?</h1>
            <p style={{width: "490px", height: "600px"}}>
        Optimen is a Mexican Software Development company that provides 
        resources management and optimization services to different industries.
        The company was designated and approved as an International sService
        Contractor for Jeppesen and Boeing.</p></div>
          <hr></hr>
        <img src={Optimen} alt="imagen" style={{ marginLeft: "50px",width: "580px", left:"10",height:"360px" }}/>
          </div>
      </div> 
    </div> 
<div className='container' >
<div className='col-md-6'>
<div className='column1'>
        <div className='card-body'>
         <div className='card-title'>
           <h3>MISSION</h3>
           <hr style={{ color:"#000000", background:"black" }}></hr>
           <p className="card-text text-secondary">Support and facilitate Air Lines around the  <br/>
              world to maintain reliable and sustainable  <br/>
              operations through Technology, Innovation  <br/>
              and living our Values.
            </p>
          </div>
        </div>
      </div>
      <div className='column2'>
  
        <div className='card-body'>
          <div className='card-title'>
            <h3>VISION</h3>
            <hr></hr>
            <p className='card-text text-secondary'>To be the First option in Software, Technology <br/>
            and Innovation services for the global Airlines in <br/>
            the area of Aeronautical operational control.
            </p>
          </div>
        </div>
      </div>
      <div className='column3'>
        
        <div className='card-body'>
            <div className='card-title'>
              <h3>VALUES</h3>
              <hr ></hr>
              <p className="card-text text-secondary">
                 Trustworthy <br/>
                 Respect <br/>
                 Integrity <br/>
                 Teamwork <br/>
                 InnovationSupport 
              </p>
            </div>
          </div>
        </div>
</div>
</div>

<video id="video" controls autoPlay loop onCanPlayThrough={()=>{console.log('video play')}} >
  <source src={video} type='video/webm'/>
</video>

<div class="section-title" data-aos="fade-up">
  <h2>Airline Experience</h2>
    <CardGroup >
        <Card>
        <Card.Img variant="top" src={ap1} alt="Mi imagen" style={{ margin: '10px', borderRadius:'100%', marginLeft: '120px',width: '200px', height: '190px'}} />
        <Card.Body>
          <Card.Text>
          Associated with long experience in the Airline Industry with high trust and tight relation with commercial airlines and industry key players.{' '}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={ap2} alt="Mi imagen" style={{ margin: '10px', borderRadius:'100%', marginLeft: '110px',width: '200px', height: '190px', overflow: 'hidden' }} />
        <Card.Body>
          <Card.Text>
          Associated with long experience in the Airline Industry with high 
          trust and tight relation with commercial airlines and industry key players.{' '}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={ap3} alt="Mi imagen" style={{  margin: '10px', borderRadius:'100%', marginLeft: '120px',width: '200px', height: '190px', overflow: 'hidden' }} />
        <Card.Body>
          <Card.Text>
          Strong Project Management following the industry best practices.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>   
  </div>

        <Footer/>
</div>

     
    )
  }
}