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

import FullFeed from './components/containers/FullFeed';
import FullCloudCasts from './components/containers/FullCloudCasts';
import FullFollowers from './components/containers/FullFollowers';
import FullFollowing from './components/containers/FullFollowing';
import FullFavorites from './components/containers/FullFavorites';
import ListensList from './components/containers/ListensList';

import MixFavorites from './components/containers/MixData/MixFavorites';
import MixListens from './components/containers/MixData/MixListens';

import YourHood from './components/containers/YourHood';

import NotFound from './components/containers/NotFound';

export default (
            <Router>
                <ScrollToTop>
                    <Navigation>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/hot" component={Hot}/>
                            <Route exact path="/popular" component={Popular}/>
                            <Route exact path="/new" component={New}/>
                            <Route exact path="/search" component={Search}/>
                            <Route exact path="/discover" component={Discover}/>
                            <Route exact path="/city/:id" component={YourHood}/>
                            <Route exact path="/city" component={YourHood}/>
                            <Route exact path="/tag/:id" component={TagSearch}/>
                            <Route exact path="/user/:id" component={UserDetail}/>
                            <Route exact path="/feed/:id" component={FullFeed}/>
                            <Route exact path="/favorites/:id" component={FullFavorites}/>
                            <Route exact path="/mix/:user/:id/favorites/" component={MixFavorites}/>
                            <Route exact path="/mix/:user/:id/listens/" component={MixListens}/>
                            <Route exact path="/followers/:id" component={FullFollowers}/>
                            <Route exact path="/following/:id" component={FullFollowing}/>
                            <Route exact path="/listens/:id" component={ListensList}/>
                            <Route exact path="/cloudcasts/:id" component={FullCloudCasts}/>
                            <Route exact path="/mix/:username/:slug" component={MixDetail}/>
                            <Route path="/error" component={NotFound} />
                            <Redirect from="*" to="/error" />
                        </Switch>
                    </Navigation>
                </ScrollToTop>
            </Router>
);