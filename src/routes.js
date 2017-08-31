import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import Search from './containers/Search';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="search" component={Search}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);
