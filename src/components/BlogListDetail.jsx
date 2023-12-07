import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles/BlogDetails.module.css';

const BlogDetails = () => {
  const { id } = useParams();
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(``);
        const data = await response.json();
        setSelectedBlog(data);
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    };

    fetchBlogDetails();
  }, [id]);

  return (
    <div className="styles.blogDetails">
      <h2>Blog Details</h2>
      {selectedBlog && (
        <div className="styles.blogContent">
          <h3 className="blog-title">{selectedBlog.title}</h3>
          <p className="blog-text">{selectedBlog.content}</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;