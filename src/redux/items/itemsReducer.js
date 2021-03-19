import {combineReducers} from 'redux';
import {itemsTypes} from './itemsActions';

const characters = (state = { items: [], currentItems: []}, {type, payload}) => {
    switch(type){
        case itemsTypes.SET_ITEMS:
            return {...state, items: [...state.items, ...payload]};

        case itemsTypes.SET_CURRENT_ITEMS:
            return {...state, currentItems: payload};

        case itemsTypes.SET_FILTERED_ITEMS:
            return {...state, items: [...payload]};

        default:
            return state;
    }
};

const episodes = (state = { items: [], currentItems: []}, {type, payload}) => {
    switch(type){
        case itemsTypes.SET_EPISODES_ITEMS:
            return {...state, items: [...state.items, ...payload]};

        case itemsTypes.SET_EPISODES_CURRENT_ITEMS:
            return {...state, currentItems: payload};

        case itemsTypes.SET_EPISODES_FILTERED_ITEMS:
            return {...state, items: [...payload]};

        default:
            return state;
    }
};

const locations = (state = { items: [], currentItems: []}, {type, payload}) => {
    switch(type){
        case itemsTypes.SET_LOCATIONS_ITEMS:
            return {...state, items: [...state.items, ...payload]};

        case itemsTypes.SET_LOCATIONS_CURRENT_ITEMS:
            return {...state, currentItems: payload};

        case itemsTypes.SET_LOCATIONS_FILTERED_ITEMS:
            return {...state, items: [...payload]};

        default:
            return state;
    }
};

export default combineReducers({
    characters,
    episodes,
    locations,
});
