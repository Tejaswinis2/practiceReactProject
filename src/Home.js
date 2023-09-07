import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
     const[blogs, setBlogs]=useState([
        {title:'My application',body:'this app is regarding AI',author:'openAI',id:1},
        {title:'My application',body:'this app is regarding Android',author:'Android',id:2},
        {title:'My application',body:'this app is regarding AR',author:'openAI',id:3}
     ])
           return ( 
            <div className="home">
            {/* {blogs.map(blog=>(
               <div className='blog-preview' key={blog.id}>
                <h2>{blog.title}</h2>
                <p>blog by {blog.author}</p></div>

             ))} */}
             <BlogList blogs={blogs}title='All blogs'/>
        </div>
    );
}
 
 export default Home;
