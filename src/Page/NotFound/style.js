import styled from "styled-components";
import { Cores } from "../../Cores";

export const NotFoundContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${Cores.darkGray};
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        color: white;
        margin: 10px;
        text-decoration: none;
    }

    h6 {
        font-size: 24px;
    }

    span {
        font-size: 40px;
        margin-top: 10px;
    }


`