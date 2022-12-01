import React, { Fragment } from 'react';
import IconMusic from '../../assets/images/music-icon.png';
import IconMusicStop from '../../assets/images/music-stop-icon.png';
import PropTypes from "prop-types"

import { styMusicFloating } from './styles';
import { useEffect } from 'react';

function FloatingMusic(props) {
  // const [play, setPlay] = useState(true);
  const {MusicBackSound, play, setPlay} = props;

  useEffect(()=> {
    const myAudio = document.getElementById('myAudio');
    console.log(play)
    if(play){
      console.log("lets play")
      myAudio.play()
    } else {
      myAudio.pause()
    }

  },[play])

  const toggleMusic = () => {
    const myAudio = document.getElementById('myAudio');
    /**
     * This function built-in with html5 function
     * doc: https://www.w3schools.com/tags/ref_av_dom.asp
     */
    // if (play) {
    //   myAudio.pause();
    // } else {
    //   myAudio.play();
    // }

    setPlay(!play);
  };

  return (
    <Fragment>
      <div css={styMusicFloating}>
        <audio id="myAudio" loop className="hide">
          <source src={MusicBackSound} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div onClick={toggleMusic}>
          <img
            src={play ? IconMusic : IconMusicStop}
            className="icon-music"
            style={{width: 50, height: 50, position: "fixed",
              bottom: 24,
              left: 24}}
            alt="icon-music"
            title={`${play ? 'Stop Music' : 'Play Music'}`}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default FloatingMusic;

FloatingMusic.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
