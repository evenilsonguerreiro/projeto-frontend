import styled from "styled-components";
import { Cores } from "../../Cores";

export const SectionProdutos = styled.section`
    max-width: 1200px;
    margin: auto;
    padding: 60px 20px;
  


    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;

        h2 {
            font-size: 24px;
            line-height: 38px;
            color: ${Cores.darkGray2}; 
            letter-spacing: 0.75px;
        }
        a { 
            font-size: 18px;
            line-height: 34px;
            letter-spacing: 0.75px;
            color: ${Cores.primary};
            text-decoration: none;
            font-weight: bold;
        }
    }

    @media (max-width: 768px) {
        max-width: 335px;
        width: 100%;
        margin: auto;
        padding: 60px 0; 

        .header {
            width: 335px;
            display: flex;
            padding: 0 10px;
            h2 { font-size:
                 16px; line-height: 24px;
                 }
            a { font-size: 14px;
                 line-height: 22px; }
        }
    }
`;

export const GradeProdutos = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        justify-items: center; 
    }
`;

export const ProductCard = styled.div`
  
    box-sizing: border-box;

    .image-container {
       
        background-color: ${Cores.white};
        border-radius: 4px;
        padding: 70px 20px;
        position: relative;
        display: flex;
        justify-content: center;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
       

        .tag-desconto {
            position: absolute;
            top: 15px;
            left: 15px;
            background-color: #E7FF86;
            padding: 5px 12px;
            border-radius: 15px;
            font-weight: bold;
            font-size: 12px;
        }

        img {
            width: 100%;
            height: auto;
        }
    }

    .categoria {
        font-size: 12px;
        line-height: 24px;
        letter-spacing: 0.75px;
        color: ${Cores.lightGray};
        margin-top: 15px;
        font-weight: bold;
    }

    .nome {
        font-size: 24px;
        width: 283px;
        height: 38px;
        line-height: 38px;
        color: ${Cores.darkGray2};
        margin: 5px 0;
        font-weight: 400;
    }

    .precos {
        .preco-antigo { 
            text-decoration: line-through;
            color: ${Cores.lightGray};
            margin-right: 10px; 
        }
        .preco-novo {
            font-weight: bold;
            color: ${Cores.darkGray};
            font-size: 24px; 
        }
    }

    @media (max-width: 768px) {
        
        width: 147px; 

        .image-container {
            width: 147px;      
            height: 161.6px;   
            padding: 20px;     
            box-sizing: border-box; 

            img { width: 100%;
                 height: auto;
                 }
        }

        .categoria {
            width: 35px;
            font-size: 12px;
            line-height: 24px;
        }

        .nome {
            font-size: 12px;
            width: 100%;     
            height: auto;  
            line-height: 22px;
        }

        .precos {
            .preco-novo { font-size: 16px; line-height: 24px; }
        }
    }
`;