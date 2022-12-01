import React, { useState } from 'react';
import { Fragment } from 'react';
import FloatingMusic from '../../components/FloatingMusic';
import WelcomeSection from '../../components/WelcomeSection';
import tabData from '../launchscreen/data';
import  Haldibackground from "../../assets/images/haldi.webp"
import  Haldilogo from "../../assets/images/haldilogo.png"
import HowToReach from '../../components/howtoreach';
import EventDescription from '../../components/eventDescription';
import FooterSectionOther from '../../components/FooterSectionOther';

function Haldi() {

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
                    event = {"Haldi"}
                    dateTime={"10th Feb, 11 AM Onwards"}
                    location={"Palm Garden, \n The Hans Coco Palms, Puri"}
                    background={Haldibackground}
                    logo={Haldilogo}
                    outfit={"Indian - Shades of Yellow"}
                />
                <EventDescription 
                    event="Haldi" 
                    color="yellow"
                    description="The Haldi ceremony is often marked as an intimate gathering, just ahead of the main wedding ceremony. So, it's where your family - mums, sisters, cousins, close friends and near relatives will shower their love on you (proverbially and sometimes literally), blessing you against 'Buri Nazar' and for a happy married life ahead."
                    description1=""
                
                />
                <HowToReach/>
                <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3754.184284056213!2d85.8028811!3d19.7897824!3m2!1i1024!2i768!4f13.1!3m2!1m1!2sThe%20Hans%20Coco%20Palms%2C%20Puri!5e0!3m2!1sen!2sin!4v1669714829274!5m2!1sen!2sin" height="600" width="100%" style={{marginTop:20}}></iframe>
                <FooterSectionOther
                    imagelink={"https://www.freepik.com/premium-photo/traditional-wedding-ceremony-hinduism-turmeric-plate-haldi-ceremony_15306175.htm"}
                    image="Freepik"
                    songlink="https://www.youtube.com/watch?v=HgIW7P4dsXU"
                    singer="Jasleen Royal, Harshdeep Kaur & Siddharth Mahadevan "
                />
            </Fragment>
            <FloatingMusic 
                MusicBackSound={tabData[4].song}
                setPlay={setPlay}
                play={play}
            />
        </div>
    )
}

export default Haldi;
