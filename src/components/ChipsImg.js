
import italy from "../assets/chipsstack/Pokerchips-New-Italy.png";
import vikings from "../assets/chipsstack/Pokerchips-New-Vikings.png";
import seahawks from "../assets/chipsstack/Pokerchips-New-Seahawks.png";

import white from "../assets/chipsstack/Pokerchips-New-White.png";
import black from "../assets/chipsstack/Pokerchips-New-Black.png";
import gold from "../assets/chipsstack/Pokerchips-New-Gold.png";
import reggae from "../assets/chipsstack/Pokerchips-New-Marley.png";

import broncos from "../assets/chipsstack/Pokerchips-New-Broncos.png";
import niners from "../assets/chipsstack/Pokerchips-New-49ers.png";
import sonics from "../assets/chipsstack/Pokerchips-New-Sonics.png";

import ducks from "../assets/chipsstack/Pokerchips-New-MightyDucks.png";
import flyers from "../assets/chipsstack/Pokerchips-New-Flyers.png";
import bulls from "../assets/chipsstack/Pokerchips-New-Bulls.png";

import minnesota from "../assets/chipsstack/Pokerchips-New-MinnesotaWild.png";
import browns from "../assets/chipsstack/Pokerchips-New-Browns.png";
import steelers from "../assets/chipsstack/Pokerchips-New-Steelers.png";

export default function ChipsImg({ style, chip, SetImg}) {
    const imgStatus = (image) => {
        SetImg(image);
        //console.log(image);
      };
    
      const extentionObj25 = {
        bronco: broncos,
        steeler: minnesota,
        viking: italy,
        flyer: ducks,
      };
      
      
      const extentionObj100 = {
        bronco: white,
        steeler: white,
        viking: white,
        flyer: white,
      };
      
      const extentionObj500 = {
        bronco: niners,
        steeler: browns,
        viking: vikings,
        flyer: flyers,
      };
      
      const extentionObj1000 = {
        bronco: black,
        steeler: black,
        viking: black,
        flyer: black,
      };
      
      const extentionObj5000 = {
        bronco: sonics,
        steeler: steelers,
        viking: seahawks,
        flyer: bulls,
      };
      
      const extentionObj25000 = {
        bronco: gold,
        steeler: gold,
        viking: gold,
        flyer: gold,
      };
      
      const extentionObj50000 = {
        bronco: reggae,
        steeler: reggae,
        viking: reggae,
        flyer: reggae,
      };
      

      const extentionObj = {
        25: extentionObj25[style],
        100: extentionObj100[style],
        500: extentionObj500[style],
        1000: extentionObj1000[style],
        5000: extentionObj5000[style],
        25000: extentionObj25000[style],
        50000: extentionObj50000[style],
      };
    
    
    const chipimg = extentionObj[chip]
    
    
    imgStatus(chipimg);

 
    }