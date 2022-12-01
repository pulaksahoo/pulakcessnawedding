import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';
import { Carousel } from 'react-responsive-carousel';

function WeddingSection({ isInvitation }) {
  const renderGuestInfo = () => {
    return (
      <Fragment>
        <div className="col-md-8 col-md-offset-4">
          <WeddingInfoBox title="Akad Nikah" time="08.00 WIB (Live di Instagram)" date="Sabtu, 03 Oktober 2020" />
        </div>
        <ButtonLive />
      </Fragment>
    );
  };

  return (
    <Fragment>
      {/* <div id = "fh5co-event" style={{flex:1, wodth: "100%"}} css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="bismillah">॥  नमस्ते  ॥</h2>
              <h3 className="main-font main-font__wedding">धर्मेच अर्थेच कामेच इमां नातिचरामि ।
धर्मेच अर्थेच कामेच इमं नातिचरामि ॥</h3>
              <h4 className="sub-title sub-title__wedding">जय जगन्नाथ!</h4>
            </div>
          </div>
          <div className="row">
            {!isInvitation && renderGuestInfo()}
            {isInvitation && (
              <div className="col-md-10 col-md-offset-1">
                <WeddingInfoBox
                  title="Vivah"
                  time="9:30PM "
                  date=" 10 February 2023"
                  description="Hans Coco Palm"
                  />cr
                
              </div>
            )}
          </div>
        </div>
      </div> */}
      
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
