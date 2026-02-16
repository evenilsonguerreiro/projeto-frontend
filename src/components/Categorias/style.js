import styled from "styled-components";
import { Cores } from "../../Cores";

export const SectionContainer = styled.section`
  max-width: 1200px;
  margin: auto;
  padding: 70px 20px;
  text-align: center;

  .title {
    font-size: 24px;
    color: ${Cores.darkGray2};
    margin-bottom: 30px;
    text-align: center;
  }

  @media (max-width: 768px) {
    max-width: 1200px;
    margin: auto;
    padding: 30px 20px;
    

    .title {
      font-size: 14px;
      display: flex;
      flex-direction: start;
      color: ${Cores.darkGray2};
      margin-bottom: 10px;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
 

  @media (max-width: 768px) {
    justify-content: flex-start;
    overflow-x: auto;
    padding: 10px 0;
    gap: 20px;
    width: 100vw; 
    max-width: 100%;
  }
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
    letter-spacing: 0.75px;
    color: ${Cores.darkGray2};
  }

  @media (max-width: 768px) {
    flex-shrink: 0;
    
    .circle {
      width: 70px;
      height: 70px;
      background-color: ${Cores.white};
      border-radius: 50%;
      display: flex;
      transition: 0.3s;
      justify-content: center;
      align-items: center;

      
    }

    span {
      width: auto;
      height: auto;
      font-size: 12px;
      font-weight: bold;
      line-height: 22px;
      letter-spacing: 1px;
      color: ${Cores.darkGray2};
    }
  }
`;
