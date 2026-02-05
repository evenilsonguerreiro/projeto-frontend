import styled from "styled-components";
import { Cores } from "../../Cores";

export const SectionProdutos = styled.section`
    max-width: 1200px;
    margin:  auto;
    padding: 60px 20px;
   

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;

        h2 {
             font-size: 24px;
              color: ${Cores.darkGray2};
             }
        a { 
            color: ${Cores.primary};
            text-decoration: none;
            font-weight: bold;
         }
    }

    @media (max-width: 768px) {
         .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;

        h2 {
             font-size: 16px;
              color: ${Cores.darkGray2};
             }
        a { 
            color: ${Cores.primary};
            text-decoration: none;
            font-weight: bold;
         }
    }
    }
`;

export const GradeProdutos = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    
    
   @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;

   
   }
    

`;

export const ProductCard = styled.div`
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
            height: auto; }
    }

    .categoria {
        font-size: 15px;
        color: ${Cores.lightGray};
        margin-top: 15px;
        font-weight: bold;
         }
    .nome {
        font-size: 24px;
        color: ${Cores.darkGray2};
        margin: 5px 0;
        font-weight: 400; }
    
    .precos {
        .preco-antigo { 
            text-decoration: line-through;
            color: ${Cores.lightGray};
            margin-right: 10px; }
        .preco-novo {
            font-weight: bold;
            color: ${Cores.darkGray};
            font-size: 24px; }
    }

    
        
    @media (max-width: 768px) {
        .image-container {
            width: 163px;
            height: 179px;
            background-color: ${Cores.white};
            border-radius: 4px;
            padding: 30px 10px;
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
            height: auto; }
    }
        .precos {
        .preco-antigo { 
            text-decoration: line-through;
            color: ${Cores.lightGray};
            margin-right: 10px; }
            font-size: 16px;
        .preco-novo {
            font-weight: bold;
            color: ${Cores.darkGray};
            font-size: 16px; }
    }

    .nome {
        font-size: 14px;
        color: ${Cores.darkGray2};
        margin: 5px 0;
        font-weight: 400;
     }

      .categoria {
        font-size: 12px;
        color: ${Cores.lightGray};
        margin-top: 15px;
        font-weight: bold;
         }


    }

    
`;