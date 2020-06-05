import { composeWithDevTools } from 'redux-devtools-extension';
import {
    applyMiddleware,
    combineReducers,
    createStore
} from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import {
    mainReducer
} from '../../reducer';
import axios from 'axios';
import config from '../../config/config-common.json';

export default {

    getStore(middleware = {}, reducers = {}) {
        const reducer = combineReducers({
            ...mainReducer,
            ...reducers,
        });

        const endPoints = config.endpoints;

        const client = axios.create({
            baseURL: endPoints.api,
            responseType: 'json'
        });

        const options = {
            returnRejectedPromiseOnError: true,
            interceptors: {}
        };

        const usedMiddleware = [
            thunk,
            // ...middleware,
            axiosMiddleware(client, options)
        ];

        return createStore(
            reducer,
            composeWithDevTools(
                applyMiddleware(
                    ...usedMiddleware
                )
            )
        );
    }
};
