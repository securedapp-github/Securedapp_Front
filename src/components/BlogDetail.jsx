import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from './Constants/Blogs';
import bgImage from '../images/bloghero_fpkpef.png'

const BlogDetail = () => {
  const { id } = useParams();
 
  const blog = blogs.find((blog) => blog.id === Number(id));

  const pageStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '20px',
    borderRadius: '15px',
    margin: '20px'
  }

  return blog ? (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1 className="text-2xl font-bold">{blog.title}</h1>
        <p className="text-sm font-light">{blog.date}</p>
        <p className="mt-2 text-lg font-bold">{blog.topic}</p>
        <p className="mt-2 text-lg font-bold">{blog.content}</p>
      </div>
    </div>
  ) : (
    <div>Blog post not found</div>
  );
};

export default BlogDetail;
