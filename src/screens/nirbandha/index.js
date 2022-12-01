import React, { useState } from 'react';
import { Fragment } from 'react';
import FloatingMusic from '../../components/FloatingMusic';
import WelcomeSection from '../../components/WelcomeSection';
import tabData from '../launchscreen/data';
import  Nirbandhabackground from "../../assets/images/nirbandha.jpg"
import  NirbandhaLogo from "../../assets/images/nirbandhalogo.png"
import HowToReachCuttack from '../../components/howtoreachCuttack';
import EventDescription from '../../components/eventDescription';
import FooterSectionOther from '../../components/FooterSectionOther';

function Nirbandha() {

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
                    event = {"Nirbandha"}
                    dateTime={"12th Jan, 11 AM Onwards"}
                    location={"Maa Gadachandi Mandira, \n Cantonment Rd, Biju Patnaik Colony, Cuttack"}
                    background={Nirbandhabackground}
                    logo={NirbandhaLogo}
                />
                <EventDescription
                    event="Ring Ceremony & Sangeet" 
                    color="pink"
                    description="The fathers of the bride and groom make a vow Sankalpa by holding sacred articles to get their children wed to each other and the whole ritual happens either in the bride's house or a temple in the presence of the bridegroom and bride. This is considered as a commitment signal or Vaak Nischaya to proceed with marriage arrangements, which is accompanied with exchange of gifts between both families for bride and bridegroom."
                    description1=""
                
                />
                <HowToReachCuttack/>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.5039714985073!2d85.86352671487417!3d20.48555658629514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1912126947a1ab%3A0x540d48a60583cba8!2sMaa%20Gadachandi%20Mandira!5e0!3m2!1sen!2sin!4v1669715263916!5m2!1sen!2sin" height="600" width="100%" style={{marginTop:20}}></iframe>
                <FooterSectionOther
                    image="Herculture"
                    imagelink={"https://www.herculture.org/blog/2015/7/22/the-big-fat-indian-i-do"}
                    songlink="https://www.youtube.com/watch?v=GqagMyq2hGQ"
                    singer="Prateek Kuhad"
                />
                
            </Fragment>
            <FloatingMusic 
                MusicBackSound={tabData[1].song}
                setPlay={setPlay}
                play={play}
            />
        </div>
    )
}

export default Nirbandha;
