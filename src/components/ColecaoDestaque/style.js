import styled from "styled-components";
import { Cores } from "../../Cores";

export const SectionContainer = styled.section`
    max-width: 1440px;
    margin: 40px auto;
    
    h2 {
        font-size: 24px;
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


    
     @media (max-width: 768px) {
        flex-direction: column;
    

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



     @media (max-width: 768px) {
       
    

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
            padding: 10px 20px;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.75;
        }
    }

    img {
        max-width: 400px; 
        height: auto;
    }





   

   
`;