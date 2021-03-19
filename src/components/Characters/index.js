import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CharacterModal from '../CharacterModal/index';
import {CharactersContainer, Filters, CharactersWrapper, CharactersItems, CharacterItem, CharacterImage, CharacterName } from './CharactersElemens'
import Pagination from '../Pagination/index';
import {setCurrentItems} from '../../redux/items/itemsActions';
import SelectFilter from '../SelectFilter';
import axios from 'axios';

import {setFilteredItems} from '../../redux/items/itemsActions';

const speciesOptions = [
    {
      value: 'human',
      label: 'Human',
    },
    {
      value: 'alien ',
      label: 'Alien ',
    },
  ];

const statusOptions = [
    {
      value: 'alive',
      label: 'Alive',
    },
    {
      value: 'dead ',
      label: 'Dead ',
    },
    {
      value: 'unknown',
      label: 'Unknown',
    },
  ];

const genderOptions = [
    {
        value: 'female',
        label: 'Female',
    },
    {
        value: 'male ',
        label: 'Male ',
    },
    {
        value: 'genderless',
        label: 'Genderless',
    },
    {
        value: 'unknown',
        label: 'Unknown',
    },
];
  
const Characters = ({ currentPage, setCurrentPage, postsPerPage}) => {
    //MODAL
    const [showModal, setShowModal] = useState(false);
    const [modalInfo, setInfoModal] = useState({});

    const [species, setSpecies] = useState(null);
    const [status, setStatus] = useState(null);
    const [gender, setGender] = useState(null);

    // ITEMS
    const items = useSelector((state) => state.characters.items);
    const currentItems = useSelector((state) => state.characters.currentItems);
    const dispatch = useDispatch();

    const openModal = () => {
        setShowModal(!showModal);
    };
    
    // находит currentItems из items (10 объектов)
    const setCurrent = () => {
        let indexOfLastPost = currentPage * postsPerPage;
        let indexOfFirstPost = indexOfLastPost - postsPerPage;
        let currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);
        dispatch(setCurrentItems(currentPosts));
    }

    useEffect(() => {
        setCurrent();
    }, [items, currentPage]);

    // ЗАГРУЖАЕТ ОБЪЕКТЫ КАЖДЫЙ РАЗ ПРИ ПЕРЕХОДЕ НА СТРАНИЦУ ДЛЯ КОТОРОЙ НЕТУ ОБЪЕКТОВ
    useEffect(() => {
        let indexOfLastPost = currentPage * postsPerPage;
        let indexOfFirstPost = indexOfLastPost - postsPerPage;
        let possiblePages = items.length / 10;

        
        if(species === null || status === null || gender === null){
            loadItems(currentPage, species, status, gender);
            return;
        }

        if(species !== null || status !== null || gender !== null){
            loadItems(currentPage, species, status, gender);
        }
        if(items.length > 0 && typeof items[indexOfFirstPost] !== 'object'){
            if(items.length > 0 && currentPage >= possiblePages){
                let page = currentPage;
                if(page % 2 !== 0){
                    page = Math.ceil(page/2); // для нечетной страницы для которой нету объектов
                } else {
                    page = page/2;
                }
                loadItems(currentPage, species, status, gender);
                return;
            }
        } 
    }, [currentPage, species, status, gender]);

    const fetchWithFilter = (currentPage, species, status, gender) => async (dispatch) => {
        let query = ``
        if(species!== null){
            query += `&species=${species}`;
        }
        if(status!== null){
            query += `&status=${status}`;
        }
        if(gender!== null){
            query += `&gender=${gender}`;
        }
        query = query.replace(/\s/g, '');

        let items = await axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}${query}`).then(res => res.data.results)
        dispatch(setFilteredItems(items))
    } 

    const loadItems = (page, species, status, gender) => {
        dispatch(fetchWithFilter(page, species, status, gender));
    }

    // ИЗМЕНЯЕТ currentPage ПРИ ПЕРЕХОДЕ ПО НОМЕРУ СТРАНИЦЫ 
    const changePage = pageNumber => setCurrentPage(pageNumber);

    const handleSpecies = (e) => {
        if(e === null){
            setSpecies(null)
            return;
        }
        setSpecies(e.value)
    }
    const handleStatus = (e) => {
        if(e === null){
            setStatus(null)
            return;
        }
        setStatus(e.value)
    }

    const handleGender = (e) => {
        if(e === null){
            setGender(null)
            return;
        }
        setGender(e.value)
    }
    return (
        <>
            <CharactersContainer>
                <CharactersWrapper>

                    <Filters>
                        <SelectFilter  
                            text={'species'}
                            options={speciesOptions}
                            onChange={handleSpecies}
                            />
                        <SelectFilter  
                            text={'status'}
                            options={statusOptions}
                            onChange={handleStatus}
                        />
                        
                        <SelectFilter  
                            text={'gender'}
                            options={genderOptions}
                            onChange={handleGender}
                        />
                    </Filters>
                   
                    <CharactersItems>
                        {currentItems.length > 0 && currentItems.map(({id, image, name, gender, species, status, origin, location}) => (
                            <CharacterItem onClick={() => {
                                setInfoModal({name, image, name, gender, species, status, origin:origin.name, location: location.name,
                                })
                                openModal()
                                }} key={id}>
                                <CharacterImage src={`${image}`}/>
                                <CharacterName>{name}</CharacterName>
                            </CharacterItem>
                        ))
                        }
                    <CharacterModal modalInfo={modalInfo} showModal={showModal} setShowModal={setShowModal}></CharacterModal>

                    </CharactersItems>
                    <Pagination
                        currentPage={currentPage}
                        postsPerPage={postsPerPage}
                        totalPosts={items.length}
                        changePage={changePage}
                        />
                </CharactersWrapper>
            </CharactersContainer>
        </>
    )
}

export default Characters;
