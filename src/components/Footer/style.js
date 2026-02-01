import styled from "styled-components";
import { Cores } from "../../Cores";

export const FooterContainer = styled.div`
    width: 100%;
    background-color: ${Cores.darkGray};

    .barra {
        text-align: center;
        color: white;

        p {
           padding: 40px;
        }
       
       
       
        span {
             border: 2px solid white;
            width: 1440px;
            display: flex;
            margin: auto;
            margin-bottom: 10px;
           
        }
    }
`
export const FooterContent = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
  
    justify-content: space-between;
    padding: 70px 20px;

    .logo {
       
    }
    

    .descricao {
        width: 307px;
        font-size: 16px;
        color: white;
        line-height: 26px;
        font-weight: 400;

    }

    .redes-sociais {
        width: 124.14px;
        display: flex;
        justify-content: space-between;
        gap: 10px;
        cursor: pointer;
      
    }
   
`
export const FooterColuna = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
  
  
   h4 {
    color: white;
   }

   .contatos {
    width: 231px;
    font-size: 16px;
    line-height: 26px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;

    
   }

   .informacao {
    width:135px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
   
    li {
        list-style: none;    
    }
    ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    

   }
`