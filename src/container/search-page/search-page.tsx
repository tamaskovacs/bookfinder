import React from 'react';
import SearchForm from '../../component/search-form/search-form';
import SearchResult from '../../component/search-result/search-result';
import LoadIndicator from '../../component/load-indicator/load-indicator';
import BookDetails from '../../component/book-details/book-details';
import Modal from '../../component/modal/modal';
import { useSelector, useDispatch } from 'react-redux';
import { handleSearchFieldUpdate, handleSubmit, handleSelect, handleClose } from './util/map-dispatch';
import { getState } from './util/map-state';
import './search-page.css';

export default function SearchPage() {

    const dispatch = useDispatch();
    const {
        filter = '',
        isFetching = false,
        isModalOpened = false,
        result = {},
        selected = -1,
        hasError = false
    } = getState(useSelector, 'data');

    const selectedItem = selected >= 0 ?
        result.docs[selected] :
        null;

    return (
        <>
            <div className="layout">
                <header className="search-header">
                    <SearchForm
                        updateHandler={
                            (value: string) => handleSearchFieldUpdate(value, dispatch)
                        }

                        searchHandler={
                            (event: any) => handleSubmit(event, filter, dispatch)
                        }
                    />
                </header>
                <div className="search-result-area">
                    <SearchResult
                        rowData={result.docs}
                        selectionHandler={
                            (elementId: number) => {
                                handleSelect(elementId, dispatch)
                            }
                        }
                    />
                </div>
            </div>

            <LoadIndicator isLoading={isFetching} />
            <Modal
                title="Book details"
                isOpen={!hasError && isModalOpened}
                closeHandler={
                    () => handleClose(dispatch)
                }
                child={(
                    <BookDetails data={selectedItem} />
                )}
            />
            <Modal
                title="Error"
                isOpen={hasError && isModalOpened}
                closeHandler={
                    () => handleClose(dispatch)
                }

                child={(
                    <div className="error-text">Error happened, please try again!</div>
                )}
            />
        </>
    );
}
