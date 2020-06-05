import React from 'react';
import { render } from '@testing-library/react';
import SearchForm from './search-form';

describe('<SearchForm /> ', () => {
    it('should match the snapshot', () => {

        const element = render(<SearchForm
            searchHandler={() => jest.fn()}
            updateHandler={() => jest.fn()}
        />);

        expect(element).toMatchSnapshot();
    });

});
