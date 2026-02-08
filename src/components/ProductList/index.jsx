import { SectionProdutos, GradeProdutos } from "./style";
import Layer1 from "../../assets/imagens/Layer1.png";
import ProductCard from "../ProductCard";

const produtos = [
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
  {
    id: 5,
    nome: "K-Swiss V8 - Performance",
    categoria: "Tênis",
    preco: 200,
    precoDesconto: 100,
    imagem: Layer1,
    desconto: "30% OFF",
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
];

const ProductListing = () => {
  return (
    <SectionProdutos>
      <div className="header">
        <h2>Produto em alta</h2>
        <a href="#">Ver todos &rarr;</a>
      </div>

      <GradeProdutos>
        {produtos.map((produto) => (
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
      </GradeProdutos>
    </SectionProdutos>
  );
};

export default ProductListing;
