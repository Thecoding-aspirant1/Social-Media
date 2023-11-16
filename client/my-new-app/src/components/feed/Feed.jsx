// feed.jsx
import { useState, useEffect } from "react";
import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post.jsx"
import axios from "axios" 

export default function Feed({username}) {
  const [post,setPost] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = username
        ? await axios.get("/post/profile/"+username)
        : await axios.get("/post/timeline/654e402adcdb6afbc4084b48");
        console.log("Response Data:", res.data); // Log the response data
        console.log("Full Response Object:", res); // Log the entire response object
        setPost(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
  
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
     
      <div className="feedWrapper">
        <Share/>
       {post.map((p)=>(

        <Post key={p._id}  post={p}/>

        ))}    
        
        

      </div>
    </div>
  );
}