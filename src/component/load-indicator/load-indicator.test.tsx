import React from 'react';
import { render } from '@testing-library/react';
import LoadIndicator from './load-indicator';

describe('<LoadIndicator /> ', () => {
    it('should match the snapshot if loading', () => {
    const elementOn = render(<LoadIndicator isLoading= {true}/>);
        expect(elementOn).toMatchSnapshot();
    });

    it('should match the snapshot if not loading', () => {
        const elementOff = render(<LoadIndicator isLoading= {false}/>);
            expect(elementOff).toMatchSnapshot();
        });

  });
