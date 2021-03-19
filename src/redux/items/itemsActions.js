export const itemsTypes = {
    SET_ITEMS: 'ITEMS/SET_ITEMS',
    SET_CURRENT_ITEMS: 'ITEMS/SET_CURRENT_ITEMS',
    SET_FILTERED_ITEMS: 'ITEMS/SET_FILTERED_ITEMS',
    SET_EPISODES_ITEMS: 'EPISODES/SET_EPISODES_ITEMS',
    SET_EPISODES_CURRENT_ITEMS: 'EPISODES/SET_EPISODES_CURRENT_ITEMS',
    SET_EPISODES_FILTERED_ITEMS: 'EPISODES/SET_EPISODES_FILTERED_ITEMS',
    SET_LOCATIONS_ITEMS: 'EPISODES/SET_LOCATIONS_ITEMS',
    SET_LOCATIONS_CURRENT_ITEMS: 'EPISODES/SET_LOCATIONS_CURRENT_ITEMS',
    SET_LOCATIONS_FILTERED_ITEMS: 'EPISODES/SET_LOCATIONS_FILTERED_ITEMS',

}

export const setItems = (items) => ({
    type: itemsTypes.SET_ITEMS,
    payload: items,
});

export const setCurrentItems = (currentItems) => ({
    type: itemsTypes.SET_CURRENT_ITEMS,
    payload: currentItems,
});

export const setFilteredItems = (filteredItems) => ({
    type: itemsTypes.SET_FILTERED_ITEMS,
    payload: filteredItems,
});

export const setEpisodesItems = (items) => ({
    type: itemsTypes.SET_EPISODES_ITEMS,
    payload: items,
});

export const setEpisodesCurrentItems = (currentItems) => ({
    type: itemsTypes.SET_EPISODES_CURRENT_ITEMS,
    payload: currentItems,
});

export const setEpisodesFilteredItems = (filteredItems) => ({
    type: itemsTypes.SET_EPISODES_FILTERED_ITEMS,
    payload: filteredItems,
});

// EPISODES

export const setLocationsItems = (items) => ({
    type: itemsTypes.SET_LOCATIONS_ITEMS,
    payload: items,
});

export const setLocationsCurrentItems = (currentItems) => ({
    type: itemsTypes.SET_LOCATIONS_CURRENT_ITEMS,
    payload: currentItems,
});

export const setLocationsFilteredItems = (filteredItems) => ({
    type: itemsTypes.SET_LOCATIONS_FILTERED_ITEMS,
    payload: filteredItems,
});
