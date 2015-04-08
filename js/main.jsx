require("babel/register");
var App = require('./App.jsx');
var React = require('react/addons');

React.render(<App />, document.getElementById('wrapper'));