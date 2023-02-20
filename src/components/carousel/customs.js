import React,{Fragment} from "react";
import "./Css/Casouser.css";
 

import InfiniteCarousel from "react-leaf-carousel";

import uno from "../../img/customers/uno.jpg";
import dos from "../../img/customers/dos.jpg";
import tres from "../../img/customers/tres.jpg";
import cuatro from "../../img/customers/cuatro.jpg";
import cinco from "../../img/customers/cinco.jpg";
import seis from "../../img/customers/seis.jpg";
import siete from "../../img/customers/siete.jpg";
import ocho from "../../img/customers/ocho.jpg";
import nueve from "../../img/customers/nueve.jpg";
import diez from "../../img/customers/diez.jpg";



const Customs = () => {
    return(
        <Fragment>
            <section className="sec">
                <div className="row">
                <InfiniteCarousel
            sideSize={.5}
            slidesToScroll={1}
            autoCycle={true}
            slidesToShow={3} 
          >
                    <div className="customer">
                         <div className="img">
                             <img src={uno} alt="1"/>
                         </div>
                    </div>
                    <div className="customer">
                        <div className="img">
                         <img src={dos} alt="Ahora pasa"></img>
                        </div>
                    </div>
                    <div className="customer">
                        <div className="img">
                       <img src={tres} alt="ALTAM"></img>
                        </div>
                    </div>
                    <div className="customer">
                    <div className="img">
                       <img src={cuatro} alt="nada"></img>
                        </div>
                    </div>
                    <div className="customer">
                    <div className="img">
                       <img src={cinco} alt="sisisi"></img>
                        </div>
                    </div>
                    <div className="customer">
                    <div className="img">
                       <img src={seis} alt="ggg"></img>
                        </div>
                    </div>
                    <div className="customer">
                    <div className="img">
                       <img src={siete} alt="ggg"></img>
                        </div>
                    </div>

                    <div className="customer">
                    <div className="img">
                       <img src={ocho} alt="ggg"></img>
                        </div>
                    </div>

                    <div className="customer">
                    <div className="img">
                       <img src={nueve} alt="ggg"></img>
                        </div>
                    </div>

                    <div className="customer">
                    <div className="img">
                       <img src={diez} alt="ggg"></img>
                        </div>
                    </div>
                    </InfiniteCarousel>
                </div>
            </section>
        </Fragment>
        
    )
}
export default Customs