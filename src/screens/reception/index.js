import React, { useState } from 'react';
import { Fragment } from 'react';
import FloatingMusic from '../../components/FloatingMusic';
import WelcomeSection from '../../components/WelcomeSection';
import tabData from '../launchscreen/data';
import  mayfairBackground from "../../assets/images/mayfair.webp"
import  Receptionlogo from "../../assets/images/receptionlogo.png"
import HowToReachRourkela from '../../components/howtoreachRourkela';
import EventDescription from '../../components/eventDescription';
import FooterSectionOther from '../../components/FooterSectionOther';

function Reception() {

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
                    event = {"Reception"}
                    dateTime={"12th Feb, 7:30 PM Onwards"}
                    location={"The Tulip, \n   Mayfair, Rourkela"}
                    background={mayfairBackground}
                    logo={Receptionlogo}
                    outfit={"Indo - Western"}
                />
                <EventDescription 
                    event="Reception" 
                    color="purple"
                    description="A wedding reception is a party usually held after the completion of a marriage ceremony as hospitality for those who have attended the wedding, hence the name reception: the couple receive society, in the form of family and friends, for the first time as a married couple."
                    description1=""
                
                />
                <HowToReachRourkela/>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.3252660686508!2d84.81964661490458!3d22.227734385361337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20190ccb164bf3%3A0x3ecd2a5a820c9b8d!2sMAYFAIR%20Rourkela!5e0!3m2!1sen!2sin!4v1669715683953!5m2!1sen!2sin" 
                height="600" width="100%" style={{marginTop:20}}></iframe>
                <FooterSectionOther
                    image={"makemytrip"}
                    imagelink="https://www.makemytrip.com/hotels/photos-of-mayfair_hotel_rourkela-details-rourkela.html"
                    singer=" YO YO HONEY SINGH,SIMAR KAUR,ISHERS"
                    songlink={"https://www.youtube.com/watch?v=xWi8nDUjHGA"}
                />
            </Fragment>
            <FloatingMusic 
                MusicBackSound={tabData[7].song}
                setPlay={setPlay}
                play={play}
            />
        </div>
    )
}

export default Reception;
