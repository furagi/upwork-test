import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import { readPosts } from './redux/actionCreators';

class App extends Component {
  componentWillMount() {
    this.props.readPosts(0, 12, 'date', 'asc');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {this.renderMain()}
        </div>
      </div>
    );
  }

  renderMain() {
    const { loading, error, page } = this.props;
    if (loading) {
      return 'Loading...';
    } else if (error) {
      return `Error: ${error.message || error}`;
    }
    const posts = page._embedded && page._embedded.posts instanceof Array ? page._embedded.posts : [];
    return (
      <div>
        <p>
          Page: {page.page};
        </p>
        <ul>
          {
            posts.map(function(post, i) {
              return (
                <li key={i}>
                  <p>Posted: {post.date}</p>
                  <p>{post.message}</p>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = {
  readPosts
};

function mapStateToProps({ posts }) {
  const { page, loading, error } = posts;
  console.log(posts);
  return { page,loading, error };
}

const AppWrapped = connect(mapStateToProps, mapDispatchToProps)(App);
export { AppWrapped as App };
