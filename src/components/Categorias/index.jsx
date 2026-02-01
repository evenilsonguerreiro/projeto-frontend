import { SectionContainer, IconContainer, IconItem } from "./style";
import Frame from "../../assets/imagens/Frame.png"
import Frame1 from "../../assets/imagens/Frame1.png"
import Frame2 from "../../assets/imagens/Frame2.png"
import sneakers from "../../assets/imagens/sneakers.png"

const Categorias = () => {
    return (
        <SectionContainer>
            <h2 className="title">Coleções em destaque</h2>
            
            <IconContainer>
                <IconItem>
                    <div className="circle">
                        <img src={Frame} alt="Camisetas" />
                    </div>
                    <span>Camisetas</span>
                </IconItem>
                 <IconItem>
                    <div className="circle">
                        <img src={Frame2} alt="Camisetas" />
                    </div>
                    <span>Calça</span>
                </IconItem>
                 <IconItem>
                    <div className="circle">
                        <img src={Frame1} alt="Camisetas" />
                    </div>
                    <span>Bonés</span>
                </IconItem>
                 <IconItem>
                    <div className="circle">
                        <img src={Frame2} alt="Camisetas" />
                    </div>
                    <span>Headefhones</span>
                </IconItem>
                 <IconItem>
                    <div className="circle">
                        <img src={sneakers} alt="Camisetas" />
                    </div>
                    <span>Tênis</span>
                </IconItem>

                
                
            </IconContainer>
        </SectionContainer>
    );
};

export default Categorias;