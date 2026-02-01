import { HeroContainer, HeroContent, HeroTexto, HeroImagem, Indicadores, TituloContainer } from "./style";
import tenishero from "../../assets/imagens/tenishero.png"
import arrowleft from "../../assets/imagens/arrowleft.svg"
import arrowright from "../../assets/imagens/arrowright.svg"
import chama from "../../assets/imagens/chama.png"


const Hero = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <HeroTexto>
                    <p className="subtitle">Melhores ofertas personalizadas</p>
                    <TituloContainer>
                        <h1>Queima de estoque Nike </h1>
                         <img className="chama" src={chama} alt="chama de fogo"  />
                    </TituloContainer>
                    <p className="description">
                        Consequat culpa exercitante mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                    </p>
                    <button className="btn-ofertas">Ver Ofertas</button>
                </HeroTexto>

                <HeroImagem>
                    
                        <img className="esquerda" src={arrowleft} alt="Voltar" />
                  
                    <img className="tenishero" src={tenishero} alt="Tênis Nike" />
                   
                        <img className="direita" src={arrowright} alt="Passar" />
                  
                </HeroImagem>
            </HeroContent>

            <Indicadores>
                <span className="active"></span>
                <span></span>
                <span></span>
                <span></span>
            </Indicadores>
        </HeroContainer>
    );
}

export default Hero;