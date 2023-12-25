import React from 'react';
import { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BlogDetail from './BlogListDetail';
import Transmission from './Transmission';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import bgitemimg from "../images/blogimg.png"
import bgimg from "../images/bloghero_fpkpef.png"

const BlogComp = () => {

  const [blogList, setBlogList] = useState([]);

    useEffect(() => {
    const fetchBlogList = async() => {
      try {
        const response = await fetch('https://139-59-5-56.nip.io:3443/getBlogList');
        const data = await response.json();
        setBlogList(data);
      } catch (error) {
        console.error('Error fetching blog list:', error);
      }
    
    };

    fetchBlogList();
  }, []);

  return (

    <div style={{
      backgroundSize:'cover',
      backgroundImage:`url(${bgimg})`,
      }}>
    <Navbar/>
    <div className="styles.blogList" style={{display:'inline-block', width:'100%', marginTop:'130px',fontFamily:"TimesNewRoman",}}>
      <h2 style={{textAlign:'center',fontSize:'50px',color:'white',fontWeight:'bold',margin:'20px'}}>Blog Items List</h2>
      <ul>
        {blogList.map((blogItem) => (
          <li key={blogItem.id} className="styles.blogItem" style={{
            display:'inline-block',
            height:'300px',
            width:'450px',
            backgroundImage:`url(${blogItem.image})`,
            backgroundSize:'100% 100%',
            backgroundRepeat:'no-repeat',
            borderRadius:'20px',
            paddingLeft:'25px',
            margin:'25px',
            paddingTop:'200px',
            color:'white',
            fontSize:'15px',

          }}>
            {blogItem.date}<br></br>
            <Link to={`/blog/${blogItem.id}`} className="styles.blogLink" style={{fontSize:'25px',color:'white',}}>
              {blogItem.heading}
            </Link>

          </li>
        ))}
      </ul>
    </div>
    <Transmission />
    <Footer/>

    </div>

  );
};



export default BlogComp;
