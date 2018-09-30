import React, { Component } from 'react';

import Navigation from './components/navigation/Navigation';
import Main from './components/Main'
import Footer from './components/footer/Footer'

class App extends Component {

    render() {
        if(window.location.href === "http://localhost:8080/" 
        || window.location.href === "http://localhost:8080/about" 
        || window.location.href === "http://localhost:8080/contact") {
            return (<MainPage/>);
        } else {
            return (<ProjectPage />);
        }
    }
}

function MainPage() {
    return (
        <div>
            <Navigation />
            <Main />
            <Footer />
        </div>
    );
}

function ProjectPage() {
    return (
        <div>
            <Navigation />
            <Main />
            <Footer />
        </div>
    );
}

export default App;