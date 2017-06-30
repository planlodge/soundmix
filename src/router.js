import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import Navigation from './components/layouts/Navigation';
import ScrollToTop from './components/helpers/ScrollToTop';

import Home from './components/containers/Home';
import Hot from './components/containers/Hot';
import Popular from './components/containers/Popular';
import New from './components/containers/New';
import Discover from './components/containers/Discover';
import TagSearch from './components/containers/TagSearch';
import Search from './components/containers/Search';
import UserDetail from './components/containers/UserDetail';
import MixDetail from './components/containers/MixDetail';

export default (
            <Router>
                <ScrollToTop>
                    <Navigation>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/hot" component={Hot}/>
                            <Route exact path="/popular" component={Popular}/>
                            <Route exact path="/new" component={New}/>
                            <Route exact path="/discover" component={Discover}/>
                            <Route exact path="/tag/:id" component={TagSearch}/>
                            <Route exact path="/search" component={Search}/>
                            <Route exact path="/user/:id" component={UserDetail}/>
                            <Route exact path="/mix/:username/:slug" component={MixDetail}/>
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Navigation>
                </ScrollToTop>
            </Router>
);