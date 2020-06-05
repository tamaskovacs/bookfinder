import React from 'react';
import { render } from '@testing-library/react';
import Modal from './modal';

describe('<Modal /> ', () => {
    it('should match the snapshot if open', () => {

        const elementOn = render(<Modal
            isOpen= {true}
            child={(
                <div>hello</div>
            )}
            title="Some title"
            closeHandler = {()=>jest.fn()}
        />);

        expect(elementOn).toMatchSnapshot();
    });

    it('should match the snapshot if closed', () => {
        const elementOff = render(<Modal
            isOpen= {true}
            child={(
                <div>hello</div>
            )}
            title="Some title"
            closeHandler = {()=>jest.fn()}
        />);
            expect(elementOff).toMatchSnapshot();
        });

  });
