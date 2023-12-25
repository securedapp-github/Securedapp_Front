import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarWithBread from "./NavWithBread";
import AboutUsHero from "./AboutUsHero";
import MeettheTeam from "./MeettheTeam";
import Footer from "./Footer";
import FooterInAbout from "./FooterInAbout";
import TransmissionInAbout from "./TransmissonInAbout";
import Transmission from "./Transmission";
import {Helmet} from "react-helmet";
import BlogDetails from "./BlogListDetail";


const AboutComp = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  return (
    <>
     <Helmet>
            <title>About SecureDApp: Pioneering the Future of DeFi with Expertise & Innovation</title>
            <meta name="description" content="Discover SecureDApp, a leading DeFi ecosystem with a focus on blockchain security. From a token launchpad to an NFT marketplace and DAO community, SecureDApp offers a range of services backed by a team of experts. Dive into our mission, values, and meet the team behind our success." />
        </Helmet> 
      <NavbarWithBread onItemClick={handleMenuItemClick} /> 
      <AboutUsHero /> 
      <MeettheTeam />
      <Transmission />
      <FooterInAbout />
    </>
  );
  // const [blogList, setBlogList] = useState([]);
  // const hardcodedBlogItems = [
  //   { id: 1, title: 'abc', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  //   { id: 2, title: 'def', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  //   { id: 3, title: 'hij', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
  //   { id: 4, title: 'klm', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.' },
  //   { id: 5, title: 'nop', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.' },
  //   { id: 6, title: 'qr', content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.' },
  //   { id: 7, title: 'st', content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.' },
  //   { id: 8, title: 'uv', content: 'Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.' },
  //   { id: 9, title: 'wx', content: 'Magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum.' },
  //   { id: 10, title: 'yz', content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.' },
  // ];

  // return (
  //   <>
    {/* <NavbarWithBread onItemClick={handleMenuItemClick} />  */}
//     <div className="styles.blogList" style={BlogListStyle}>
//       <h2>Blog Items List</h2>
//       <ul>
//         {/* {blogList.map((blogItem) => ( */}
//         {hardcodedBlogItems.map((blogItem) => (
//           <li key={blogItem.id} className="styles.blogItem" style={BlogListItemStyle}>
//             <Link to={`/blog/${blogItem.id}`} className="styles.blogLink" style={BlogListLinkStyle}>
//               {blogItem.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//     <Transmission />
//     <FooterInAbout />
//     </>
//   );
// };
//const BlogListStyle={
//   display:'inline-block',
//   backgroundColor:'black',

// }
// const BlogListItemStyle={
//   display:'inline-block',
//   height:'200px',
//   width:'200px',
//   border:'2px solid black ',
//   backgroundColor:'white',
//   BorderRadius:'10px',

// }
// const BlogListLinkStyle={

// }
  }
export default AboutComp;
