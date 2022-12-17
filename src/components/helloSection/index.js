import React,{Fragment} from 'react';
// import ReactRoundedImage from "react-rounded-image";
import momoPhoto from "../../assets/images/momo1.jpg";
import myPhoto from "../../assets/images/pulak.jpg";
import heart from "../../assets/images/heart1.jpg";
import { styWrapper } from './styles';

function HelloSection() {

    

    
    const finalSubtitle =  '10<sup>th</sup> February 2023, The Hans Coco Palm, Puri';

    return (
        <Fragment>
          <div id="fh5co-couple" css={styWrapper}>
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                  <h2 className="main-font" style={{fontFamily:"cursive"}}>Hello!</h2>
                  <h3 className="sub-title hs" style={{fontFamily:"cursive"}}>10<sup>th</sup> February 2023, The Hans Coco Palm, Puri</h3>
                  <p className="info" style={{fontFamily:"cursive"}}>
                  To begin our happily ever after, I invite you to come and make our celebration more memorable.
                  </p>
                </div>
              </div>
              <div className="couple-wrap">
                <div className="couple-half">
                  <div className="groom">
                    <img src={momoPhoto} alt="groom" className="img-responsive" loading="lazy" />
                  </div>
                  <div className="desc-groom">
                    <h3 className="main-font" style={{fontFamily:"cursive"}}>Cessna Sahu</h3>
                    <h5 className="parent-name parent-name__top" style={{fontFamily:"sans-serif", fontSize: 13}}>
                    Daughter of Monoranjan Sahu <br />& Sanjita Sahu
                    </h5>
                  </div>
                </div>
                <p className="heart text-center">
                  <i className="icon-heart2"></i>
                </p>
                <div className="and-love">
                  
                </div>
                <div className="couple-half">
                  <div className="bride">
                    <img src={myPhoto} alt="groom" className="img-responsive" loading="lazy" />
                  </div>
                  <div className="desc-bride">
                    <h3 className="main-font" style={{fontFamily:"cursive" }}>Pulak Sahoo</h3>
                    <h5 className="parent-name" style={{fontFamily:"sans-serif", fontSize: 13}}>
                      Son of Paramananda Sahoo <br />&  Jyoti Mayee Sahoo
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
            
        </Fragment>
      );
    }
    

export default HelloSection;
