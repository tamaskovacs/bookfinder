import { path } from 'ramda';

interface RootState {
    data: {
        filter: string;
        result: Array<object>;
    }
};

export const getState = (selectorHook: Function, selector: string) =>
    selectorHook((state: RootState) => path(selector.split('.'), state ));
