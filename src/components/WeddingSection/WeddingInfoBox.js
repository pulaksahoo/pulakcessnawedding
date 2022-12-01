import React from 'react';
import { string } from 'prop-types';

function WeddingInfoBox({ title, date, time, description }) {
  return (
    <div >
      <div style={{backgroundColor: "transparent", height:"fit-content", borderColor:"whitesmoke"}}>
        <h3>{title}</h3>
        <div >
          <i className="icon-clock"></i>
          <span>{time}</span>
        </div>
        <div >
          <i className="icon-calendar"></i>
          <span>{date}</span>
        </div>
        {description && (
          <div >
            <i className="icon-location-pin"></i>
            <span dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        )}
      </div>
    </div>
  );
}

WeddingInfoBox.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  time: string.isRequired,
  description: string.isRequired,
};

export default React.memo(WeddingInfoBox);
