import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Transmission from './Transmission';
import Footer from './Footer';
import Navbar from './Navbar';
import bgimg from "../images/bloghero_fpkpef.png"
import bgitemimg from "../images/blogimg.png"


const BlogDetails = () => {
  const { id } = useParams();
  const [selectedBlog, setSelectedBlog] = useState();

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(`https://139-59-5-56.nip.io:3443/getBlog?id=${id}`);
        const data = await response.json();
        setSelectedBlog(data);
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    };

    fetchBlogDetails();
  }, [id]);



  return (
    <div style={{backgroundImage:`url(${bgimg})`,backgroundSize:'cover'}}>
      <Navbar/>
      <div className="styles.blogDetails" style={{ 
                                              display:'inline-block',
                                              color:'white',
                                              marginTop:'130px',
                                              width:'100%',
                                              fontFamily:"TimesNewRoman",
      }}>

    <img src={bgitemimg} alt='' style={{height:'400px',width:'60%',margin:'70px',marginLeft:'300px'}} />

    <h2 style={{fontSize:'80px',fontWeight:'bolder',textAlign:'center',marginTop:'50px'}}>Blog Details</h2>

    {/* {selectedBlog && (
      <div className="styles.blogContent" style={{margin:'100px'}}>

        <h3 style={{
                  fontSize:'30px',
                  color:'red',
                  marginBottom:'10px'}}> 
        {selectedBlog.date}
        </h3>

        <h3 className="blog-title" 
            style={{
                  fontSize:'50px',
                  fontWeight:'bold',
                  marginBottom:'20px'
        }}>
           {selectedBlog.heading}
        </h3>
        <p style={{ 
                 fontSize: '20px', 
                 textAlign: 'justify', 
        }}>
          {selectedBlog.content}
        </p>
        <br></br>
      </div>

    )}   */}



      </div>
  <Transmission/>
  <Footer/>
  </div>
  
    );
};


export default BlogDetails;