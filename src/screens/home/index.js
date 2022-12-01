import React, { Fragment, useState } from 'react';
import FloatingMusic from '../../components/FloatingMusic/Loadable';
import tabData from '../launchscreen/data';
import HelloSection from "../../components/helloSection"
import WelcomeSection from "../../components/WelcomeSection"
import MainLayout from '../../components/Layout';
import HowtoReachPuri from '../../components/howtoreach';
import WeddingSection from '../../components/WeddingSection';
import CarouselView from "../../components/carousel"
import { useEffect } from 'react';
import FooterSection from '../../components/FooterSection';

function Home() {
    const[play, setPlay] = useState(true);
    const handleClickDetail = () => {
        // setShowDetailContent(true);
      };

    useEffect(() => {
        setTimeout(() => {
            setPlay(false)
            
          }, 2000);
          setTimeout(() => {
            setPlay(true)
          }, 2000);
    },[])
    
    

    return (
        <div>
            <MainLayout>
                <Fragment>
                    <WelcomeSection
                        guestName={"guestName"}
                        isAnonymGuest={true}
                        isInvitation={true}
                        location={"location"}
                        // codeLink={finalTicketLink}
                        homeScreen={true}
                        onClickDetail={handleClickDetail}
                        event = {"Wedding"}
                    />
                    <HelloSection/>
                    <CarouselView/>
                    <HowtoReachPuri/>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdAtL9lVCG2Wmcsvg7FeyMRsWlacUpOhLY8gHoJ7ZWaGFDRZQ/viewform?embedded=true" width="640" height="2250" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    <FooterSection/>
                </Fragment>
                {/* <WeddingSection isInvitation={true} /> */}
                
                <FloatingMusic 
                    MusicBackSound={tabData[0].song}
                    setPlay={setPlay}
                    play={play}
                />
            </MainLayout>
        </div>
    )
}

export default Home;
