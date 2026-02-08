import styled from "styled-components";
import { Cores } from "../../Cores";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${Cores.white};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding: 60px 20px;
  box-sizing: border-box;

  .menu {
    display: none;
  }

  .container {
    flex: 1;
    display: flex;
    background-color: ${Cores.lightGray3};
    border-radius: 8px;
    padding: 10px 15px;

    button {
      background-color: transparent;
      border: none;
    }

    img {
      width: 24px;
      height: 24px;
    }

    .lupa {
      width: 20px;
      height: 20px;
    }

    input {
      border: none;
      background: transparent;
      width: 100%;
      outline: none;
      font-size: 16px;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 20px;

    a {
      color: ${Cores.darkGray2};
      text-decoration: underline;
    }

    .btn-entrar {
      background-color: ${Cores.primary};
      color: ${Cores.white};
      border-radius: 8px;
      font-weight: bold;
      border: none;
      width: 140px;
      height: 40px;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;

    .logo {
      display: flex;
      justify-content: center;

      div {
        img {
          width: 138px;
          height: 24px;
          margin-left: 65px;
        }
      }
    }

    .menu {
      display: block;
      width: 24px;
      height: 24px;
      cursor: pointer;
    }

    .container {
      flex: 1;
      display: flex;
      border-radius: 8px;
      padding: 10px 15px;
      background-color: transparent;
      position: relative;

      button {
        background-color: transparent;
        border: none;
      }

      .lupa {
        width: 20px;
        height: 20px;
        border: none;
        position: absolute;
        top: 0px;
        left: 30px;
      }

      input {
        border: none;
        background: transparent;
        width: 100%;
        outline: none;
        font-size: 16px;
        display: none;
      }
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 20px;

      .cadastro {
        display: none;
      }

      .imput {
        display: none;
      }

      a {
        color: ${Cores.darkGray2};
        text-decoration: underline;
      }

      .btn-entrar {
        background-color: ${Cores.primary};
        color: ${Cores.white};
        border-radius: 8px;
        font-weight: bold;
        border: none;
        width: 140px;
        height: 40px;
        cursor: pointer;
        display: none;
      }
    }
  }
`;
export const NavMenu = styled.nav`
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;

  ul {
    display: flex;
    gap: 30px;
    list-style: none;

    li a {
      font-size: 16px;
      color: ${Cores.darkGray2};
      font-weight: 400;
      text-decoration: none;
      transition: 0.3s;
      position: relative;
      text-decoration: none;

      &:hover {
        color: ${Cores.primary};
      }

      &.active {
        color: ${Cores.primary};
        font-weight: bold;

        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background-color: ${Cores.primary};
          position: absolute;
          bottom: -5px;
          left: 0;
        }
      }
    }
  }

  @media (max-width: 768px) {
    margin: 20px auto;
    padding: 0 20px;
    display: none;

    &.aberto {
      display: flex;
    }

    ul {
      display: flex;
      gap: 30px;
      list-style: none;

      li a {
        font-size: 14px;
        color: ${Cores.darkGray2};
        font-weight: 400;
        text-decoration: none;
        transition: 0.3s;
        position: relative;
        text-decoration: none;
        display: block;

        &:hover {
          color: ${Cores.primary};
        }

        &.active {
          color: ${Cores.primary};
          font-weight: bold;

          &::after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background-color: ${Cores.primary};
            position: absolute;
            bottom: -5px;
            left: 0;
          }
        }
      }
    }
  }
`;
