import styled from 'styled-components';

export const LocationsContainer = styled.div`
    min-height: 1vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LocationsWrapper = styled.div`
    max-width: 1200px;
    margin: 30px auto 0;
`;

export const LocationsH1 = styled.h1`
    text-align: center;
`;

export const Filters = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TableContainer = styled.ul`
    list-style: none;
    margin: 25px auto 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    align-items: center;
`;

export const LocationsItem = styled.li`
    
    max-width: 250px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover{
        transform: scale(1.2);
        transition: 0.5s ease-in-out;
    }

`;

export const LocationName = styled.div`
    font-weight: 700;
`;

export const LocationTitle = styled.div`
    margin-top: 3px;
`;

export const LocationDate = styled.div`
    margin-top: 3px;
 
`;

