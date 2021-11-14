import styled from "styled-components";

export const Container = styled.div`
    justify-content: center;
    align-items: center;
    flex: 1;
    text-align: center;
    display: flex;
    height: 100vh;
    flex-direction: column;
`;

export const Title = styled.h1``;

export const UsersList = styled.ol`
    flex-direction: column;
    overflow-y: scroll;
    max-height: 300px;
    min-width: 400px;
`;

export const UserWrapper = styled.li`
    flex-direction: row;
    text-align: left;
    margin-bottom: 20px;
`;
export const Name = styled.span`
    font-weight: bold;
`;
export const Username = styled.span`
    color: grey;
`;
