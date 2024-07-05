import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import coracao from "../../assets/coracao.png";

export default function Home() {
    const [start, setStart] = useState(false);
    const navigate = useNavigate();

    async function Open(){
        await delay(2000);
        navigate('./text')
    } 

    const delay = (delayInms) => {
        return new Promise(resolve => setTimeout(resolve, delayInms));
    };

    return (
        <div className="content-Home">
            <div className={`part1 ${start ? "open" : null}`}>
                <p className="textTitle">HALAN</p>
                <p className="textTitle">(Amor de Álison)</p>
            </div>

            <div className="content-coracao">
                <img src={coracao} onClick={()=>{setStart(true);  Open(); }} className={`coracao ${start ? "opens" : null}`} />
            </div>


            <div className={`part2 ${start ? "open" : null}`}>
                <p className="textTitle">ÁLISON</p>
                <p className="textTitle">(Amor de Halan)</p>
            </div>

        </div>
    );
}