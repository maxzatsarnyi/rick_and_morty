import styled from 'styled-components';

export const CharactersContainer = styled.div`
    min-height: 1vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CharactersWrapper = styled.div`
    max-width: 1200px;
    margin: 40px auto 0;
    
`;

export const Filters = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CharactersItems = styled.ul`
    list-style: none;
    margin: 25px auto 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    align-items: center;
`;

export const CharacterItem = styled.li`
    max-width: 200px;
    height:240px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover{
        transition: 0.3s ease-in-out;
        transform: scale(1.05);
    }
`;

export const CharacterImage = styled.img`
    width: 100%;
    border-radius: 5px;

`;


export const CharacterName = styled.div`
    text-align: center;
    font-weight: 600;
`;

