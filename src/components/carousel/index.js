import React from "react";
import CarouselSlider from "react-carousel-slider";

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { IconButton } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import  CarouselImage from  "../../assets/images/carousel.jpg"




const rendercarousetlFrame = (logo, event, time, date, location1, location2, location3) => {
  return (
    <div  style={{width:"100%", height:"100%"}}>
      
      <div style={{border: '4px solid white',borderRadius: '10px', background:"transparent",margin: 20}}>
      <div style={{width:"100%", justifyContent:"center", alignItems:"center", display:"flex"}}>
        <img  style={{alignSelf:"center",background: "transparent", marginTop: 25,width: "70%"}} width={50} height={50} src={logo } />
      </div>
       <div style={{padding: 20}}> 
       <h3 style={{color: "white"}}>{event}</h3>
       <hr
        style={{
            color: "white",
            backgroundColor: "white",
            height: 3
        }}
    />

    <div style ={{display:"flex", flexDirection:"row"}}>
      <div>
      <div>

        <IconButton style={{fontSize: 30}}>
        <AccessTimeIcon fontSize= "30" style={{color:"white"}} iconStyle={{height: 60, width: 60}}/>
        </IconButton>
        <h6 size= {"40"} style={{color: "white"}}>{time}</h6>
        
      </div>
      </div>

      <div style={{marginLeft: 30}}>
      <div>

        <IconButton style={{fontSize: 30}}>
        <CalendarMonthIcon fontSize= "30" style={{color:"white"}} iconStyle={{height: 60, width: 60}}/>
        </IconButton>
        <h6 size= {"40"} style={{color: "white"}}>{date}</h6>
        
      </div>
      {/* <hr
        style={{
            color: "white",
            backgroundColor: "white",
            height: 1
        }}
        /> */}
      </div>

     

    </div>
    <hr
        style={{
            color: "white",
            backgroundColor: "white",
            height: 1
        }}
        />

    <div>

    <IconButton style={{fontSize: 30}}>
    <LocationOnIcon fontSize= "30" style={{color:"white"}} iconStyle={{height: 60, width: 60}}/>
    </IconButton>
    <h6  style={{color: "white", marginTop: 10}}> {location1}</h6>
    <h6  style={{color: "white"}}>{location2}</h6>
    <h6  style={{color: "white"}}>{location3}</h6>

    </div>


        <div style={{margin: 20}}>
        {/* <img style={{width: 100, height: 100}} src={WeddingImg}  /> */}

        </div>
        </div>
        
      </div>
      
      
    </div>

  )
}

let nirbandha = rendercarousetlFrame( require('../../assets/images/nirbandhalogo.png'),"Nirbandha","11 AM Onwards", "12th Jan Thursday", "Ram Mandir,", "CDA Sector VI,", " Cuttack, Odisha");

let mehendi = rendercarousetlFrame( require('../../assets/images/mehendilogo.png'),"Mehendi","1 PM Onwards", "9th Feb Thursday", "Conference Lawn,", "The Hans Coco Palm,", "Puri");

let sangeet = rendercarousetlFrame(require('../../assets/images/wedding-logo.png'), "Ring Ceremony & Sangeet ","6 PM Onwards", "9th Feb Thursday", "Conference Hall,", "The Hans Coco Palm,", "Puri");

let haldi = rendercarousetlFrame(require('../../assets/images/haldilogo.png'), "Haldi","11 AM Onwards", "10th Feb Friday", "Palm Garden,", "The Hans Coco Palm,", "Puri");

let baarat = rendercarousetlFrame(require('../../assets/images/baaratlogo.png'), "Baarat","5 PM Onwards", "10th Feb Friday", "Will start near Hotel Sweet Villa(Sea View),", "1kms from The Hans Coco Palm,", "Puri");

let wedding = rendercarousetlFrame(require('../../assets/images/shaadilogo.png'), "Shaadi","7 PM Onwards", "10th Feb Friday", "Poolside Lawn,", "The Hans Coco Palm,", "Puri");

let reception = rendercarousetlFrame(require('../../assets/images/receptionlogo.png'), "Reception","7 PM Onwards", "12th Feb Sunday", "The Tulip,", "Mayfair, Rourkela", "Panposh Road, Rourkela");



 

let slideCpnt = [nirbandha, mehendi,sangeet, haldi,baarat, wedding, reception];
/* Percantage to set height does not work well 
in prop sliderBoxStyle here because we could 
not init the height of parent element */

let sliderBoxStyle = {
  height: "80%",
  // width: "100%",
  background: "transparent"
};

let itemsStyle = {
  background: "transparent"
  // , margin: "0px 0px", padding: "0px"
};

let buttonSetting = {
  placeOn: "bottom-beneath"
};

let manner = {
  autoSliding: { interval: "4s" }
  //, duration: "0.3s"
};

export default function CarouselView() {
    return(

  <div  style={{backgroundImage: `url(${CarouselImage})`, backgroundRepeat: "round" }}>

  <CarouselSlider
    slideCpnts={slideCpnt}
    manner={manner}
    buttonSetting={buttonSetting}
    sliderBoxStyle={sliderBoxStyle}
    itemsStyle={itemsStyle}
  />
  </div>
    );
}


