import * as searchPageAction from '../search-page-action';
import { FormEvent } from 'react';

export const handleSearchFieldUpdate = (value:string, dispatch: any) => {
    dispatch(searchPageAction.handleSearchFieldUpdate(value));
}

export const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
    value:string,
    dispatch: any
) => {
    event.preventDefault();
    dispatch(searchPageAction.getSearchList(value));
}

export const handleSelect = (selected:number, dispatch: any) => {
    dispatch(searchPageAction.selectItem(selected));
    dispatch(searchPageAction.openModal());
}
export const handleClose = (dispatch: any) => {

    dispatch(searchPageAction.selectItem(-1));
    dispatch(searchPageAction.closeModal());
}
