import styled from "styled-components";
import { Cores } from "../../Cores";

export const FooterContainer = styled.div`
  width: 100%;
  background-color: ${Cores.darkGray};

  .barra {
    text-align: center;
    color: ${Cores.white};

    p {
      padding: 20px;
    }

    span {
      border: 2px solid white;
      width: 100%;
      max-width: 1200px;
      display: flex;
      margin: auto;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 768px) {
    .barra {
      text-align: center;
      color: white;

      p {
        padding: 20px;
      }

      span {
        border: 1px solid ${Cores.white};
        width: 335px;
        max-width: 1200px;
        display: flex;
        margin: auto;
        margin-bottom: 10px;
      }
    }
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 60px 20px;
  margin: auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 40px 0;

    .logo {
      img {
        width: 170px;
      }
    }
  }

  .descricao {
    width: 307px;
    height: 78px;
    font-size: 14px;
    color: ${Cores.white};
    line-height: 26px;
    letter-spacing: 0%;
    font-weight: 400;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .redes-sociais {
    width: 124.14px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    cursor: pointer;
  }
`;

export const FooterColuna = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h4 {
    color: ${Cores.white};
    font-size: 18px;
  }

  .contatos {
    width: 231px;
    font-size: 16px;
    line-height: 26px;
    color: ${Cores.white};
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .informacao {
    width: 135px;
    color: ${Cores.white};
    display: flex;
    flex-direction: column;
    gap: 20px;

    li {
      list-style: none;
      font-size: 16px;
      line-height: 31px;
      letter-spacing: 0%;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;

    h4 {
      color: ${Cores.white};
      font-size: 18px;
      line-height: 100%;
      letter-spacing: 0%;
    }

    .contatos {
      width: 231px;
      font-size: 16px;
      line-height: 26px;
      color: ${Cores.white};
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .informacao {
      width: 135px;
      color: ${Cores.white};
      display: flex;
      flex-direction: column;
      gap: 20px;

      li {
        list-style: none;
        font-size: 16px;
        line-height: 31px;
        letter-spacing: 0%;
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
    }
  }
`;
