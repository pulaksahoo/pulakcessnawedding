import React from 'react';

import MusicBacksound8 from '../../assets/music/Tu-Hi-Re.mp3';
import MusicBacksound0 from '../../assets/music/Ritviz.mp3';
import MusicBacksound2 from '../../assets/music/Navrai.mp3';
import MusicBacksound3 from '../../assets/music/Morni-Banke.mp3';
import MusicBacksound4 from '../../assets/music/Nachde.mp3';
import MusicBacksound5 from '../../assets/music/Queen.mp3';
import MusicBacksound6 from '../../assets/music/Tenu.mp3';
import MusicBacksound7 from '../../assets/music/DIL-CHORI.mp3';
import MusicBacksound1 from '../../assets/music/Tune-Kaha.mp3';
import Baarat from "../baarat";
import Mehendi from "../mehendi";
import Home from "../home";
import Nirbandha from "../nirbandha";
import Ring_Ceremony from "../ring-ceremony";
import Sangeet from "../sangeet";
import Shaadi from "../shaadi";
import Reception from "../reception";
import Haldi from "../haldi";

const tabData =[
    {
        name: "Home",
        tabColor: "	#270000",
        song: MusicBacksound0,
        content: <Home />
    },
    {
        name: "Nirbandha",
        tabColor: "#ff038f",
        song: MusicBacksound1,
        content: <Nirbandha />
    },
    {
        name: "Mehendi",
        tabColor: "green",
        song: MusicBacksound2,
        content: <Mehendi />
    },
    {
        name: "Ring Ceremony & Sangeet",
        tabColor: "orange",
        song: MusicBacksound3,
        content: <Sangeet />
    },
    {
        name: "Haldi",
        tabColor: "#FFD384",
        song: MusicBacksound4,
        content: <Haldi />
    },
    {
        name: "Baarat",
        tabColor: "#57007E",
        song: MusicBacksound5,
        content: <Baarat />
    },
    {
        name: "Shaadi",
        tabColor: "#dd1010",
        song: MusicBacksound6,
        content: <Shaadi />
    },
    {
        name: "Reception",
        tabColor: "#2192FF",
        song: MusicBacksound7,
        content: <Reception />
    },

];

export default tabData;

