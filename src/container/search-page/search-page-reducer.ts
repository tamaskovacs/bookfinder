import {
    GET_SEARCH_LIST,
    GET_SEARCH_LIST_FAIL,
    GET_SEARCH_LIST_SUCCESS,
    HANDLE_SEARCH_FIELD_UPDATE,
    OPEN_MODAL,
    CLOSE_MODAL,
    SELECT_ITEM,
    SearchPageActionTypes
} from './search-page-action-interface';
import SearchPageReducerInterface from './search-page-reducer-interface';

const defaultState: SearchPageReducerInterface = {
    filter: '',
    isFetching: false,
    isModalOpened: false,
    result: {},
    selected: -1,
    hasError: false,
};

const stateHandler = (
    oldState:SearchPageReducerInterface,
    updateState: SearchPageReducerInterface):SearchPageReducerInterface =>
        Object.assign({}, oldState, updateState);

export default function searchPageReducer(
    state:SearchPageReducerInterface = defaultState,
    action: SearchPageActionTypes
):SearchPageReducerInterface {

    switch (action.type) {
        case GET_SEARCH_LIST: {
            return stateHandler (state, {
                isFetching: true,
                result: {},
                hasError: false
            });
        }
        case GET_SEARCH_LIST_FAIL:{
            return stateHandler (state, {
                isFetching: false,
                result: {},
                isModalOpened: true,
                hasError: true
            });
        }
        case GET_SEARCH_LIST_SUCCESS: {
            return stateHandler (state, {
                isFetching: false,
                result: action.payload.data,
                hasError: false
            });
        }
        case HANDLE_SEARCH_FIELD_UPDATE:{
            return stateHandler (state, {
                filter: action.data.filter
            });
        }
        case OPEN_MODAL:
        case CLOSE_MODAL:{
            return stateHandler (state, {
                isModalOpened: action.data.isModalOpened
            });
        }
        case SELECT_ITEM:{
            return stateHandler (state, {
                selected: action.data.selected
            });
        }
        default: {
            return state;
        }
    }
};
