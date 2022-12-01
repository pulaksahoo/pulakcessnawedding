import React,{Fragment} from 'react';
import { object, string, bool, func } from 'prop-types';
// import ReactRoundedImage from "react-rounded-image";
import { styWrapper } from './styles';

function EventDescription(props) {

    return (
        <Fragment>
          <div  css={styWrapper}>
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                  <h2 className="main-font" style={{fontFamily:"cursive", color: props.color|| "maroon"}}>{props.event}</h2>
                  <p className="info" style={{fontFamily:"cursive"}}>
                    {props.description}
                  </p>
                  <p className="info" style={{fontFamily:"cursive"}}>
                    {props.description1}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
            
        </Fragment>
      );
    }
    EventDescription.propTypes = {
      event: string.isRequired,
      color: string.isRequired,
      description:  string.isRequired,
      description1:  string.isRequired
    }
    

export default EventDescription;
