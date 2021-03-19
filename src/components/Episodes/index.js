import React, {useState, useEffect} from 'react';
import {EpisodesContainer, EpisodesWrapper, TableContainer, EpisodeItem, EpisodeName, EpisodeTitle,EpisodeDate,EpisodesH1, NoEpisodesWrapper, NoEposidesH1} from './EpisodesElements';
import {useSelector, useDispatch} from 'react-redux';
import Pagination from '../Pagination/index';
import axios from 'axios';
import {setEpisodesCurrentItems, setEpisodesFilteredItems} from '../../redux/items/itemsActions';
import SearchFilter from '../SearchFilter';

const Episodes = ({currentPage, setCurrentPage, postsPerPage}) => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const episodes = useSelector(state => state.episodes.items)
    const currentEpisodes = useSelector((state) => state.episodes.currentItems);

    const setCurrent = () => {
        let indexOfLastPost = currentPage * postsPerPage;
        let indexOfFirstPost = indexOfLastPost - postsPerPage;
        let currentPosts = episodes.slice(indexOfFirstPost, indexOfLastPost);
        dispatch(setEpisodesCurrentItems(currentPosts));
    }

    useEffect(() => {
        setCurrent();
    }, [episodes, currentPage]);

    // ЗАГРУЖАЕТ ОБЪЕКТЫ КАЖДЫЙ РАЗ ПРИ ПЕРЕХОДЕ НА СТРАНИЦУ ДЛЯ КОТОРОЙ НЕТУ ОБЪЕКТОВ
    useEffect(() => {
        let indexOfLastPost = currentPage * postsPerPage;
        let indexOfFirstPost = indexOfLastPost - postsPerPage;
        let possiblePages = episodes.length / 10;

        if(name.length > 0){
            loadItems(currentPage, name);
        }
        if(episodes.length > 0 && typeof episodes[indexOfFirstPost] !== 'object'){
            if(episodes.length > 0 && currentPage >= possiblePages){
                let page = currentPage;
                if(page % 2 !== 0){
                    page = Math.ceil(page/2); // для нечетной страницы для которой нету объектов
                } else {
                    page = page/2;
                }
                loadItems(currentPage, name);
                return;
            }
        } 
    }, [currentPage, name]);

    const fetchWithFilter = (currentPage, name) => async (dispatch) => {
        let items;

        if(name.length === 0){
            items = await axios.get(`https://rickandmortyapi.com/api/episode/?page=${currentPage}`).then(res => res.data.results)
        }
        else if(name.length > 0) {
            items = await axios.get(`https://rickandmortyapi.com/api/episode/${name.length > 0 && `?name=${name}`}`).then(res => res.data.results)
        }
        dispatch(setEpisodesFilteredItems(items))
    } 

    const loadItems = (page, name) => {
        dispatch(fetchWithFilter(page, name));
    }

    const changePage = pageNumber => setCurrentPage(pageNumber);
    
    const handleName = (e) => {
        setName(e.target.value.toLowerCase());
    }

    return (
        <>
            <EpisodesContainer>
                <EpisodesWrapper>
                    
                    {currentEpisodes.length > 0 ? (
                        <EpisodesH1>All Episodes of Rick and Morty</EpisodesH1>

                    ): (
                        <EpisodesH1>Here is no episodes</EpisodesH1>
                    )}
                    <SearchFilter value={name} onChange={handleName}/>
                    <TableContainer>
                        {currentEpisodes.length > 0 && currentEpisodes.map(({id, name, air_date, episode}) => (
                            <EpisodeItem key={id}>
                                <EpisodeName>{name}</EpisodeName>
                                <EpisodeTitle>Episode: {episode}</EpisodeTitle>
                                <EpisodeDate>{air_date}</EpisodeDate>
                            </EpisodeItem>
                        ))}
                        
                    </TableContainer>
                    <Pagination
                        currentPage={currentPage}
                        postsPerPage={postsPerPage}
                        totalPosts={episodes.length}
                        changePage={changePage}
                    />
                </EpisodesWrapper>
            </EpisodesContainer>
        </>
    )
}

export default Episodes;
