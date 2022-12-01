import React,{Fragment} from 'react';
// import ReactRoundedImage from "react-rounded-image";
import momoPhoto from "../../assets/images/momo1.jpg";
import myPhoto from "../../assets/images/pulak.jpg";
import heart from "../../assets/images/heart1.jpg";
import { styWrapper } from './styles';

function HelloSection() {

    

    // return (
    //     // <div  style={{display:"flex"}}>
    //     //     <ReactRoundedImage 
    //     //         image={myPhoto}
    //     //         roundedSize="0" 
    //     //         imageWidth="200" 
    //     //         imageHeight="200"
    //     //     />
            
    //     //     <div style= {{marginLeft: 15}}>
    //     //         <ReactRoundedImage 
    //     //             image={momoPhoto}
    //     //             roundedSize="0" 
    //     //             imageWidth="200" 
    //     //             imageHeight="200"
    //     //         />
    //     //     </div>
    //     //     <div style= {{marginTop:"auto", marginBottom: "auto",marginLeft: -240}}>
    //     //         <ReactRoundedImage 
    //     //             image={heart}
    //     //             roundedSize="0" 
    //     //             imageWidth="60" 
    //     //             imageHeight="55"
    //     //         />
    //     //     </div>
    //     // </div>

    //     <div id="fh5co-couple" class="fh5co-section-gray">
	// 	<div class="container">
	// 		<div class="row">
	// 			<div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
	// 				<h2>Hello!</h2>
	// 				<h3>November 28th, 2016 New York, USA</h3>
	// 				<p>We invited you to celebrate our wedding</p>
	// 			</div>
	// 		</div>
	// 		<div class="couple-wrap animate-box">
	// 			<div class="couple-half">
	// 				<div class="groom">
	// 					<img src={myPhoto} alt="groom" class="img-responsive"/>
	// 				</div>
	// 				<div class="desc-groom">
	// 					<h3>Joefrey Mahusay</h3>
	// 					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
	// 				</div>
	// 			</div>
	// 			<p class="heart text-center"><i class="icon-heart2"></i></p>
	// 			<div class="couple-half">
	// 				<div class="bride">
	// 					<img src={momoPhoto} alt="groom" class="img-responsive"/>
	// 				</div>
	// 				<div class="desc-bride">
	// 					<h3>Sheila Mahusay</h3>
	// 					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// </div>
    // )
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
                  We invited you to celebrate our wedding
                  </p>
                </div>
              </div>
              <div className="couple-wrap">
                <div className="couple-half">
                  <div className="groom">
                    <img src={myPhoto} alt="groom" className="img-responsive" loading="lazy" />
                  </div>
                  <div className="desc-groom">
                    <h3 className="main-font" style={{fontFamily:"cursive"}}>Pulak Sahoo</h3>
                    <p className="parent-name parent-name__top" style={{fontFamily:"cursive"}}>
                      Son of Paramananda Sahoo <br />&  Jyoti Mayee Sahoo
                    </p>
                  </div>
                </div>
                <p className="heart text-center">
                  <i className="icon-heart2"></i>
                </p>
                <div className="and-love">
                  
                </div>
                <div className="couple-half">
                  <div className="bride">
                    <img src={momoPhoto} alt="groom" className="img-responsive" loading="lazy" />
                  </div>
                  <div className="desc-bride">
                    <h3 className="main-font" style={{fontFamily:"cursive"}}>Cessna Sahu</h3>
                    <p className="parent-name" style={{fontFamily:"cursive"}}>
                      Daughter of Monoranjan Sahu <br /> Sanjita Sahu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
            
        </Fragment>
      );
    }
    

export default HelloSection;
