import React, { useState } from 'react';
import { Fragment } from 'react';
import FloatingMusic from '../../components/FloatingMusic';
import WelcomeSection from '../../components/WelcomeSection';
import tabData from '../launchscreen/data';
import  Baaratbackground from "../../assets/images/vintage.webp"
import  Baaratlogo from "../../assets/images/baaratlogo.png"
import HowToReach from '../../components/howtoreach';
import EventDescription from '../../components/eventDescription';
import FooterSectionOther from '../../components/FooterSectionOther';

function Baarat() {

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
                    event = {"Baarat"}
                    pulak={true}
                    dateTime={"10th Feb, 5 PM Onwards"}
                    location={"Will start near Hotel Sweet Villa(Sea View), \n 1 km from The Hans Coco Palms, Puri"}
                    background={Baaratbackground}
                    logo={Baaratlogo}
                    outfit={"Indian"}
                />
                <EventDescription
                    event="Baarat" 
                    color="red"
                    description="Baarat is a groom's wedding procession in India. In Indian communities, it is customary for the groom to travel to the wedding venue (often the bride's house) on a mare, accompanied by his family members."
                    description1=""
                
                />
                <HowToReach/>
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.184284370194!2d85.80288111486267!3d19.789782386682464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c57e797d007b%3A0x274dae054afd4e0d!2sHotel%20Sweet%20Villa(Sea%20View)!5e0!3m2!1sen!2sin!4v1669716094219!5m2!1sen!2sin" 
                height="600" 
                width="100%" style={{marginTop:20}}>
                    
                </iframe>
                <FooterSectionOther
                    imagelink={"https://timesofindia.indiatimes.com/life-style/spotlight/from-baraats-to-dolis-brides-and-grooms-rev-it-up-with-vintage-cars-this-shaadi-season/articleshow/87873902.cms"}
                    image = "Times of India"
                    songlink="https://www.youtube.com/watch?v=udra3Mfw2oo"
                    singer="Labh Janjua, Sonu Kakkad, Neha Kakkar"
                />
            </Fragment>
            <FloatingMusic 
                MusicBackSound={tabData[5].song}
                setPlay={setPlay}
                play={play}
            />
        </div>
    )
}

export default Baarat;
