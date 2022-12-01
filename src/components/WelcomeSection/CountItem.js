import React from 'react';
import { number, string } from 'prop-types';
import { styWrapperCount } from './styles';

function CountItem({ number, text, color }) {
  return (
    <div css={styWrapperCount}  style={{width: "fit-content"}}>
      <div style={{backgroundColor:color || "rgba(241, 78, 149, 0.8)",display:"block",margin: 10, justifyContent:"center",alignContent:"center",alignItems:"center", borderRadius: 25,height: 50,width: 50}}>
        <div style={{ paddingTop: 10}}>
          <h3 style={{color: "whitesmoke", fontFamily:"cursive"}} >{number}</h3>
        </div>
      </div>
      <span style={{color: "whitesmoke", fontFamily:"cursive", fontSize:12}}>{text}</span>
    </div>
  );
}

CountItem.propTypes = {
  number: number.isRequired,
  text: string.isRequired,
  color: string
};

export default React.memo(CountItem);
