import styled from "styled-components";
import { Cores } from "../../Cores";

export const SectionContainer = styled.section`
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    overflow-x: hidden; 
    
    h2 {
        font-size: 24px;
        line-height: 38px;
        letter-spacing: 0.75;
        font-weight: 700;
        color: ${Cores.darkGray2};
        margin-left: 15px;
    }


    @media (max-width: 768px) {
         width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    overflow-x: hidden; 
    
    h2 {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.75;
        font-weight: 700;
        color: ${Cores.darkGray2};
        margin-left: 15px;
    }

    }
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 40px 20px;
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
            width: 172px;
            height: 72px;
            line-height: 36px;
            letter-spacing:1px;
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

     @media (max-width: 768px) {
        flex: none; 
        width: 100%; 
        min-height: 200px;

        .content {
            margin-left: 15px; 
            margin-bottom: 20px;
            
            h3 {
                width: 194px;
                height: 72px;
                font-size: 24px;
                line-height:36px;
                letter-spacing: 2px;
                font-weight: bold;
                max-width: 150px;
               
               
            }
        }

        img {
            width: 45%; 
            max-width: 160px;
            height: auto;
            object-fit: contain;
        }
    }
`;