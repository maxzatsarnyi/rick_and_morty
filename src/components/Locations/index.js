import React, {useState, useEffect} from 'react';
import {LocationsContainer, LocationsWrapper, Filters, TableContainer, LocationsItem, LocationName, LocationTitle,LocationDate,LocationsH1} from './LocationsElements';
import {useSelector, useDispatch} from 'react-redux';
import Pagination from '../Pagination/index';
import axios from 'axios';
import {setLocationsCurrentItems, setLocationsFilteredItems} from '../../redux/items/itemsActions';
import SearchFilter from '../SearchFilter';
import SelectFilter from '../SelectFilter/index';

const typeOptions = [
    {
      value: 'planet',
      label: 'Planet',
    },
    {
      value: 'cluster',
      label: 'Cluster',
    },
    {
        value: 'space station',
        label: 'Space station',
      },
      {
        value: 'resort',
        label: 'Resort',
      },
      {
        value: 'microverse',
        label: 'Microverse',
      },
      {
        value: 'tv',
        label: 'TV',
      },
      {
        value: 'fantasy town',
        label: 'Fantasy town',
      },
      {
        value: 'dream',
        label: 'Dream',
      },
  ];
  const dimensionOptions = [
    {
      value: 'dimension c-137',
      label: 'Dimension C-137',
    },
    {
      value: 'post-apocalyptic dimension',
      label: 'Post-Apocalyptic Dimension ',
    },
    {
        value: 'cronenberg dimension',
        label: 'Cronenberg Dimension',
      },
      {
        value: 'replacement dimension ',
        label: 'Replacement Dimension ',
      },
      {
        value: 'dimension c-137',
        label: 'Dimension C-137',
      },
      {
        value: 'dimension 5-126',
        label: 'Dimension 5-126 ',
      },
  ];
  
const Locations = ({currentPage, setCurrentPage, postsPerPage}) => {
    const [name, setName] = useState('');
    const [type, setType] = useState(null);
    const [dimension, setDimension] = useState(null);

    const dispatch = useDispatch();

    const locations = useSelector(state => state.locations.items)
    const currentLocations = useSelector((state) => state.locations.currentItems);

    const setCurrent = () => {
        let indexOfLastPost = currentPage * postsPerPage;
        let indexOfFirstPost = indexOfLastPost - postsPerPage;
        let currentPosts = locations.slice(indexOfFirstPost, indexOfLastPost);
        dispatch(setLocationsCurrentItems(currentPosts));
    }

    useEffect(() => {
        setCurrent();
    }, [locations, currentPage]);

    // ЗАГРУЖАЕТ ОБЪЕКТЫ КАЖДЫЙ РАЗ ПРИ ПЕРЕХОДЕ НА СТРАНИЦУ ДЛЯ КОТОРОЙ НЕТУ ОБЪЕКТОВ
    useEffect(() => {
        let indexOfLastPost = currentPage * postsPerPage;
        let indexOfFirstPost = indexOfLastPost - postsPerPage;
        let possiblePages = locations.length / 10;
        

        if(name.legth === 0 || type === null || dimension === null){
            loadItems(currentPage, name, type, dimension);
            return;
        }

        if(name.legth > 0 || type !== null || dimension !== null){
            loadItems(currentPage, name, type, dimension);
        }

        if(locations.length > 0 && typeof locations[indexOfFirstPost] !== 'object'){
            if(locations.length > 0 && currentPage >= possiblePages){
                let page = currentPage;
                if(page % 2 !== 0){
                    page = Math.ceil(page/2); // для нечетной страницы для которой нету объектов
                } else {
                    page = page/2;
                }
                loadItems(currentPage, name, type, dimension);
                return;
            }
        } 
    }, [currentPage, name, type, dimension]);

    const fetchWithFilter = (currentPage, name, type, dimension) => async (dispatch) => {
        let items;
        let query = ``

        // if(name.length === 0){
        //     items = await axios.get(`https://rickandmortyapi.com/api/episode/?page=${currentPage}`).then(res => res.data.results)
        // }
        // else if(name.length > 0) {
        //     items = await axios.get(`https://rickandmortyapi.com/api/episode/${name.length > 0 && `?name=${name}`}`).then(res => res.data.results)
        // }

        if(name.length > 0){
            query += `&name=${name}`;
        }
        if(type !== null){
            query += `&type=${type}`;
        }
        if(dimension!== null){
            query += `&dimension=${dimension}`;
        }
        // query = query.replace(/\s/g, '');

        // console.log(query)
        items = await axios.get(`https://rickandmortyapi.com/api/location/?page=${currentPage}${query}`).then(res => res.data.results)

        dispatch(setLocationsFilteredItems(items))
    } 

    const loadItems = (page, name, type, dimension) => {
        dispatch(fetchWithFilter(page, name, type, dimension));
    }

    const changePage = pageNumber => setCurrentPage(pageNumber);
    
    const handleName = (e) => {
        setName(e.target.value.toLowerCase());
    }
    const handleType = (e) => {
        if(e === null){
            setType(null)
            return;
        }
        setType(e.value)
    }

    const handleDimension = (e) => {
        if(e === null){
            setDimension(null)
            return;
        }
        setDimension(e.value)
    }
    console.log(locations)
    return (
        <>
            <LocationsContainer>
                <LocationsWrapper>
                    
                    {currentLocations.length > 0 ? (
                        <LocationsH1>All Locations of Rick and Morty</LocationsH1>
                    ): (
                        <LocationsH1>Here is no locations</LocationsH1>
                    )}
                    <Filters>
                        <SearchFilter value={name} onChange={handleName}/>
                        <SelectFilter  
                            text={'type'}
                            options={typeOptions}
                            onChange={handleType}
                        />
                        
                        <SelectFilter  
                            text={'dimension'}
                            options={dimensionOptions}
                            onChange={handleDimension}
                        />
                    </Filters>
                    <TableContainer>
                        {currentLocations.length > 0 && currentLocations.map(({id, name, type, dimension}) => (
                            <LocationsItem key={id}>
                                {/* <LocationName>{name}</LocationName> */}
                                <LocationTitle>{dimension}</LocationTitle>
                                <LocationDate>{type}</LocationDate>
                            </LocationsItem>
                        ))}
                        
                    </TableContainer>
                    <Pagination
                        currentPage={currentPage}
                        postsPerPage={postsPerPage}
                        totalPosts={locations.length}
                        changePage={changePage}
                    />
                </LocationsWrapper>
            </LocationsContainer>
        </>
    )
}

export default Locations;
