import {
    GET_SEARCH_LIST,
    HANDLE_SEARCH_FIELD_UPDATE,
    OPEN_MODAL,
    CLOSE_MODAL,
    SELECT_ITEM,
    CloseModalAction,
    GetSearchListAction,
    HandleSearchFieldUpdateAction,
    OpenModalAction,
    SelectItemAction,
} from './search-page-action-interface';

export const getSearchList = (filterData: string = ''): GetSearchListAction => {
    const query = filterData.replace(' ', '+');
    return {
        type: GET_SEARCH_LIST,
        data: {
            filterData
        },
        payload: {
            request: {
                method: 'GET',
                url: `search.json?q=${query}`
            }
        }
    }
};

export const handleSearchFieldUpdate = (filter:string = ''): HandleSearchFieldUpdateAction =>({
    type: HANDLE_SEARCH_FIELD_UPDATE,
    data: {
        filter
    },
});

export const openModal = (): OpenModalAction =>({
    type: OPEN_MODAL,
    data: {
        isModalOpened: true
    },
});

export const closeModal = (): CloseModalAction =>({
    type: CLOSE_MODAL,
    data: {
        isModalOpened: false
    },
});

export const selectItem = (selected:number = -1): SelectItemAction =>({
    type: SELECT_ITEM,
    data: {
        selected: selected
    },
});
