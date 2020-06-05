export const GET_SEARCH_LIST = 'GET_SEARCH_LIST';
export const GET_SEARCH_LIST_FAIL = 'GET_SEARCH_LIST_FAIL';
export const GET_SEARCH_LIST_SUCCESS = 'GET_SEARCH_LIST_SUCCESS';
export const HANDLE_SEARCH_FIELD_UPDATE = 'HANDLE_SEARCH_FIELD_UPDATE';
export const OPEN_MODAL ='OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SELECT_ITEM = 'SELECT_ITEM';

export interface GetSearchListAction {
    type: typeof GET_SEARCH_LIST;
    data: {
        filterData:string;
    };
    payload: {
        request: {
            method: string,
            url: string
        }
    };
};

export interface HandleSearchFieldUpdateAction {
    type: typeof HANDLE_SEARCH_FIELD_UPDATE;
    data: {
        filter:string;
    };
};

export interface OpenModalAction {
    type: typeof OPEN_MODAL;
    data: {
        isModalOpened: boolean;
    };
};

export interface CloseModalAction {
    type: typeof CLOSE_MODAL;
    data: {
        isModalOpened: boolean;
    };
};

export interface SelectItemAction {
    type: typeof SELECT_ITEM;
    data: {
        selected: number;
    },
};
export interface GetSearchListSuccessAction {
    type: typeof GET_SEARCH_LIST_SUCCESS;
    payload: {
        data: any;
    },
};
export interface GetSearchListFailAction {
    type: typeof GET_SEARCH_LIST_FAIL;
};
export type SearchPageActionTypes =
    HandleSearchFieldUpdateAction |
    GetSearchListAction |
    OpenModalAction |
    CloseModalAction |
    SelectItemAction |
    GetSearchListSuccessAction |
    GetSearchListFailAction;
