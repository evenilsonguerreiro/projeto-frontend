import styled from "styled-components";
import { Cores } from "../../Cores";

export const SectionProdutos = styled.section`
  max-width: 1200px;
  margin: auto;
  padding: 60px 20px;
 

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    h2 {
      font-size: 24px;
      line-height: 38px;
      color: ${Cores.darkGray2};
      letter-spacing: 0.75px;
    }
    a {
      font-size: 18px;
      line-height: 34px;
      letter-spacing: 0.75px;
      color: ${Cores.primary};
      text-decoration: none;
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    max-width: 100;
    width: 100%;
    margin: auto;
    padding: 60px 0;

    .header {
      width: 335px;
      display: flex;
      margin: auto;
      padding: 0 14px;
      margin-bottom: 10px;
      
      h2 {
        font-size: 16px;
        line-height: 24px;
      }
      a {
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
`;

export const GradeProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
   

  @media (max-width: 768px) {
    width: 335px;
    margin: auto;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 0 10px;
    justify-items: center;
    
   
  
   
  }
`;

 