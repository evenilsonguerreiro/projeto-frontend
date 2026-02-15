import styled from "styled-components";
import { Cores } from "../../Cores";

export const OpitionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${Cores.lightGray};
`;

export const OpitionList = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  padding: 0;
`;

export const OpitionItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s;
  font-weight: bold;
  border: 1px solid ${props => (props.isSelected ? "#C92071" : "#CCCCCC")};
  margin-bottom: 20px;
  
 
  width: ${props => (props.shape === "circle" ? "30px" : "45px")};
  height: ${props => (props.shape === "circle" ? "30px" : "45px")};
  border-radius: ${props => (props.shape === "circle" ? "50%" : "4px")};

 
  background-color: ${props => {
    if (props.type === "color") return props.value;
    return props.isSelected ? "#C92071" : "transparent";
  }};

  color: ${props => (props.isSelected ? "white" : "#474747")};

  &:hover {
    border-color: #C92071;
  }
`;