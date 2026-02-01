import styled from "styled-components";
import { Cores } from "../../Cores";

export const ContainerSection = styled.div`
    width: 100%;
    background-color: #e7e5e5ff;;
   
`
export const ContainerSecPrincipal = styled.div`
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 20px;
    padding-top: 200px;

    
    
`

export const ContainerHeader = styled.div`
    width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    justify-content:space-between;
    padding-top: 50px;
    margin-bottom: 50px;
    

    .ordem{
        font-size: 16px;
        font-weight: bold;
        line-height: 24px;
        width: 332px;
        height: 20px;
        border: 1px solid ${Cores.darkGray2};
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
            font-size: 16px;
            font-weight: 400;
            line-height: 28px; 
        }
    }

    .titulo {
        font-size: 16px;
        font-weight: bold;
        line-height: 24px;
        color: ${Cores.darkGray2};

        span {
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
        }
    }
`
export const SideBar = styled.div`
    display: flex;
    gap: 20px;
    


     .marcas {
        font-size: 14px;
        font-weight: 700;
        line-height: 22px;
        color: ${Cores.darkGray2};
        margin-top: 25px;
    }
   
   
`
export const SideBarE = styled.div`
    width: 308px;
    height: 720px;
    background-color: white;
    border-radius: 4px;
    padding: 10px;
     flex: 1;

    .filtro {
        font-size: 16px;
        font-weight: bold;
        line-height: 24px;
        color: ${Cores.darkGray2};
        padding-top: 10px;
        margin-bottom: 18px;
    }
    
    
`
export const SideBarD = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 100px;

    
      
`
export const SideCard = styled.div`
    
   
    .image-container {
        width: 292px;
        height: 321px;
        background-color: ${Cores.white};
        border-radius: 4px;
        padding: 50px 20px;
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
            
            height: auto; }
    }

    .categoria {
        font-size: 15px;
        color: ${Cores.lightGray};
        margin-top: 15px;
        font-weight: bold;
         line-height: 24px;
       
         }
    .nome {
        font-size: 24px;
        color: ${Cores.darkGray2};
        margin: 5px 0;
        font-weight: 400;
         line-height: 28px;
     }
    
    .precos {
        .preco-antigo { 
            text-decoration: line-through;
            color: ${Cores.lightGray};
            margin-right: 10px;
         }
        .preco-novo {
            font-weight: bold;
            color: ${Cores.darkGray};
            font-size: 24px; }
    }
`;

export const Chekbox = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 10px;
    accent-color: ${Cores.primary};

    
    

    input {
        width: 22px;
        height: 22px;
        color: ${Cores.darkGray2};

   
    }

    span {
        font-size: 14px;
        font-weight: 500;
        line-height: 22px;
        color: ${Cores.darkGray2};
    }

   
    
`