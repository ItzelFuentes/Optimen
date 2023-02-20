import React from 'react'
import esr from '../../img/home/certifications/esr.png';
import gto from '../../img/home/certifications/marca-gto.png';
import iso from '../../img/home/certifications/ISO27001.png';
import boeing from '../../img/home/certifications/img.png';

const certifications = () => {
  return (
    <div>
        <div style={{ backgroundColor: '#4169E1', padding: '1.5rem', fontSize:"17px",  borderBottom: '3px solid #3159cf'}}>
            <h4 style={{color: 'white'}}>Awards and Certifications</h4>
            <div className="cert1">
                <div className="cert2">
                    <div className="cert3" >
                        <div className='cert4'>
                        <img src={esr} alt="imagen" style={{justifyContent: 'center',alignItems:'center',width: "120px", height:"60px" }}/>
                        </div>
                        <div className="cert3">
                        <img src={gto} alt="imagen" style={{justifyContent: 'center',alignItems:'center', width: "70px",height:"70px" }}/>
                        </div>
                        <div className="cert3">
                        <img src={iso} alt="imagen" style={{justifyContent: 'center',alignItems:'center', width: "70px",height:"70px" }}/>
                        </div>
                        <div className="cert4">
                        <img src={boeing} alt="imagen" style={{justifyContent: 'center',alignItems:'center',width: "120px",height:"60px"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default certifications



 