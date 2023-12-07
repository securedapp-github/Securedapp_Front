import React from 'react';
import { Switch } from '@headlessui/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BlogList from './BlogList';
import BlogDetail from './BlogListDetail';
import styles from'./styles/BlogContainer.module.css';


const BlogComp = () => {
  return (
    <Router>
      <div className="styles.blogContainer">
        <h1>Blog Container</h1>
        <Switch>
          <Route path="/" exact component={BlogList} />
          <Route path="/blog/:id" component={BlogDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default BlogComp;
