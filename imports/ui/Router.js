import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import {Switch} from 'react-router'; 

import Home from './Pages/Home';

import PostCreate from './Pages/Posts/PostCreate';
import PostEdit from './Pages/Posts/PostEdit';
import PostList from './Pages/Posts/PostList';
import PostListReactive from './Pages/Posts/PostListReactive';

import Classes from './Pages/Classes/ClassesPage';

import Register from './Pages/Users/Register';
import Login from './Pages/Users/Login';

import { createBrowserHistory as createHistory } from 'history'

const newHistory = createHistory();

export const renderRoutes = () =>
    <BrowserRouter history={newHistory}>
        <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/posts" component={PostList} />
        <Route exact path="/posts/reactive" component={PostListReactive} />
        <Route exact path="/posts/create" component={PostCreate} />
        <Route exact path="/posts/edit/:_id" component={PostEdit} />

        <Route exact path="/classes" component={Classes} />


        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Login} />
        </Switch>
    </BrowserRouter>