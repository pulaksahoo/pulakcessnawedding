import React, { useState } from 'react';
import FloatingMusic from '../../components/FloatingMusic';
import tabData from '../launchscreen/data';

function Ring_Ceremony() {

    const[play, setPlay] = useState(true);
    

    return (
        <div>
            <FloatingMusic 
                MusicBackSound={tabData[4].song}
                setPlay={setPlay}
                play={play}
            />
        </div>
    )
}

export default Ring_Ceremony;
