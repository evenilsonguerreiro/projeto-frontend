import styled from "styled-components";
import { Cores } from "../../Cores";

export const ContainerOferta = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: white;
`;

export const ConteudoOferta = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 60px 20px;
    gap: 60px;
    margin: 0 auto;
    background-color: white;

    
    h2 {
        font-size: 48px; 
        font-weight: bold;
        line-height: 50px;
        letter-spacing: 1px;
        color: ${Cores.darkGray};
    }

    span {
        font-size: 14px;
        color: ${Cores.primary};
        font-weight: bold;
        line-height: 22px;
    }

    p {
        font-size: 16px;
        line-height: 28px;
        color: ${Cores.lightGray};
        margin-bottom: 10px;
    }

    .imgOferta {
        flex: 1;
        max-width: 573px;
        height: auto;
        img {
            width: 100%;
            height: auto;
        }
    }

    .informacoes-oferta {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        align-items: flex-start; 
    }

    button {
        width: 200px;
        height: 48px;
        font-size: 16px;
        font-weight: bold;
        border-radius: 8px;
        background-color: ${Cores.primary};
        border: none;
        color: ${Cores.white};
        line-height: 22px;
        cursor: pointer;

        &:hover {
            background-color: #ab1b60;
        }
    }

  
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start; 
        padding: 40px 20px;
        gap: 20px;

        h2 {
            font-size: 28px; 
            line-height: 36px;
        }

        p {
            font-size: 14px;
            line-height: 22px;
        }

        .imgOferta {
            width: 100%;
            max-width: 100%;
        }

        .informacoes-oferta {
            width: 100%;
            align-items: flex-start; 
        }

        button {
            width: 200px;
            height: 40px;
        }
    }
`;