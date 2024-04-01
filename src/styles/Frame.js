import styled from "styled-components";
import {keyframes} from "styled-components";

export const ContentBoxFrame = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
`;

const size = keyframes`
0%{
    background-position: 0 50%;
}
50%{
    background-position: 100 50%;
}
100%{
    background-position: 0 50%;
}

`;