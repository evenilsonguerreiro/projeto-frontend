import { HeaderContainer, HeaderContent } from "./style";
import minicart from "../../assets/imagens/minicart.svg";
import lupa from "../../assets/imagens/lupa.png";
import { NavMenu } from "./style";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../Logo";
import { useState } from "react";
import Menu from "../../assets/imagens/Menu.png";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [valorPesquisado, setValorPesquisado] = useState("");
  const Navegar = useNavigate();

  const realizarBusca = () => {
    if (valorPesquisado.trim()) {
      Navegar(`/products?filter=${valorPesquisado}`);
    }
  };

  const detectarEnter = (evento) => {
    if (evento.key === "Enter") {
      realizarBusca();
    }
  };

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <div className="logo">
            <img
              onClick={() => setMenuAberto(!menuAberto)}
              className="menu"
              src={Menu}
              alt="menu"
            />
            <Logo />
          </div>

          <div className="container">
            <input
              className="imput"
              type="text"
              value={valorPesquisado}
              onChange={(e) => setValorPesquisado(e.target.value)}
              onKeyDown={detectarEnter}
              placeholder="Pesquisar produto..."
            />
            <button className="btn-lupa" onClick={realizarBusca}>
              <img className="lupa" src={lupa} alt="" />
            </button>
          </div>

          <div className="actions">
            <a className="cadastro" href="#">
              Cadastre-se
            </a>
            <button className="btn-entrar">Entrar</button>
            <div className="cart">
              <img src={minicart} alt="" />
            </div>
          </div>
        </HeaderContent>
        <NavMenu className={menuAberto ? "aberto" : ""}>
          <ul>
            <li onClick={() => setMenuAberto(false)}>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li onClick={() => setMenuAberto(false)}>
              <NavLink to="/produtos">Produtos</NavLink>
            </li>
            <li onClick={() => setMenuAberto(false)}>
              <NavLink to="/categoria">Categoria</NavLink>
            </li>
            <li onClick={() => setMenuAberto(false)}>
              <NavLink to="/meus pedidos">Meus Pedidos</NavLink>
            </li>
          </ul>
        </NavMenu>
      </HeaderContainer>
    </>
  );
};

export default Header;
