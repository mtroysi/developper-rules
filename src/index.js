import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store/app-store';
import { Provider } from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Layout from './Layout';

/*const reactElement = React.createElement('div', null, 'Hello World');
const domElement = document.getElementById('root');
ReactDOM.render(reactElement, domElement);*/

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={Layout} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
