import {
  Chekbox,
  ContainerHeader,
  ContainerSecPrincipal,
  ContainerSection,
  Overlay,
  SideBar,
  SideBarD,
  SideBarE,
 
} from "./style";
import Layer1 from "../../assets/imagens/Layer1.png";
import Vector from "../../assets/imagens/Vector.png"
import filter from "../../assets/imagens/filter.png";
import { useState } from "react";
import ProductCard from "../../components/ProductCard";

const produtosLista = [
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
    nome: "Puma-Cell Divide V2",
    categoria: "Tênis",
    preco: 200,
    precoDesconto: 100,
    imagem: Layer1,
  },
  {
    id: 4,
    nome: "Adidas-Impacto",
    categoria: "Tênis",
    preco: 200,
    precoDesconto: 100,
    imagem: Layer1,
  },
  {
    id: 5,
    nome: "K-Swiss V8 - Performance",
    categoria: "Tênis",
    preco: 200,
    precoDesconto: 100,
    imagem: Layer1,
  },
  {
    id: 6,
    nome: "K-Swiss V8 - Performance",
    categoria: "Tênis",
    preco: 200,
    precoDesconto: 100,
    imagem: Layer1,
  },
  {
    id: 7,
    nome: "K-Swiss V8 - Performance",
    categoria: "Tênis",
    preco: 200,
    precoDesconto: 100,
    imagem: Layer1,
  },
  {
    id: 8,
    nome: "K-Swiss V8 - Performance",
    categoria: "Tênis",
    preco: 200,
    precoDesconto: 100,
    imagem: Layer1,
  },
  {
    id: 9,
    nome: "K-Swiss V8 - Performance",
    categoria: "Tênis",
    preco: 200,
    precoDesconto: 100,
    imagem: Layer1,
  },
  {
    id: 10,
    nome: "K-Swiss V8 - Performance",
    categoria: "Tênis",
    preco: 200,
    precoDesconto: 100,
    imagem: Layer1,
  },
  {
    id: 11,
    nome: "K-Swiss V8 - Performance",
    categoria: "Tênis",
    preco: 200,
    precoDesconto: 100,
    imagem: Layer1,
  },
  {
    id: 12,
    nome: "K-Swiss V8 - Performance",
    categoria: "Tênis",
    preco: 200,
    precoDesconto: 100,
    imagem: Layer1,
  },
  {
    id: 13,
    nome: "K-Swiss V8 - Performance",
    categoria: "Tênis",
    preco: 200,
    precoDesconto: 100,
    imagem: Layer1,
    desconto: "30% OFF",
  },
  {
    id: 14,
    nome: "K-Swiss V8 - Performance",
    categoria: "Tênis",
    preco: 200,
    precoDesconto: 100,
    imagem: Layer1,
  },
  {
    id: 15,
    nome: "K-Swiss V8 - Performance",
    categoria: "Tênis",
    preco: 200,
    precoDesconto: 100,
    imagem: Layer1,
  },
];
const ProductListingPage = () => {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <>
      <ContainerSection>
        <ContainerSecPrincipal>
          <ContainerHeader>
            <p className="titulo">
              Resultado para "Tênis" - <span>989.00 produtos</span>
            </p>

            <div className="moblie">
              <p className="ordem">
                Ordenado por : -{" "}
                <span>
                  {" "}
                  Mais relevante <img src={Vector} alt="vector" />
                </span>
              </p>
              <img
                onClick={() => setMostrarModal(true)}
                className="filtro"
                src={filter}
                alt="imagem filtro"
              />
            </div>
          </ContainerHeader>
          {mostrarModal && <Overlay onClick={() => setMostrarModal(false)} />}
          <SideBar>
            <SideBarE
              className={mostrarModal ? "sidebarAberto" : "sidebarFechado"}
            >
              <h3 className="filtro">Filtrar por</h3>
              <hr />
              <h4 className="marcas">Marka</h4>
              <Chekbox>
                <input type="checkbox" id="nike" name="marka" value="nike" />
                <span>Adidas</span>
              </Chekbox>
              <Chekbox>
                <input
                  className="active"
                  type="checkbox"
                  id="nike"
                  name="marka"
                  value="nike"
                />
                <span>Calenciaga</span>
              </Chekbox>
              <Chekbox>
                <input type="checkbox" id="nike" name="marka" value="nike" />
                <span>K-Swiss</span>
              </Chekbox>
              <Chekbox>
                <input type="checkbox" id="nike" name="marka" value="nike" />
                <span>Nike</span>
              </Chekbox>
              <Chekbox>
                <input type="checkbox" id="nike" name="marka" value="nike" />
                <span>Puma</span>
              </Chekbox>

              <h4 className="marcas">Categoria</h4>
              <Chekbox>
                <input type="checkbox" id="nike" name="marka" value="nike" />
                <span>Esporte e lazer</span>
              </Chekbox>
              <Chekbox>
                <input
                  className="active"
                  type="checkbox"
                  id="nike"
                  name="marka"
                  value="nike"
                />
                <span>Casual</span>
              </Chekbox>
              <Chekbox>
                <input type="checkbox" id="nike" name="marka" value="nike" />
                <span>Utilitário</span>
              </Chekbox>
              <Chekbox>
                <input type="checkbox" id="nike" name="marka" value="nike" />
                <span>Corrida</span>
              </Chekbox>

              <h4 className="marcas">Gênero</h4>
              <Chekbox>
                <input type="checkbox" id="nike" name="marka" value="nike" />
                <span>Masculino</span>
              </Chekbox>
              <Chekbox>
                <input
                  className="active"
                  type="checkbox"
                  id="nike"
                  name="marka"
                  value="nike"
                />
                <span>Feminino</span>
              </Chekbox>
              <Chekbox>
                <input type="checkbox" id="nike" name="marka" value="nike" />
                <span>Unisex</span>
              </Chekbox>

              <h4 className="marcas">Estado</h4>
              <Chekbox>
                <input type="radio" id="nike" name="marka" value="nike" />
                <span>Novo</span>
              </Chekbox>
              <Chekbox>
                <input type="radio" id="nike" name="marka" value="nike" />
                <span>Usado</span>
              </Chekbox>
            </SideBarE>
            <SideBarD>
              {produtosLista.map((produto) => (
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
            </SideBarD>
          </SideBar>
        </ContainerSecPrincipal>
      </ContainerSection>
    </>
  );
};

export default ProductListingPage;
