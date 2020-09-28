import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import AppReducer from './reducers';
import Root from './navigation/root';
import './assets/styles/index.css';


const store = createStore(AppReducer);
const persistor = persistStore(store)

render(<Root store={store} persistor={persistor}/>, document.getElementById('root'));
