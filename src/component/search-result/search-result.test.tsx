import React from 'react';
import { render } from '@testing-library/react';
import SearchResult from './search-result';

describe('<SearchResult /> ', () => {
    it('should match the snapshot if has result', () => {
        const rowData = [{
            title: 'test title',
            cover_edition_key: '12345',
            author_name: 'test author',

        },{
            title: 'test title2 ',
            cover_edition_key: '12345 22',
            author_name: 'test author 2',

        }];

        const elementFilled = render(<SearchResult
            rowData={rowData}
            selectionHandler={()=>jest.fn()}
        />);
        expect(elementFilled).toMatchSnapshot();
    });

    it('should match the snapshot if has no result', () => {
        const rowData:Array<any> = [];

        const elementEmpty = render(<SearchResult
            rowData={rowData}
            selectionHandler={()=>jest.fn()}
        />);
        expect(elementEmpty).toMatchSnapshot();
    });
});
