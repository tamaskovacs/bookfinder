import React from 'react';
import { render } from '@testing-library/react';
import Overlay from './overlay';

describe('<Overlay /> ', () => {
    it('should match the snapshot', () => {

        const element = render(<Overlay
            child={(
                <div>hello</div>
            )}
        />);

        expect(element).toMatchSnapshot();
    });
});
