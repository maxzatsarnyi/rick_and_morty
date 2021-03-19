import styled from 'styled-components';

export const PaginationContainer = styled.div`
    height: 60px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`;

export const PaginationWrapper = styled.div`
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PaginationList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;  

export const PaginationItem = styled.li`
`;

export const PaginationLink = styled.a`
    text-decoration: none;
    color: black;
    cursor: pointer;
    font-size: 20px;    
    padding: 10px 20px;
    &:hover{
        color: #dfdfdf;
    }   
  
`;