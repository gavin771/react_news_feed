import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Link } from 'react-router-dom'
import App from './App';
import Posts from './components/Posts'
import SinglePost from './components/SinglePost'
import Profile from './components/Profile'

ReactDOM.render(
    <div>
        <BrowserRouter>
            <div>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/posts">Posts</Link>
                    <Link to="/profile">Profile</Link>
                </div>
                <div>
                    <Route exact path='/' component={App}></Route>
                    <Route exact path='/posts' component={Posts}></Route>
                    <Route path='/posts/:id' component={SinglePost}></Route>
                    <Route path='/profile' component={Profile}></Route>
                </div>
            </div>
        </BrowserRouter>
        <hr />
    </div>,
    document.getElementById('root'));
registerServiceWorker();
