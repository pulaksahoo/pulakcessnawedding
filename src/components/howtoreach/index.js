import React,{Fragment} from 'react';
// import ReactRoundedImage from "react-rounded-image";
import momoPhoto from "../../assets/images/momo1.jpg";
import myPhoto from "../../assets/images/pulak.jpg";
import heart from "../../assets/images/heart1.jpg";
import { styWrapper } from './styles';

function HowToReach() {

    
    const finalSubtitle =  '10<sup>th</sup> February 2023, The Hans Coco Palm, Puri';

    return (
        <Fragment>
          <div id="fh5co-couple" css={styWrapper}>
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                  <h2 className="main-font" style={{fontFamily:"cursive", color:"maroon"}}>How to reach Puri?</h2>
                  <h3 className="sub-title hs" style={{fontFamily:"cursive"}}>By Air </h3>
                  <p className="info" style={{fontFamily:"cursive"}}>
                  Puri does not have an airport. Nearest airport is Bhubaneswar Biju Pattnaik International Airport, 60 KM. You can book an Ola Outstation or Uber Intercity roughly will charge you around Rs 1700/-.
                  </p>
                  <h3 className="sub-title hs" style={{fontFamily:"cursive"}}>By Rail </h3>
                  <p className="info" style={{fontFamily:"cursive"}}>
                  Puri is a terminus on the East Coast Railway having direct express and super fast train links with New Delhi, Mumbai, Kolkata, Okha, Ahmedabad, Tirupati etc. Some important trains are Kolkata (Howrah) Puri Howrah Express, Jagannath Express; New Delhi; Purushottam Express.
                  </p>
                  <h3 className="sub-title hs" style={{fontFamily:"cursive"}}>By Road </h3>
                  <p className="info" style={{fontFamily:"cursive"}}>
                  The bus stand near the Gundicha Temple provides connections to Bhubaneswar and Cuttack, service every 10-15 minutes. There are direct buses for Kolkata and Visakhapatnam. Ola Outstation and Uber Intercity runs from Bhubaneswar and Cuttack will roughly charge around Rs 1700/-.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
            
        </Fragment>
      );
    }
    

export default HowToReach;
