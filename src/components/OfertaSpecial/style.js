import styled from "styled-components";
import { Cores } from "../../Cores";

export const ContainerOferta = styled.div`
    width: 100%;
    background-color: white;
    
`
   
export const ConteudoOferta = styled.div`
    max-width: 1440px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 60px;


    @media (max-width:768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 10px;

        
    }
   
    
   
   

    h2 {
        font-size: 48px;
        font-weight:bold;
        line-height: 50px;
        letter-spacing: 1px;
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
    }

    .imgOferta {
        flex: 1;
        width: 573px;
        height: 330px;
    }

    .informacoes-oferta {
        flex: 1;
        width: 589px;
        height: 341px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
    }

    button {
        width: 200px;
        height: 40px;
        font-size: 14px;
        font-weight: bold;
        border-radius: 8px;
        background-color:${Cores.primary};
        border: none;
        color: ${Cores.white};
        line-height: 22px;
        cursor: pointer;

        &:hover {
             background-color: #ab1b60;
        }
    }
`