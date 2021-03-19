import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {fetchCharacters} from '../services/articles-api';
import Characters from '../components/Characters/index';
import Loader from '../components/Loader/index';
import {setItems} from '../redux/items/itemsActions';

const CharactersPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    // грузит объкты персонажей с API 
    const loadItems = (currentPage) => async (dispatch) => {
        setIsLoading(true);
        const items = await axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`).then(res => res.data.results)
        dispatch(setItems(items))
        setIsLoading(false);
    } 

    const onLoad = (page) => {
        dispatch(loadItems(page));
    }

    useEffect(() => {
        onLoad(currentPage);
    }, []);
    return (
        <>
            <Loader isLoading={isLoading}/>
            <Characters 
                // onLoad={onLoad}
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage}
                postsPerPage={postsPerPage}
            />
        </>
    )
}

export default CharactersPage;
