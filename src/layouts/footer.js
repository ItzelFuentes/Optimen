import React from "react";
import facebook from '../img/footer/facebook.png';
import linkedin from '../img/footer/linkedin.png';
import twitter from '../img/footer/twitter.png';
import tiktok from '../img/footer/tik-tok.png';

const footer = () => {
  return (
    <div id="pie">
    <footer style={{ backgroundColor: '#4169E1', padding: '0.4rem', fontSize:"17px"}}>
            <div className="footer1">
        <div className="footer2">
            <div className="footer3" >
            <p style={{color:"white"}}>Work with us</p>
            </div>
            <div className="footer3">
            <p style={{color:"white"}}>Go back up</p>
            </div>
            <div className="footer3">
            <u style={{color:"white"}} onClick={() => window.open('Information')} >Security politics</u>
            </div>
        </div>
        <div className="footer2">
            <div className="footer3">
            <p></p>
            </div>
            <div className="footer3">
            <u style={{color:"white"}}>Login</u>
            </div>
            <div className="footer3">
            <p><div className='redes'>
                <img src={facebook}  width="30" height="30" alt=" Icono Faceboook" onClick={() => window.open('https://www.facebook.com/optimen.mx')} />
                <img src={linkedin} width="30" height="30"  alt="Icono linkedin"  onClick={() => window.open('https://www.linkedin.com/company/optimen-sc')}/>
                <img src={twitter} width="30" height="30"  alt="Icono Twitter" onClick={() => window.open('https://twitter.com/OptimenMEX?t=dEKqRC3gM9rbTid2QoDwcQ&s=09')}/>
                <img src={tiktok} width="30" height="30"  alt="Icono Tiktok" onClick={() => window.open('https://vm.tiktok.com/JFnXQtS')}/>
            </div></p>
            </div>
        </div>
        <div className="footer2">
            <div className="footer3">
            <a style={{color:"white"}}>Phone: +52 (477) 7173339 </a>
            <u style={{color:"white"}} on onClick={()=> window.open ('https://mail.google.com/')}>| Email: info@optimen.com.mx</u>
            </div>
            <div className="footer3">
            <p style={{color:"white"}}>© 2023 Creado OPTIMEN</p>
            </div>
            <div className="footer3">
            <u style={{color:"white"}} on onClick={()=> window.open ('https://www.google.com.mx/maps/place/Optimen/@21.1449771,-101.6950254,17z/data=!4m12!1m6!3m5!1s0x842bbf4379a85dc3:0xdc4a5b224814b133!2sOptimen!8m2!3d21.1449721!4d-101.6928367!3m4!1s0x842bbf4379a85dc3:0xdc4a5b224814b133!8m2!3d21.1449721!4d-101.6928367')}>Av. León 119 | León, Guanajuato | Mexico</u>
            </div>
        </div>
        </div>
       
    </footer>
    
    </div>
      
  )
}

export default footer
