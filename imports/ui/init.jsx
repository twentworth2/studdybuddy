import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Router from '/imports/ui/Router';
import { renderRoutes } from '/imports/ui/Router';
import {Meteor} from 'meteor/meteor'

const App = props =>
    <BrowserRouter>
        <Router />
    </BrowserRouter>;

Meteor.startup(() => {
    render(renderRoutes(), document.getElementById('app'));
  });
