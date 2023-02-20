import React from 'react'
import Footer from '../layouts/footer';
import uno from '../img/home/uno.png';
import Card from 'react-bootstrap/Card';
import primer from '../img/home/primerImg.jpg';
import segundo from '../img/home/segundaImg.jpg';
import Cert from './certifications/certifications';

const Home = () => {
  return (
    <div>
      
      <div style={{ position: 'relative'}}>
      <img className='img-fluid' src={uno} alt="avión" d-block w-100></img>
      <div className='resposive' style={{ position: 'absolute', top: '100px', left: '90px', color: 'white',fontFamily:'Montserrat', fontSize: '1.2rem' }}>
        <div className='fluid'>
        <h1 >Welcome to Optimen</h1>
        <p>Unique team of Resources Management and Optimization Experts and <br></br>
          passionate Software Developers.</p>
        </div>
      </div>
      </div>


      <div style={{ position: 'relative'}}>
      <Card.Img src={primer} style={{width: '40rem', marginLeft:'390px', marginTop:'20px', marginBottom:'60px' }}/>
      <div className='resposive' style={{ position: 'absolute', top: '100px', left: '90px', color: 'white',fontFamily:'Montserrat', fontSize: '1.2rem' }}>
        <div className='primerFluid'><br/>
        <h1><b>A World Class Global Enterprise</b></h1><br/>
        <p className='textP1'>Mexican Company with the following experience since 2006:</p>
        <p className='textP1'>Resource Optimization</p>  
        <p className='textP1'>Consultancy and Configuration Support Services</p>  
        <p className='textP1'>IT Software Solutions Development</p> 
        </div>
      </div>
    </div>


    <div style={{ position: 'relative'}}>
      <Card.Img src={segundo} style={{width: '40rem', marginLeft:'-40px', marginTop:'20px', marginBottom:'20px' }}/>
      <div className='resposive' style={{ position: 'absolute', top: '100px', left: '90px', color: 'white',fontFamily:'Montserrat', fontSize: '1.2rem' }}>
        <div className='primerFluid2'><br/>
        <h1><b>Our Purpose</b></h1><br/>
        <p className='textP2'>Streamline the world mobility</p>
        </div>
      </div>
      
    </div>
    <Cert/>
    
      <Footer/>
      
    </div>
  
  )
}

export default Home
