import { Card, CardContainer, SectionContainer } from "./style";
import Maskgroup from "../../assets/imagens/Maskgroup.png"
import Maskgroup1 from "../../assets/imagens/Maskgroup1.png"
import Maskgroup2 from "../../assets/imagens/Maskgroup2.png"

const ColecaoDestaque = () => {
    return (
        <>
            <SectionContainer>
                <h2>Coleções em destaque</h2>
                <CardContainer>
                    <Card>
                        <div className="content">
                            <span className="discount">30% OFF</span>
                            <h3>Novo drop Supreme</h3>
                            <button>Comprar</button>
                        </div>
                        <img src={Maskgroup} alt="Produto" />
                    </Card>
                    <Card>
                        <div className="content">
                            <span className="discount">30% OFF</span>
                            <h3>Coleção Adidas</h3>
                            <button>Comprar</button>
                        </div>
                        <img src={Maskgroup1} alt="Produto" />
                    </Card>
                    <Card>
                        <div className="content">
                            <span className="discount">30% OFF</span>
                            <h3>Coleção Adidas</h3>
                            <button>Comprar</button>
                        </div>
                        <img src={Maskgroup2} alt="Produto" />
                    </Card>
                </CardContainer>
            </SectionContainer>
        </>
    );
}

export default ColecaoDestaque;