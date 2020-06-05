import './search-result.css';
import React from 'react';
import noImage from '../../assets/images/no-image.jpg';
import SearchResultInterface, { SearchRowInterface } from './search-result-interface';

export default function SearchResult(props: SearchResultInterface) {
    const bookRowData = props.rowData;
    return (
        <>
            <div className="table">
                {bookRowData && bookRowData.map((element: SearchRowInterface, index: number) => {
                    const coverKey = element.cover_edition_key;
                    const coverUrl = coverKey ?
                        `http://covers.openlibrary.org/b/olid/${coverKey}-M.jpg` :
                        noImage;
                    return (
                        <div key={`row-${index}`} className="row">
                            <div className="cover-cell">
                                <img className="cover" src={coverUrl} alt={element.title} />
                            </div>
                            <div className="cell">
                                <div className="author-cell">
                                    {element.author_name}
                                </div>
                                <div className="title-cell">
                                    {element.title}
                                </div>
                            </div>
                            <div className="button-cell">
                                <button
                                    onClick={() => props.selectionHandler(index)}
                                >
                                    Details
                            </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}
