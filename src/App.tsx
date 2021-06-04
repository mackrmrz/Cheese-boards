import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Nav from './components/nav';
import Home from './components/home';
import About from './components/about-me';
import Contact from './components/contact-me';
import Blog from './components/blog';

// Photo by <a href="https://unsplash.com/@callmeed?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Erik Dungan</a> on <a href="https://unsplash.com/s/photos/cheese-boards?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
const App = () => {
  return (
    <div className='app-routes'>
      <Router>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about-me' component={About}/>
          <Route path='/contact-me' component={Contact}/>
          <Route path='/blog' component={Blog}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
