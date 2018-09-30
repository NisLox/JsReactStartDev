import React from 'react'
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project1 from './pages/projects/Project1/Project1';
import Project2 from './pages/projects/Project2';
import Project3 from './pages/projects/Project3';
import Project4 from './pages/projects/Project4';
import Project5 from './pages/projects/Project5';
import Project6 from './pages/projects/Project6';

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/project1' component={Project1}></Route>
        <Route exact path='/project2' component={Project2}></Route>
        <Route exact path='/project3' component={Project3}></Route>
        <Route exact path='/project4' component={Project4}></Route>
        <Route exact path='/project5' component={Project5}></Route>
        <Route exact path='/project6' component={Project6}></Route>
    </Switch>
    );

export default Main