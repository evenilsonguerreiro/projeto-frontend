import styled from "styled-components";
import { Cores } from "../../Cores";

export const SectionContainer = styled.section`
    max-width: 1440px;
    margin: 60px auto;
    padding: 70px 20px;
    text-align: center;
    
    

    .title {
        font-size: 24px;
        color: ${Cores.darkGray2};
        margin-bottom: 30px;
        text-align: center; 
    }
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px; /* Espaço entre cada item */
   
`;

export const IconItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    cursor: pointer;

    .circle {
        width: 104px;
        height: 104px;
        background-color: ${Cores.white};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s;

        img {
            width: 50px;
            height: auto;
        }

        &:hover {
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
            span {
                color: ${Cores.primary};
            }
        }
    }

    span {
        width: 79px;
        height: 22px;
        font-size: 14px;
        font-weight: bold;
        line-height: 22px;
        color: ${Cores.darkGray2};
    }
`;