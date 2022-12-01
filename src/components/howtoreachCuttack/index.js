import React,{Fragment} from 'react';
// import ReactRoundedImage from "react-rounded-image";
import momoPhoto from "../../assets/images/momo1.jpg";
import myPhoto from "../../assets/images/pulak.jpg";
import heart from "../../assets/images/heart1.jpg";
import { styWrapper } from './styles';

function HowToReachCuttack() {

    
    const finalSubtitle =  '10<sup>th</sup> February 2023, The Hans Coco Palm, Puri';

    return (
        <Fragment>
          <div id="fh5co-couple" css={styWrapper}>
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                  <h2 className="main-font" style={{fontFamily:"cursive", color:"maroon"}}>How to reach Cuttack?</h2>
                  <h3 className="sub-title hs" style={{fontFamily:"cursive"}}>By Air </h3>
                  <p className="info" style={{fontFamily:"cursive"}}>
                  Bhubaneswar’s Biju Patnaik Airport is the nearest airport to Cuttack. The airport has regular  flights to major Indian cities like Kolkata, Delhi, Mumbai, Chennai, Hyderabad and Visakhapatnam. You can book an Ola Outstation or Uber Intercity roughly will charge you around Rs 1100/-.
                  </p>
                  <h3 className="sub-title hs" style={{fontFamily:"cursive"}}>By Rail </h3>
                  <p className="info" style={{fontFamily:"cursive"}}>
                  Cuttack Junction connects the city to all other major cities of India.
                  </p>
                  <h3 className="sub-title hs" style={{fontFamily:"cursive"}}>By Road </h3>
                  <p className="info" style={{fontFamily:"cursive"}}>
                  The bus terminus of Cuttack is located at Badambadi, from where thousands of private and government buses ply to hundreds of destinations everyday. Ola Outstation and Uber Intercity runs from Bhubaneswar and Cuttack will roughly charge around Rs 1700/-.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
            
        </Fragment>
      );
    }
    

export default HowToReachCuttack;
