import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from './styles';

function FooterSectionOther({ image,imagelink, singer, songlink }) {
  console.log("image")
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
                  <a href={imagelink} target="_blank" rel="noreferrer">
                    {image}
                  </a>
                </small>
                <small className="block">
                  Logo Designed at{' '}
                  <a href="https://www.gimp.org" target="_blank" rel="noreferrer">
                    Gimp
                  </a>
                </small>
                <small className="block">
                  Song by{' '}
                  <a href={songlink} target="_blank" rel="noreferrer">
                    {singer}
                  </a>
                </small>
                <small className="block">
                  Maps by{' '}
                  <a href="https://www.maps.google.co.in" target="_blank" rel="noreferrer">
                    Google Maps
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

FooterSectionOther.propTypes = {
};

export default React.memo(FooterSectionOther);
