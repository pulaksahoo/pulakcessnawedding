import React, { Fragment, useState } from 'react';
import { object, string, bool, func } from 'prop-types';
// import { Link } from 'gatsby';
import WelcomBackground from "../../assets/images/bg-welcome.jpg"

import WeddingImg from '../../assets/images/logo.png';
import CountContainer from './CountContainer';
//  import ScrollToDown from './ScrollToDown';
import { styWrapper, styHero, styBackground, styButtonWrapper } from './styles';


const DELAY_TIME = 1500;

function WelcomeSection({ onClickDetail, homeScreen, event, dateTime, location, pulak, background,logo, outfit}) {
  const [loading, setLoading] = useState(false);
  const [alreadyDownloadData, setAlreadyDownloadData] = useState(false);

  const handleScrollTo = () => {
    /** scroll into detail view */
    const element = document.getElementById('fh5co-couple');
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  const handleShowDetail = () => {
    if (loading) return undefined;

    try {
      const myAudio = document.getElementById('myAudio');
      myAudio.play();
    } catch {
      console.error('FAILED_TO_PLAY_MUSIC');
    }

    onClickDetail();

    if (!alreadyDownloadData) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setAlreadyDownloadData(true);
        handleScrollTo();
      }, DELAY_TIME);
    } else {
      handleScrollTo();
    }
  };

  const renderGuestSection = () => {
   

    return (
      <Fragment>
        {/* <h3 className="to-dearest">To our Dearest</h3> */}
        {/* <h2 className="to-dearest-name">{"guestName"}</h2> */}
      </Fragment>
    );
  };

  return (
    <div css={styHero} >
      <header
        id="fh5co-header"
        role="banner"
        className="fh5co-cover"
        // css={styBackground}
        // data-stellar-background-ratio="0.5"
        style={{backgroundImage: background?'url('+background+')' :'url('+WelcomBackground+')', alignItems:"center"}}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row" css={styWrapper}>
            <div style={{justifyContent:"center", marginTop: 10}}className="col-md-8 col-md-offset-2 text-center">
              <img style={logo?{width: 150, height: 150, marginBottom: 30,  marginTop: 30}:{width: 300, height: 300}} src={logo || WeddingImg} alt="wedding-cessna-pulak" />
              <h4 style={{fontFamily:"cursive", marginTop: 10,color:"whitesmoke"}} className="sub-title">{"The " + event + " of"}</h4>
              <h1 style={{fontFamily:"cursive", color:"whitesmoke"}} className="title">{!pulak ?"Cessna & Pulak": "Pulak"}</h1>
              <div className={ 'margin__bottom'}>
                {homeScreen ? <CountContainer />: 
                <>
                <h5 style={{fontFamily:"cursive", color:"whitesmoke"}} className="title">is on</h5>
                <h4 style={{fontFamily:"cursive", color:"whitesmoke"}} className="title">{dateTime}</h4>
                <h5 style={{fontFamily:"cursive", color:"whitesmoke"}} className="title">at</h5>
                <h4 style={{fontFamily:"cursive", color:"whitesmoke"}} className="title">{location}</h4>
                {outfit && 
                <><h5 style={{fontFamily:"cursive", color:"whitesmoke"}} className="title">{"with"}</h5>
                <h4 style={{fontFamily:"cursive", color:"whitesmoke"}} className="title">{"Outfit Theme: " + outfit}</h4></>}
                </>}
              </div>
             
              
            </div>
          </div>
         
        </div>
      </header>
    </div>
  );
}

WelcomeSection.propTypes = {
  guestName: string.isRequired,
  isInvitation: bool.isRequired,
  isAnonymGuest: bool.isRequired,
  location: object.isRequired,
  codeLink: string,
  onClickDetail: func.isRequired,
  homeScreen: bool,
  event: string,
  dateTime: string,
  location: string,
  pulak: bool,
  background: object,
  logo:object
};

WelcomeSection.defaultProps = {
  codeLink: '',
};

export default WelcomeSection;
