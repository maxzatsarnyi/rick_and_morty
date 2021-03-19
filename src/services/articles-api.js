import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3030';

// const apiUrl = `https://rickandmortyapi.com/api/character/`;


export const fetchCharacters = (page = 1, setCharacters) => {    
  return axios.get(`https://rickandmortyapi.com/api/character?page=${page}`).then((responde) => {
    const allCharacters = responde.data;
    setCharacters(allCharacters);
    })};


export const fetchItems = async (currentPage) => {
      // setIsLoading(true);
      const res = await axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
      // setCharacters(res.data.results);
      // setIsLoading(false);
  };
