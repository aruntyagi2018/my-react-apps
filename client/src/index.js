import React from 'react';
import ReactDOM from 'react-dom';
import  {BrowserRouter as Router,Route} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Favourites from './components/favourites';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component= {App} />
            <Route path="/favourites" component = {Favourites} />
        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
