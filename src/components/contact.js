import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from '../layouts/footer';

function BgColorExample() {
  return (
    <div className='con'>
      <div className='contacto'  style={{  display: "flex"}}>
        <>
      {[
        ''
      ].map((variant) => (
        <Card className='card'
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'black'}
          style={{ width: '53rem' , marginTop: "10px"}}>
          <h1>CONTACT US</h1>
          <p className='contact'>Thank you for your interest in Optimen services.</p>
          <p className='contact'>Please give us a call at the numbers below, or fill in the form with information about your business needs.</p>
          <hr></hr>
          <Card.Body style={{width:'845px'}}>          
              <Form className='fm'>* Firts Name</Form>
              <Form.Control type="text" />
              <Form className='fm'>* Last Name</Form>
              <Form.Control type="text" />
              <Form className='fm'>* E-mail Address</Form>
              <Form.Control type="email" placeholder="example@gmail.com or example@hotmail.com"/>
            <div className='Mess'>
            * How can we help you?  <br/>
            <textarea id="story" name="story" rows="4" cols="70"></textarea>
            </div>    
          </Card.Body >
          <Button className='bt' variant="primary" type="submit">
        Send
      </Button>
        </Card>
      ))}
    </>
         </div>
         <Footer/>
    </div>
  );
}

export default BgColorExample;