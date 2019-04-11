
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

/**
 * Forms Component
 */

import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider} from 'react-redux'

const rootReducer = combineReducers({
  form: formReducer,
  // my other reducers come here
});

const store = createStore(rootReducer);

/**
 * FontAwesome Inclusion
 */

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSignOutAlt, faPlus, faInfoCircle, faPen, faTrash, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faSignOutAlt, faPlus, faInfoCircle, faPen, faTrash, faArrowLeft)

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//require('./components/Example');
import Master from './components/Master';
import CreateBook from './components/CreateBook';
import DisplayBook from './components/DisplayBook';
import UpdateBook from './components/UpdateBook';
import ListBook from './components/ListBook';
import LoginBook from './components/LoginBook';

render(
  <Router history={browserHistory}>
      <Route path="/" component={Master} >
        <IndexRoute component={LoginBook} />
        <Route path="/add-item" component={CreateBook} />
        <Route path="/display-item" component={DisplayBook} />
        <Route path="/edit/:id" component={UpdateBook} />
      </Route>
  </Router>,
  document.getElementById('crud-app')
);
