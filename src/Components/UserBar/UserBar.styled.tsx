import styled from "styled-components";

export const UserWrapper = styled.li`
    cursor: pointer;
    flex-direction: row;
    text-align: left;
    margin-bottom: 20px;
    &:hover {
        color: blue;
        font-size: 18px;
    }
`;
export const Name = styled.span`
    font-weight: bold;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;
export const Username = styled.span`
    color: grey;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;
export const CloseButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    position: absolute;
    right: 20px;
    font-size: 20px;
    border: solid black 2px;
    border-radius: 50%;

    &:hover {
        color: blue;
        border-color: blue;
    }
`;
