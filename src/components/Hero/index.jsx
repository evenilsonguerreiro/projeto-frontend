import { useState, useEffect } from 'react';
import { HeroContainer, HeroContent, HeroTexto, HeroImagem, Indicadores, TituloContainer } from "./style";

import arrowleft from "../../assets/imagens/arrowleft.svg";
import arrowright from "../../assets/imagens/arrowright.svg";
import chama from "../../assets/imagens/chama.png";
import homeslide1 from "../../assets/imagens/homeslide1.jpeg"
import homeslide2 from "../../assets/imagens/homeslide2.jpeg"
import homeslide3 from "../../assets/imagens/homeslide3.jpeg"
import homeslide4 from "../../assets/imagens/homeslide4.jpeg"
import homeslide5 from "../../assets/imagens/homeslide5.jpeg"
import homeslide6 from "../../assets/imagens/homeslide6.jpeg"
import homeslide7 from "../../assets/imagens/homeslide7.jpeg"



const imagensSlide = [homeslide4, homeslide1, homeslide2, homeslide3, homeslide5,homeslide6,homeslide7]; 

const Hero = () => {
    const [atual, setAtual] = useState(0);

    const proximo = () => setAtual(atual === imagensSlide.length - 1 ? 0 : atual + 1);
    const anterior = () => setAtual(atual === 0 ? imagensSlide.length - 1 : atual - 1);

    useEffect(() => {
        const timer = setInterval(proximo, 5000);
        return () => clearInterval(timer);
    }, [atual]);

    return (
        <HeroContainer>
            <HeroContent>
               
                <HeroTexto>
                    <p className="subtitle">Melhores ofertas personalizadas</p>
                    <TituloContainer>
                        <h1>Queima de estoque Nike </h1>
                        <img className="chama" src={chama} alt="chama de fogo" />
                    </TituloContainer>
                    <p className="description">
                        Consequat culpa exercitante mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                    </p>
                    <button className="btn-ofertas">Ver Ofertas</button>
                </HeroTexto>

              
                <HeroImagem>
                    <img className="esquerda" src={arrowleft} alt="Voltar" onClick={anterior} style={{cursor: 'pointer'}} />
                    
                    <img className="tenishero" src={imagensSlide[atual]} alt="Tênis Nike" />
                    
                    <img className="direita" src={arrowright} alt="Passar" onClick={proximo} style={{cursor: 'pointer'}} />
                </HeroImagem>
            </HeroContent>

            <Indicadores>
                {imagensSlide.map((_, index) => (
                    <span 
                        key={index} 
                        className={index === atual ? "active" : ""}
                        onClick={() => setAtual(index)}
                        style={{cursor: 'pointer'}}
                    ></span>
                ))}
            </Indicadores>
        </HeroContainer>
    );
}

export default Hero;