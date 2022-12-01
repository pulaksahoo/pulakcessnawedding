import React, { useState } from 'react';
import { Fragment } from 'react';
import FloatingMusic from '../../components/FloatingMusic';
import WelcomeSection from '../../components/WelcomeSection';
import tabData from '../launchscreen/data';
import  sangeetbackground from "../../assets/images/sangeet.webp"
import  sangeetlogo from "../../assets/images/wedding-logo.png"
import HowToReach from '../../components/howtoreach';
import EventDescription from '../../components/eventDescription';
import FooterSectionOther from '../../components/FooterSectionOther';

function Sangeet() {

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
                    event = {"Ring Ceremony & Sangeet"}
                    dateTime={"9th Feb, 6 PM Onwards"}
                    location={"Conference Hall, \n The Hans Coco Palms, Puri"}
                    background={sangeetbackground}
                    logo={sangeetlogo}
                    outfit={"Indo Western, Indian"}
                />
                <EventDescription
                    event="Ring Ceremony & Sangeet" 
                    color="pink"
                    description="The wedding ring is a symbol of eternity. It is an outward sign of an inward and spiritual bond which unites two hearts in endless love. And now as a token of your love and desire to be forever united in heart and soul, we will now exchange rings."
                    description1="One of the most talked about pre-wedding events, the Sangeet, is a celebration of coming together of the two families in the union of their children. The ceremony offers respite from all the hectic seriousness of the wedding preparations. Women of the family get together several days before the wedding day with dolaks and spoons, surround the bride and sing traditional wedding songs."
                
                />
                <HowToReach/>
                <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3754.184284056213!2d85.8028811!3d19.7897824!3m2!1i1024!2i768!4f13.1!3m2!1m1!2sThe%20Hans%20Coco%20Palms%2C%20Puri!5e0!3m2!1sen!2sin!4v1669714829274!5m2!1sen!2sin" height="600" width="100%" style={{marginTop:20}}></iframe>
                <FooterSectionOther
                    image={"wallpaperaccess"}
                    imagelink={"https://wallpaperaccess.com/disco-lights"}
                    songlink="https://www.youtube.com/watch?v=1EadhOBcfI0"
                    singer = "Guru Randhawa & Neha Kakkar"
                />
            </Fragment>
            <FloatingMusic 
                MusicBackSound={tabData[3].song}
                setPlay={setPlay}
                play={play}
            />
        </div>
    )
}

export default Sangeet;
