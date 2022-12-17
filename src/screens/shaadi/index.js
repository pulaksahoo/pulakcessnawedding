import React, { useState } from 'react';
import { Fragment } from 'react';
import FloatingMusic from '../../components/FloatingMusic';
import WelcomeSection from '../../components/WelcomeSection';
import tabData from '../launchscreen/data';
import  Shaadibackground from "../../assets/images/wedding.jpg"
import  Shaadilogo from "../../assets/images/shaadilogo.png"
import HowToReach from '../../components/howtoreach';
import EventDescription from '../../components/eventDescription';
import FooterSectionOther from '../../components/FooterSectionOther';

function Shaadi() {

    const[play, setPlay] = useState(true);
    

    return (
        <div>
            <Fragment>
                <WelcomeSection
                    guestName={"guestName"}
                    isAnonymGuest={true}
                    isInvitation={true}
                    // codeLink={finalTicketLink}
                    onClickDetail={"handleClickDetail"}
                    screen={"nonHome"}
                    event = {"Shaadi"}
                    dateTime={"10th Feb, 7 PM Onwards"}
                    location={"Poolside Lawn, \n The Hans Coco Palms, Puri"}
                    background={Shaadibackground}
                    logo={Shaadilogo}
                    outfit={"Indian"}
                />

                <EventDescription
                    event="Bahaghara" 
                    color="orange"
                    description="Bahaghara is a wedding ceremony performed by Odia Hindu people in the Indian state of Odisha. There are subtle differences in the rites observed by different areas."
                    description1=""
                
                />
                <HowToReach/>
                <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3754.184284056213!2d85.8028811!3d19.7897824!3m2!1i1024!2i768!4f13.1!3m2!1m1!2sThe%20Hans%20Coco%20Palms%2C%20Puri!5e0!3m2!1sen!2sin!4v1669714829274!5m2!1sen!2sin" 
                height="600" width="100%" style={{marginTop:20}}></iframe>
                <FooterSectionOther
                    image = "Popsugar"
                    imagelink="https://www.popsugar.com/love/photo-gallery/37099462/image/37099549/Traditional-Indian-Wedding-San-Francisco"
                    songlink="https://www.youtube.com/watch?v=Cu3QpWEfqgg"
                    singer="Sonu Nigam, Mahalakshmi Iyer"
                />
                
            </Fragment>
            <FloatingMusic 
                MusicBackSound={tabData[6].song}
                setPlay={setPlay}
                play={play}
            />
        </div>
    )
}

export default Shaadi;
