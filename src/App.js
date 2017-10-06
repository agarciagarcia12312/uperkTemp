import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link, Switch
} from 'react-router-dom';

import Layout from './components/route/Layout';
import HomePage from './components/home/HomePage';
import RefreshmentPage from './components/refreshment/RefreshmentPage';
import BlogPage from './components/blog/blogPage';
import LoginPage from './components/auth/LoginPage';
import Navbar from './components/route/Navigation';

import indexCss from './css/index.css';


const NoMatch = ({ xs }) => (
	<div>page not found</div>
	)

const App = () => (
  <Router className={indexCss}>
  	<div>
  		<Navbar/>
	  	<Switch className="body">
		    <Route path="/" exact component={Layout}/>
		    <Route path="/refreshment" component={RefreshmentPage}/>
		    <Route path="/blog" component={BlogPage}/>
		    <Route path="/auth" component={LoginPage}/>
		    <Route component={NoMatch}/>
	    </Switch>
	</div>    
  </Router>
)

export default App;
