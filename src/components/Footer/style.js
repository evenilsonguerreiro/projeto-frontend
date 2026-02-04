import styled from "styled-components";
import { Cores } from "../../Cores";

export const FooterContainer = styled.div`
    width: 100%;
    background-color: ${Cores.darkGray};
    padding: 60px 20px 20px; /* Reduzi o padding inferior */
    box-sizing: border-box;

    .barra {
        text-align: center;
        color: white;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            padding: 20px; /* Reduzi para não ocupar muito espaço no mobile */
            font-size: 13px;
        }
        
        span {
            border-top: 1px solid white; /* Use border-top em vez de border completo */
            width: 100%; /* Ocupa a largura disponível */
            max-width: 1200px; /* Mas não passa de 1200px */
            display: block;
            margin: 0 auto;
            opacity: 0.3; /* Deixa a linha mais sutil como no Figma */
        }
    }
`;

export const FooterContent = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    gap: 40px;

    /* A Mágica do Mobile */
    @media (max-width: 768px) {
        flex-direction: column;
        flex-wrap: wrap;
        gap: 40px;
    }

    .logo {
        display: flex;
        width: 170px;
        flex-direction: column;
        gap: 20px;
    }

    .descricao {
        max-width: 307px; /* Mudado de width para max-width */
        width: 100%;
        font-size: 14px;
        color: white;
        line-height: 26px;
        font-weight: 400;
    }

    .redes-sociais {
        width: 124px;
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        cursor: pointer;
    }
`;

export const FooterColuna = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    h4 {
        color: white;
        font-size: 18px;
        margin-bottom: 10px;
    }

   
    
    .contatos, .informacao {
        width: 100%;
        max-width: 231px;
        font-size: 16px;
        line-height: 26px;
        color: white;
        display: flex;
        flex-direction: column;
        gap: 15px;

        li, a {
            list-style: none;
            color: white;
            text-decoration: none;
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }
        
        ul {
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
    }
`;