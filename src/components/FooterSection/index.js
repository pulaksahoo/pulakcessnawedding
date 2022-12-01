import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from './styles';

function FooterSection({  }) {
  return (
    <Fragment>
      { (
        <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center -heading">
                <h2 className="main-font">Thank You!</h2>
                <p className="info">
                We would feel pleased to have your presence.
                </p>
                <p className="info">
                For all your prayers and blessings,

                  <br />We would like to express our gratitude. <br />
                  Namaskar.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">&copy; {(new Date()).getFullYear()+"  Cessna & Pulak Wedding. All Rights Reserved."}</small>
                <small className="block">
                  Image Courtesy{' '}
                  <a href="https://www.makemytrip.com/hotels/the_hans_coco_palms-details-puri.html" target="_blank" rel="noreferrer">
                    makemytrip
                  </a>,
                  <a href="https://titucreation.com/heart-template-black-screen-effect-love-template-effect-video-background-kinemaster-templates" target="_blank" rel="noreferrer">
                    Titu Creations
                  </a>
                </small>
                <small className="block">
                  Logo Designed at{' '}
                  <a href="https://www.canva.com/" target="_blank" rel="noreferrer">
                    Canva
                  </a>
                </small>
                <small className="block">
                  Song by{' '}
                  <a href="https://www.youtube.com/watch?v=_kUrW9SEaJc" target="_blank" rel="noreferrer">
                    Ritviz
                  </a>
                </small>
                <small className="block">
                  Forms Designed at{' '}
                  <a href="https://www.google.com/forms" target="_blank" rel="noreferrer">
                    Google Forms
                  </a>
                </small>
                <small className="block">
                  Original Template from{' '}
                  <a href="http://freehtml5.co/" target="_blank" rel="noreferrer">
                    FREEHTML5.co
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
  
};

export default React.memo(FooterSection);
