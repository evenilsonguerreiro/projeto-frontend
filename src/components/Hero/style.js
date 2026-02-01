import styled from "styled-components";
import { Cores } from "../../Cores";

export const HeroContainer = styled.section`
    width: 100%;
    padding: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${Cores.lightGray3};
    
   
`;

export const TituloContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
   
   

     h1 {
        font-size: 64px;
        line-height: 66px;
        color: ${Cores.darkGray};
        margin-bottom: 20px;
        font-weight: 800;
        letter-spacing: 1px;
       
    }

    img {
        width: 40px;
        margin-right: 150px;
        margin-top: 55px;
       
           
    }
   
`


export const HeroContent = styled.div`
    max-width: 1440px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 100px;
    padding: 70px 20px;
    position: relative;


        .esquerda {
            position: absolute;
            top: 50%;
            left: 50%;
            cursor: pointer;
        }

        .direita {
            cursor: pointer;
        }
    
    


    @media (max-width: 768px) {
    flex-direction:column-reverse;
    margin-top: 40px;
    gap: 32px;
  }

`;


export const HeroTexto = styled.div`
    flex: 1;

    .subtitle {
        color: ${Cores.warning};
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 20px;
        
        
    }

   
    .description {
        font-size: 18px;
        color: ${Cores.darkGray2};
        margin-bottom: 40px;
        max-width: 495px;
        height: 68px;
        line-height: 34px;
        letter-spacing: 0.75;
        font-weight: 400;
    }

    .btn-ofertas {
        width: 220px;
        height: 48px;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.75;
        background-color: ${Cores.primary};
        color: ${Cores.white};
        border-radius: 8px;
        font-weight: bold;
        border: none;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            background-color: #ab1b60;
        }
    }

    @media (max-width: 768px) {
    
        h1 {
            font-size: 38px;
            width: 297px;
            height: 100px;
            line-height: 50px;
            text-align: center;
           
            
        }
        .btn-ofertas {
            width: 100%;
            padding: 0;
        }

        p {
            text-align: center;
        }

        
  }
`;


export const HeroImagem = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
   

    .tenishero {
        width: 100%
    }

    @media (max-width:768px) {
        .tenishero {
           
        }
    }
 
`;


export const Indicadores = styled.div`
    display: flex;
    gap: 8px;
   
    

    span {
         width: 10px;
        height: 10px;
        background-color: ${Cores.lightGray2};
        border-radius: 50%;
        cursor: pointer;

        &.active {
            background-color: ${Cores.primary};
        }
    }

    @media (max-width:768px) {
      span {
        width: 10px;
        height: 10px;
        background-color: ${Cores.lightGray2};
        border-radius: 50%;
        cursor: pointer;

        &.active {
            background-color: ${Cores.primary};
        }
    }
    }
`;