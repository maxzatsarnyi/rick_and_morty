import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Episodes from '../components/Episodes/index';
import {setEpisodesItems} from '../redux/items/itemsActions';

const EpisodesPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(25);
    
    const dispatch = useDispatch();

    const loadEpisodes = () => async (dispatch) => {
        setIsLoading(true);
        // const items = await axios.get(`https://rickandmortyapi.com/api/episode`).then(res => res.data.results);
        const items = await axios.get(`https://rickandmortyapi.com/api/episode/?page=${currentPage}`).then(res => res.data.results);
        dispatch(setEpisodesItems(items));
        if(postsPerPage > items.length){
            let page = currentPage;
            page += 1;
            const addItems = await axios.get(`https://rickandmortyapi.com/api/episode/?page=${page}`).then(res => res.data.results);
            dispatch(setEpisodesItems(addItems));
        }
        setIsLoading(false);
    }

    const onLoad = () => {
        dispatch(loadEpisodes());
    }

    useEffect(() => {
        onLoad(currentPage);
    }, []);

    return (
        <>
            <Episodes
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage}
                postsPerPage={postsPerPage}
                />
        </>
    )
}

export default EpisodesPage;
