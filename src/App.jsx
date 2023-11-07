// App.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About';
import Project from './pages/Project';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <nav>
        <NavLink to="/" activeClassName="active" exact>
          Home
        </NavLink>
        <NavLink to="/service" activeClassName="active">
          Service
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/project" activeClassName="active">
          Project
        </NavLink>
        <NavLink to="/blog" activeClassName="active">
          Blog
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/service" component={Service} />
      <Route path="/about" component={About} />
      <Route path="/project" component={Project} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
};

export default App;
