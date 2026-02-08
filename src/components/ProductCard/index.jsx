import { CardContainer } from "./style";

const ProductCard = ({ children, imagem, desconto, nome }) => {
  return (
    <>
      <CardContainer>
        <div className="image-container">
          {desconto && <span className="tag-desconto">{desconto}</span>}
          <img src={imagem} alt={nome} />
        </div>
        <div className="info-section">
            {children}
        </div>
      </CardContainer>
    </>
  );
};

export default ProductCard;
