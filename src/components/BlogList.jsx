import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from'./styles/BlogList.module.css';

const BlogList = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    const fetchBlogList = async () => {
      try {
        const response = await fetch('');
        const data = await response.json();
        setBlogList(data);
      } catch (error) {
        console.error('Error fetching blog list:', error);
      }
    };

    fetchBlogList();
  }, []);

  return (
    <div className="styles.blogList">
      <h2>Blog Items List</h2>
      <ul>
        {blogList.map((blogItem) => (
          <li key={blogItem.id} className="styles.blogItem">
            <Link to={`/blog/${blogItem.id}`} className="styles.blogLink">
              {blogItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BlogList;