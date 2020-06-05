import React from 'react';
import './app.css';
import { Provider } from 'react-redux';
import StoreHandler from './lib/store/store-handler';
import SearchPage from './container/search-page/search-page';

function App() {
    const store = StoreHandler.getStore();
    return (
        <Provider store={store}>
            <div className="app">
                  <header className="app-header">
                      <p>
                        Book finder
                      </p>
                  </header>
                  <div>
                      <SearchPage />
                  </div>
            </div>
        </Provider>
    );
}

export default App;
