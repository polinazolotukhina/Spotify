import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './containers/HomePage';
import Search from './containers/Search';
import NewRelease from './containers/NewRelease';
import Login from './containers/Login';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="search" component={Search}/>
        <Route path="new-release" component={NewRelease}/>
        <Route path="login" component={Login}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);
