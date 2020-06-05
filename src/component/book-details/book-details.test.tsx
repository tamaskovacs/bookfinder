import React from 'react';
import { render } from '@testing-library/react';
import BookDetails from './book-details';

describe('<BookDetails /> ', () => {
    it('should match the snapshot if has bookdata', () => {
        const bookData = {
            title: 'test title',
            author_name: 'author name',
            publish_date: ['2222 jan 1', '3333 dec 12'],
            publisher: ['any publisher', 'other publisher'],
            subject: ['any subject', 'other subject']
        };

        const elementFilled = render(<BookDetails data={bookData} />);
        expect(elementFilled).toMatchSnapshot();
    });

    it('should match the snapshot has not bookdata', () => {
        const bookData = {
            title: '',
            author_name: '',
            publish_date: [],
            publisher: [],
            subject: []
        };
        const elementUnFilled = render(<BookDetails data={bookData} />);
        expect(elementUnFilled).toMatchSnapshot();
    });

});

