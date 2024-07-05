import React, { useState, useEffect } from "react";
import './index.css';
import Player from "./player";

export default function Text() {
    const [init, setInit] = useState(false);
    const text = "Nós éramos apenas crianças brincando de amar, sem saber direito o que dizer um ao outro... Mas veja só agora, depois de tudo, estamos juntos. E eu sinto que preciso te falar algumas coisas...\n Eu vejo como você se esforça por nós. Mesmo que seja algo simples, fiz isso com todo o carinho do mundo para te mostrar que quero estar ao seu lado, sempre.\n  Me sinto verdadeiramente amado quando você está comigo. Quando você me abraça, sinto que estou exatamente onde sempre quis estar. Cada beijo que trocamos é um momento em que esqueço de tudo, porque tudo o que quero é te amar.\n Teu sorriso ilumina meu dia, e teu toque aquece minha alma. Nos teus olhos, encontro um universo onde me perco e me reencontro. Teu amor é meu refúgio, minha inspiração, meu tudo.\n Não posso prever o futuro, mas se pudesse, sei que gostaria de te ver lá. Vejo um futuro onde continuamos construindo nossos sonhos juntos, superando obstáculos de mãos dadas. Você é tudo o que eu preciso, meu amor. E escrevi estas palavras para que você nunca se esqueça disso.\n  Quero que saiba que cada momento ao teu lado é precioso. O tempo que passamos juntos, as risadas que compartilhamos, os desafios que enfrentamos – tudo isso fortalece ainda mais nosso laço. Agradeço todos os dias por ter você em minha vida, e mal posso esperar para ver o que o futuro nos reserva.\n  Te amo mais do que palavras podem expressar, e estou ansioso para continuar esta jornada maravilhosa ao teu lado. Com amor eterno,\n \n Álison.";
    const [output, setOutput] = useState("");

    const forYou = async () => {
        await delay(2000);

        for(let i = 0; i<text.length; i++){
            setOutput((prevState) => prevState + text[i]);
            await delay(30);
        }
    }

    const delay = (delayInms) => {
        return new Promise(resolve => setTimeout(resolve, delayInms));
    };

    useEffect(()=>{
        if(output === "" && init){
            forYou();
        }
    },[init]);

    return (
        <div className="content-Text">
            <div className="content-music">
                <Player setInit={setInit} />
            </div>

            <div className="content-text">
                <h1 className={`textNormal ${init ? "open" : ""}`}>Lembra quando a gente se conheceu?</h1>
                <p className={`textNormal`} style={{ whiteSpace: 'pre-wrap' }}>{output}</p>
            </div>
        </div>
    );
}
