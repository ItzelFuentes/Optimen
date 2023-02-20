import './carousel/Css/Pag.css';
import Customers from './carousel/customers';
import Customs from './carousel/customs';
import Footer from '../layouts/footer';

function customers() {
  return (
    <div className="App">

      <body className="App-link">
      <h1>Our Customers</h1>

      <div className="textio">
      <p>Through our capabilities, the services we provide, 
       and our commitment, we implement projects resulting
       in satisfied clients and success stories.</p>
      </div>
      
      <Customers/>

      <h1>Our Project Experience</h1>

      <div className="textio">

      <p>Through our experience as certified Jeppesen/Boeing 
       consultants, we contribute to the support of the 
       configuration and customization of state-of-the-art optimization
       software for several key airlines in the aeronautical sector
       at an international level.</p>

      </div>

       <Customs/>

       
      </body>
      <Footer/>
    </div>
  );
}

export default customers;