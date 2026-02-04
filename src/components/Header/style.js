import styled from "styled-components";
import { Cores } from "../../Cores"; 


export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${Cores.white};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
 


  @media (max-width:768px) {
    padding: 0;
  }
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
   
    

   
    .search-container {
        flex: 1; 
        display: flex;
        background-color: ${Cores.lightGray3};
        border-radius: 8px;
        padding: 10px 15px;  

        img {
            width: 24px;
            height: 24px;
            
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
`;
export const NavMenu = styled.nav`
    max-width: 1200px;
    margin: 20px auto ; 
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
`;