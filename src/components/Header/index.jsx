import { HeaderContainer, HeaderContent } from "./style";
import minicart from "../../assets/imagens/minicart.svg";
import lupa from "../../assets/imagens/lupa.png"
import { NavMenu } from "./style";
import {  NavLink, useNavigate } from "react-router-dom";
import Logo from "../Logo";
import { useState } from "react";

const Header = () => {

    const  [valorPesquisado, setValorPesquisado] = useState("");
    const Navegar = useNavigate();

    const realizarBusca = () => {
        if(valorPesquisado.trim()) {
            Navegar(`/products?filter=${valorPesquisado}`)
        }
    }

    const detectarEnter = (evento) => {
        if(evento.key === "Enter") {
            realizarBusca()
        }
    }

    return (
        <>
            <HeaderContainer>
                <HeaderContent>
                    <div className="logo">
                        <Logo/>
                    </div>

                    <div className="search-container">
                        <input type="text"
                        value={valorPesquisado}
                        onChange={(e) => setValorPesquisado(e.target.value)}
                        onKeyDown={detectarEnter}
                        placeholder="Pesquisar produto..." />
                        <button onClick={realizarBusca}>
                            <img src={lupa} alt="" />
                        </button>
                    </div>

                    <div className="actions">
                        <a href="#">Cadastre-se</a>
                        <button className="btn-entrar">Entrar</button>
                        <div className="cart">
                            <img src={minicart} alt="" />
                        </div>
                    </div>
                </HeaderContent>
                <NavMenu>
                    <ul>
                        <li>
                            <NavLink to="/"end>Home</NavLink>
                            
                        </li>
                        <li>
                             <NavLink to="/produtos">Produtos</NavLink>
                        </li>
                        <li>
                             <NavLink to="/categoria">Categoria</NavLink>
                        </li>
                        <li>
                             <NavLink to="/meus pedidos">Meus Pedidos</NavLink>
                        </li>
                        
                    </ul>
                </NavMenu>
            </HeaderContainer>
        </>
    );
}

export default Header;