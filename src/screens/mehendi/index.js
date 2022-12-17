import React, { useState } from 'react';
import { Fragment } from 'react';
import FloatingMusic from '../../components/FloatingMusic';
import WelcomeSection from '../../components/WelcomeSection';
import tabData from '../launchscreen/data';
import  Mehendibackground from "../../assets/images/mehendi.webp"
import  Mehendilogo from "../../assets/images/mehendilogo.png"
import HowToReach from '../../components/howtoreach';
import EventDescription from '../../components/eventDescription';
import FooterSectionOther from '../../components/FooterSectionOther';

function Mehendi() {

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
                    event = {"Mehendi"}
                    dateTime={"9th Feb, 1 PM Onwards"}
                    location={"Conference Lawn, \n The Hans Coco Palms, Puri"}
                    background={Mehendibackground}
                    logo={Mehendilogo}
                    outfit={"Indian"}
                />
                <EventDescription 
                    event="Mehendi" 
                    color="#493313"
                    description="In India, decorating the feet and hands of the bride is a popular and often elaborate pre-wedding ceremony, but mehndi is also a part of many Hindu festivals and ceremonies."
                    description1="A Mehndi party is a pre-wedding event for the bride and their closest female friends and family members. The main focus of the event is the application of the bridal mehndi, or henna design, to their hands and feet. "
                
                />
                <HowToReach/>
                <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3754.184284056213!2d85.8028811!3d19.7897824!3m2!1i1024!2i768!4f13.1!3m2!1m1!2sThe%20Hans%20Coco%20Palms%2C%20Puri!5e0!3m2!1sen!2sin!4v1669714829274!5m2!1sen!2sin" 
                height="600" width="100%" style={{marginTop:20}}></iframe>
                <FooterSectionOther
                    image="Hindustan Times"
                    imagelink= "https://www.herculture.org/blog/2015/7/22/the-big-fat-indian-i-do"
                    songlink={"https://www.youtube.com/watch?v=2Cy-j4Oxrqs"}
                    singer = "Sunidhi Chauhan"
                />
            </Fragment>

            
            <FloatingMusic 
                MusicBackSound={tabData[2].song}
                setPlay={setPlay}
                play={play}
            />
        </div>
    )
}

export default Mehendi;
