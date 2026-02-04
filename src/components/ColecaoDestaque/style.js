import styled from "styled-components";
import { Cores } from "../../Cores";

export const SectionContainer = styled.section`
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    overflow-x: hidden; 
    
    h2 {
        font-size: 16px;
        color: ${Cores.darkGray2};
        margin-bottom: 20px;
        margin-left: 15px;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 70px 20px;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center; 
        padding: 40px 20px;
    }
`;

export const Card = styled.div`
    flex: 1;
    background-color: #D8E3F2; 
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    overflow: hidden; 
    min-height: 250px;
    width: 100%;
    box-sizing: border-box; 

    @media (max-width: 768px) {
        flex: none; 
        width: 100%; 
        min-height: 200px;

        .content {
            margin-left: 15px; 
            margin-bottom: 20px;
            
            h3 {
                font-size: 28px;
                max-width: 150px; 
                line-height: 1.2;
            }
        }

        img {
            width: 45%; 
            max-width: 160px;
            height: auto;
            object-fit: contain;
        }
    }

 
    .content {
        display: flex;
        flex-direction: column;
        margin-bottom: 35px;
        z-index: 2;
        margin-left: 25px;

        .discount {
            width: 96px;
            height: 32px;
            background-color: #E7FF86;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 20px;
            font-weight: bold;
            font-size: 14px;
            margin-top: 15px;
            margin-bottom: 10px;
        }

        h3 {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 20px;
            color: ${Cores.darkGray};
        }

        button {
            width: 153px;
            height: 48px;
            background-color: ${Cores.white};
            color: ${Cores.primary};
            border: none;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
        }
    }

    img {
        max-width: 400px; 
        height: auto;
    }
`;