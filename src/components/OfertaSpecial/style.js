import styled from "styled-components";
import { Cores } from "../../Cores";

export const ContainerOferta = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: white;
   
   
   
`
   
export const ConteudoOferta = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 60px 20px;
    gap: 10px;
    margin: 0 auto;
    background-color: white;
   
   
   


    @media (max-width:768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
       

        
    }
   

    h2 {
        font-size: 28px;
        font-weight:bold;
        line-height: 36px;
        letter-spacing: 1px;
    }
    span {
        font-size: 14px;
        color: ${Cores.primary};
        font-weight: bold;
        line-height: 22px;
    }
    p {
        font-size: 14px;
        line-height: 22px;
        color: ${Cores.lightGray};
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