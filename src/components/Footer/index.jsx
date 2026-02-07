import { FooterContainer, FooterContent, FooterColuna } from "./style";
import logofooter from "../../assets/imagens/logofooter.png"
import facebook from "../../assets/imagens/facebook.png"
import instagram from "../../assets/imagens/instagram.png"
import twitter from "../../assets/imagens/twitter.png"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterColuna>
                    <div className="logo">
                        <img src={logofooter} alt="" />
                    </div>
                    <p className="descricao">
                        Aproveite a oportunidade única de adquirir um ícone.
                         Com acabamento refinado e silhueta clássica.
                         </p>
                    <div className="redes-sociais">
                        <img src={facebook} alt="faceboock" />
                        <img src={instagram} alt="instagram" />
                        <img src={twitter} alt="twitter" />
                    </div>
                </FooterColuna>

                <FooterColuna>
                    <h4>Informação</h4>
                    <nav className="informacao">
                        <ul>
                            <li>Sobre Drip Store</li>
                            <li>Segurança</li>
                            <li>Wishlist</li>
                            <li>Blog</li>
                            <li>Trabalhe conosco</li>
                            <li>Meus Pedidos</li>
                        </ul>
                    </nav>
                </FooterColuna>

                <FooterColuna>
                    <h4>Categorias</h4>
                    <nav className="informacao">
                        <ul>
                            <li>Camisetas</li>
                            <li>Calças</li>
                            <li>Bonés</li>
                            <li>Headphones</li>
                            <li>Tênis</li>
                        </ul>
                    </nav>
                </FooterColuna>

                <FooterColuna>
                    <h4>Contato</h4>
                    <p className="contatos">
                        Av. Santos Dumont, 1510 - 1
                        andar - Aldeota, Fortaleza -
                        CE, 60150-161 <br />
                        (85) 3051-3411
                    </p>
                </FooterColuna>

            </FooterContent>
            <div className="barra">
                <span></span>
                <p> @ 2026 Digital College </p>
            </div>

        </FooterContainer>
    );
};

export default Footer;