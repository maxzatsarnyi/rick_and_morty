import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Locations from '../components/Locations/index';
import {setLocationsItems} from '../redux/items/itemsActions';

const EpisodesPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);
    
    const dispatch = useDispatch();

    const loadLocations = () => async (dispatch) => {
        setIsLoading(true);
        // const items = await axios.get(`https://rickandmortyapi.com/api/episode`).then(res => res.data.results);
        const items = await axios.get(`https://rickandmortyapi.com/api/location/?page=${currentPage}`).then(res => res.data.results);
        dispatch(setLocationsItems(items));
        if(postsPerPage > items.length){
            let page = currentPage;
            page += 1;
            const addItems = await axios.get(`https://rickandmortyapi.com/api/location/?page=${page}`).then(res => res.data.results);
            dispatch(setLocationsItems(addItems));
        }
        setIsLoading(false);
    }

    const onLoad = () => {
        dispatch(loadLocations());
    }

    useEffect(() => {
        onLoad(currentPage);
    }, []);

    return (
        <>
            <Locations
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage}
                postsPerPage={postsPerPage}
            />
        </>
    )
}

export default EpisodesPage;
