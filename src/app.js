import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetImages } from './actions/images';
import { setTextFilter } from './actions/filters';
import getVisibleImages from './selectors/images'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Spinner from './components/ui/Spinner';

import './firebase/firebase';


const store = configureStore();



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
   
)

ReactDOM.render(<Spinner />, document.getElementById('app'));

store.dispatch(startSetImages()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});


