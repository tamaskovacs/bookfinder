import './book-details.css';
import React from 'react';
import BookDetailsInterface from './book-details-interface';

export default function BookDetails(props:BookDetailsInterface) {
    const bookData = props.data;

    return (
      <>
        <div className="table">

            <div className="book-row">
                <div className="param-cell">
                    Title
                </div>
                <div className="book-cell">
                    {bookData.title}
                </div>
            </div>
            <div className="book-row">
                <div className="param-cell">
                    Author
                </div>
                <div className="book-cell">
                    {bookData.author_name}
                </div>
            </div>
            <div className="book-row">
                <div className="param-cell">
                    Publish date
                </div>
                <div className="book-cell">
                    {bookData.publish_date && bookData.publish_date.join(', ')}
                </div>
            </div>
            <div className="book-row">
                <div className="param-cell">
                    Publisher
                </div>
                <div className="book-cell">
                    {bookData.publisher && bookData.publisher.join(', ')}
                </div>
            </div>
            <div id="book-row-1" className="book-row">
                <div className="param-cell">
                    Subject
                </div>
                <div className="book-cell">
                    {bookData.subject && bookData.subject.join(', ')}
                </div>
            </div>

        </div>
      </>
    );
  }
