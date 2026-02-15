import styled from "styled-components";
import { Cores } from "../../Cores";

export const BuyBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
`;

export const Title = styled.h1`
  font-size: 32px;
  width: 440px;
  font-weight: 800;
  color: ${Cores.darkGray};
  margin-bottom: 10px;
  line-height: 36px;
  letter-spacing: 1px;

 

  @media (max-width: 768px) {
    width: 333px;
    height: 60px;
    font-size: 24px;
    font-weight: 800;
    color: ${Cores.darkGray};
    margin-bottom: 10px;
    line-height: 32px;
    letter-spacing: 1px;
    

 
  }
`;

export const Reference = styled.span`
  font-size: 12px;
  color: ${Cores.lightGray};
  margin-bottom: 20px;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

export const ActualPrice = styled.span`
  font-size: 32px;
  font-weight: bold;
  color: ${Cores.darkGray2};

  &::before {
    content: "R$ ";
    font-size: 18px;
  }
`;

export const OldPrice = styled.del`
  font-size: 16px;
  color: #cccccc;
`;

export const DescriptionTitle = styled.h3`
  font-size: 14px;
  color: ${Cores.lightGray};
  line-height: 22px;
  letter-spacing: 0.75px;
  margin-bottom: 10px;
`;

export const DescriptionText = styled.p`
  font-size: 14px;
  color: ${Cores.lightGray2};
  line-height: 22px;
  letter-spacing: 0.25px;
  margin-bottom: 30px;
`;

export const BuyButton = styled.button`
  width: 250px;
  height: 48px;
  background-color: #f6aa1c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #e59800;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 48px;
    background-color: #f6aa1c;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    margin-top: 10px;
  }
`;
export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Stars = styled.div`
  color: #f6aa1c;
  font-size: 14px;

  .gray {
    color: #cccccc;
  }
`;

export const RatingValue = styled.span`
  background-color: #f6aa1c;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
`;

export const ReviewsCount = styled.span`
  color: ${Cores.lightGray};
  font-size: 12px;
`;
