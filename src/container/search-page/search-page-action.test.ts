import * as actions from './search-page-action';
import * as types from './search-page-action-interface';

describe('actions', () => {
    it('should create an action to get a search list', () => {
        const text: string = 'Pillars of the';
        const query: string = text.replace(' ', '+');
        const expectedAction: types.GetSearchListAction = {
            type: types.GET_SEARCH_LIST,
            data: {
                filterData: text
            },
            payload: {
                request: {
                    method: 'GET',
                    url: `search.json?q=${query}`
                }
            }
        };

        const actualAction = actions.getSearchList(text);
        expect(actualAction).toEqual(expectedAction)
    });

    it('should create an action to close a modal', () => {
        const expectedAction: types.CloseModalAction = {
            type: types.CLOSE_MODAL,
            data: {
                isModalOpened: false
            },
        };

        const actualAction = actions.closeModal();
        expect(actualAction).toEqual(expectedAction)
    });

    it('should create an action to open a modal', () => {
        const expectedAction: types.OpenModalAction = {
            type: types.OPEN_MODAL,
            data: {
                isModalOpened: true
            },
        };

        const actualAction = actions.openModal();
        expect(actualAction).toEqual(expectedAction);
    });

    it('should create an action to select a book item id', () => {
        const selectedItemId = 3;
        const expectedAction: types.SelectItemAction = {
            type: types.SELECT_ITEM,
            data: {
                selected: selectedItemId
            },
        };

        const actualAction = actions.selectItem(selectedItemId);
        expect(actualAction).toEqual(expectedAction);
    });

    it('should create an action to handle the search field update', () => {

        const text: string = 'Pillars of the';
        const expectedAction: types.HandleSearchFieldUpdateAction = {
            type: types.HANDLE_SEARCH_FIELD_UPDATE,
            data: {
                filter: text
            }
        };

        const actualAction = actions.handleSearchFieldUpdate(text);
        expect(actualAction).toEqual(expectedAction);
    });
})
