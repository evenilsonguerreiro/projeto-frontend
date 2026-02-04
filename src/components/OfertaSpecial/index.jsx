
import tenisoferta from "../../assets/imagens/tenisoferta.png"
import { ContainerOferta, ConteudoOferta } from "./style";

const OfertaEspecial = () => {
    return (
        <ContainerOferta>
            <ConteudoOferta>

                <div className="imgOferta">
                   <img src={tenisoferta} alt="tenis" /> 
                </div>

              
                <div className="informacoes-oferta">
                    <span>Oferta especial</span>
                    <h2>Air jordan edição de colecionador</h2> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore suscipit sunt itaque asperiores incidunt, iste numquam nemo, mi
                        Inventore suscipit sunt itaque asperiores incidunt, iste numquam nemo, mi</p>      
                    <button>Ver oferta</button>
                </div>

            </ConteudoOferta>
        </ContainerOferta>
    );
};

export default OfertaEspecial;