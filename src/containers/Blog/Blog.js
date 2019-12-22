import React, { Component } from 'react';
// import axios from 'axios'
import { Route, Link } from 'react-router-dom';

import Posts from "../Blog/Posts/Posts";
import NewPost from "../Blog/NewPost/NewPost";
import './Blog.module.css';

class Blog extends Component {



    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: "/new-post",
                                hash: '#submit',
                                search: '?quick-submit=true'}}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route
                    path="/"
                    render={() => <h1>Home</h1>}
                    exact />
                <Route
                    path="/"
                render={() => <h1>Home</h1>}/>*/}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />
            </div>
        );
    }
}

export default Blog;