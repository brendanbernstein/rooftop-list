import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Components/Global/Menu.jsx';
import FilterClassTable from './Components/Home/Filterable_Table.jsx';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

var App = React.createClass({
  render: function() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={FilterClassTable}>
        </Route>
      </Router>
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);