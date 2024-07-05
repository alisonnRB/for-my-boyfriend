import React, {useState} from "react";
import "./index.css";

import artist from "../../../assets/E-wA.jpeg";

import next from '../../../assets/next.png';
import before from '../../../assets/before.png';
import play from '../../../assets/Play.png';
import pause from '../../../assets/Pause Button.png';
import audioSrc from '../../../assets/shinunaga.mp3'

export default function Player(props){
    const [audio] = useState(new Audio(audioSrc));
    const [Play, setPlay] = useState(false);

    function music(){
        if(Play){
            audio.pause();
        }else{
            audio.play();
            props.setInit(true);
        }
    }

    return(
        <div className="content-player">

            <img src={artist} className="artist"/>
            <p className="textNormal">SHINUNOGA E-WA</p>
            
            <div className="content-func">
                <img src={before} alt=""/>
                <img src={Play ? pause : play} alt="" onClick={()=>{setPlay(!Play); music()}}/>
                <img src={next} alt="" />
            </div>
        </div>
    )
}