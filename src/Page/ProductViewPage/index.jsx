import * as S from "./style";
import tenisGaleria from "../../assets/imagens/tenisGaleria.png";
import producimage1 from "../../assets/imagens/producimage1.jpeg";
import producimage2 from "../../assets/imagens/producimage2.jpeg";
import producimage3 from "../../assets/imagens/producimage3.jpeg";
import producimage4 from "../../assets/imagens/producimage4.jpeg";
import producimage5 from "../../assets/imagens/producimage5.jpeg";
import Star1 from "../../assets/imagens/Star1.png";
import Star2 from "../../assets/imagens/Star2.png";
import Star3 from "../../assets/imagens/Star3.png";
import arrowleft from "../../assets/imagens/arrowleft.svg";
import arrowright from "../../assets/imagens/arrowright.svg";
import Layer1 from "../../assets/imagens/Layer1.png";
import Line from "../../assets/imagens/Line.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProductCard from "../../components/ProductCard";

const ProductViewPage = () => {
  const [imagemPrincipal, setImagemPrincipal] = useState(tenisGaleria);

  const produtosRelacionados = [
    {
      id: 1,
      nome: "K-Swiss V8 - Performance",
      categoria: "Tênis",
      preco: 200,
      precoDesconto: 100,
      imagem: Layer1,
      desconto: "30% OFF",
    },
    {
      id: 2,
      nome: "K-Swiss V8 - Performance",
      categoria: "Tênis",
      preco: 200,
      precoDesconto: 100,
      imagem: Layer1,
    },
    {
      id: 3,
      nome: "K-Swiss V8 - Performance",
      categoria: "Tênis",
      preco: 200,
      precoDesconto: 100,
      imagem: Layer1,
    },
    {
      id: 4,
      nome: "K-Swiss V8 - Performance",
      categoria: "Tênis",
      preco: 200,
      precoDesconto: 100,
      imagem: Layer1,
    },
  ];
  return (
    <S.ContainerGeral>
      <S.Container>
        <div className="trilha">
          <p>
            <strong>Home /</strong> Produtos / Tênis / Nike / Tênis Nike
            Revolution 6 Next Nature Masculino
          </p>
        </div>
        <div className="conteudo-principal">
          <div className="galeria">
            <div className="foto-principal">
              <img className="sDireita" src={arrowleft} alt="cetinha" />
              <img className="sEsquerda" src={arrowright} alt="cetinha" />
              <img
                src={imagemPrincipal}
                alt="Tênis Nike Air Max"
                width="100%"
              />
            </div>
            <div className="miniaturas">
              <div
                className="img-m1"
                onClick={() => setImagemPrincipal(tenisGaleria)}
              >
                <img src={tenisGaleria} alt="ângulo 1" width="100%" />
              </div>
              <div
                className="img-m2"
                onClick={() => setImagemPrincipal(producimage1)}
              >
                <img src={producimage1} alt="ângulo 2" width="100%" />
              </div>
              <div
                className="img-m3"
                onClick={() => setImagemPrincipal(producimage2)}
              >
                <img src={producimage2} alt="ângulo 3" width="100%" />
              </div>
              <div
                className="img-m4"
                onClick={() => setImagemPrincipal(producimage3)}
              >
                <img src={producimage3} alt="ângulo 4" width="100%" />
              </div>
              <div
                className="img-m5"
                onClick={() => setImagemPrincipal(producimage4)}
              >
                <img src={producimage4} alt="ângulo 5" width="100%" />
              </div>
            </div>
          </div>

          <div className="infos">
            <div>
              <h1>
                Tênis Nike Revolution <br />6 Next Nature Masculino
              </h1>
              <p>Casual | Nike | REF:38416711</p>
              <div className="avaliacao">
                <div className="stars">
                  <img src={Star1} alt="" />
                  <img src={Star2} alt="" />
                  <img src={Star3} alt="" />
                  <img src={Star1} alt="" />
                  <img src={Star2} alt="" />
                </div>
                <span>
                  (4.8 <img src={Star3} alt="" /> estrelas)
                </span>
              </div>
              <div className="preco">
                <span className="preco-atual">
                  <small>R$</small> 219,00
                </span>
                <span className="preco-antigo"> 299,00</span>
              </div>
            </div>

            <div className="descricao">
              <h4>Descrição do produto</h4>
              <p>
                O Nike Air Max 270 proporciona amortecimento visível a cada
                passo. Atualizado para o conforto moderno, ele homenageia o Air
                Max 180 original de 1991.
              </p>
            </div>

            <div className="selecao-tamanho">
              <h4>Tamanho</h4>
              <div>
                <button className="tam-btn">39</button>
                <button className="tam-btn">40</button>
                <button className="tam-btn">41</button>
                <button className="tam-btn">42</button>
                <button className="tam-btn">43</button>
              </div>
            </div>

            <div className="selecao-cor">
              <h4>Cores</h4>
              <div className="corPont">
                <div className="cor1"></div>
                <div className="cor2"></div>
                <div className="cor3"></div>
                <div className="cor4"></div>
              </div>
            </div>

            <div className="botao-comprar">
              <button
                style={{
                  width: "100%",
                  padding: "15px",
                  backgroundColor: "#F6D000",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                COMPRAR
              </button>
            </div>
          </div>
        </div>

        <div className="relacionados">
          <div className="cards-r">
            <div className="relacionados-h">
              <h3>Produtos Relacionados</h3>
              <Link>
                Ver todos <img src={Line} alt="CETA" />
              </Link>
            </div>
            <div className="grid-relacionados">
              {produtosRelacionados.map((produto) => (
                <ProductCard
                  key={produto.id}
                  imagem={produto.imagem}
                  desconto={produto.desconto}
                >
                  <p className="categoria">{produto.categoria}</p>
                  <h3 className="nome">{produto.nome}</h3>

                  <div className="precos">
                    <span className="preco-antigo">${produto.preco}</span>
                    <span className="preco-novo">${produto.precoDesconto}</span>
                  </div>
                </ProductCard>
              ))}
            </div>
          </div>
        </div>
      </S.Container>
    </S.ContainerGeral>
  );
};

export default ProductViewPage;
