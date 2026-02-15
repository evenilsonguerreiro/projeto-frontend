import { BuyBoxContainer,Title,Reference,PriceContainer,ActualPrice,OldPrice,DescriptionTitle,DescriptionText,BuyButton,RatingContainer,Stars,RatingValue,ReviewsCount } from "./style";
import ProductOpitions from "../../components/ProductOptions";

const BuyBox = () => {
    return (
        <BuyBoxContainer>
            <Title>Tênis Nike Revolution 6 Next Nature Masculino</Title>
            <Reference>Casual | Nike | REF:38416711</Reference>
            <RatingContainer>
            <Stars>
              
                <span>★</span><span>★</span><span>★</span><span>★</span><span className="gray">★</span>
            </Stars>
            <RatingValue>4.7 ★</RatingValue>
            <ReviewsCount>(90 avaliações)</ReviewsCount>
            </RatingContainer>
            
            <PriceContainer>
                <ActualPrice> 219,00</ActualPrice>
                <OldPrice>R$ 299,00</OldPrice>
            </PriceContainer>

            <DescriptionTitle>Descrição do produto</DescriptionTitle>
            <DescriptionText>
                Conforto é a chave para a sua rotina de corrida. Com o Nike Revolution 6, você terá um design que traz conforto, com um toque macio para uma passada suave.
            </DescriptionText>

           
            <ProductOpitions
                title="Tamanho" 
                opitions={["39", "40", "41", "42"]} 
                shape="square" 
                type="text" 
            />

            <ProductOpitions
                title="Cor" 
                opitions={["#6EE7B7", "#3B82F6", "#EF4444", "#222222"]} 
                shape="circle" 
                type="color" 
            />

            <BuyButton>COMPRAR</BuyButton>
        </BuyBoxContainer>
    );
};

export default BuyBox;