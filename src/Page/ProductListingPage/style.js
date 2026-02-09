import styled from "styled-components";
import { Cores } from "../../Cores";

export const ContainerSection = styled.div`
  width: 100%;
  background-color: #e7e5e5ff;
`;
export const ContainerSecPrincipal = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 20px;
  padding: 60px 20px;
`;

export const ContainerHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;

  .filtro {
    display: none;
  }

  .ordem {
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    width: 332px;
    height: 60px;
    border: 1px solid ${Cores.darkGray2};
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

  @media (max-width: 768px) {
    width: 335;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    padding: 0 10px;

    .filtro {
      display: block;
      width: 60px;
      height: 60px;
    }

    .moblie {
      display: flex;
      gap: 5px;
    }

    .ordem {
      font-size: 13px;
      font-weight: bold;
      line-height: 28px;
      width: 265px;
      height: 60px;
      border: 1px solid ${Cores.darkGray2};
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;

      span {
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
      }
    }

    .titulo {
      font-size: 14px;
      font-weight: bold;
      line-height: 22px;
      color: ${Cores.darkGray2};
      width: 330px;

      span {
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
      }
    }
  }
`;
export const SideBar = styled.div`
  display: flex;
  gap: 10px;
 

  .image-container {
    width: 163px;
    height: 179.19px;
    margin: auto;
    background-color: ${Cores.white};
    border-radius: 4px;
    padding: 30px 20px;
    position: relative;
    display: flex;
    justify-content: center;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  }
  .marcas {
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    color: ${Cores.darkGray2};
    margin-top: 25px;
  }
`;
export const SideBarE = styled.div`
  width: 308px;
  height: 720px;
  background-color: white;
  border-radius: 4px;
  padding: 0 10px;

  .filtro {
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    color: ${Cores.darkGray2};
    padding-top: 10px;
    margin-bottom: 18px;
  }

  @media (max-width: 768px) {
    display: none;

    &.sidebarAberto {
      display: block;
      position: fixed;
      top: 80px;
      left: 0;
      width: 308px;
      height: 100%;
      background-color: white;
      z-index: 1000;
      padding: 20px;
      box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
    }

    &.sidebarFechado {
      display: none;
    }
  }
`;
export const SideBarD = styled.div`
  width: 904px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  flex: 1;
 

  .image-container {
    width: 292px;
    height: 321px;
    background-color: ${Cores.white};
    border-radius: 4px;
    padding: 30px 20px;
    position: relative;
    display: flex;
    justify-content: center;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 768px) {
    width: 335px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
   
    

      .image-container {
    width: 163px;
    height: 179.19px;
    background-color: ${Cores.white};
    border-radius: 4px;
    padding: 30px 20px;
    position: relative;
    display: flex;
    justify-content: center;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  }
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
`;
export const Overlay = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;
