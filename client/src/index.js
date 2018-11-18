import React from 'react';
import ReactDOM from 'react-dom';
import  {BrowserRouter as Router,Route} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Favourites from './components/favourites';
import Home from './components/home';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component= {App} />
            <Route path="/home" component = {Home} />
            <Route path="/favourites" component = {Favourites} />
        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
