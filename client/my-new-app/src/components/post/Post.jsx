import { useState, useEffect } from "react";
import "./post.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from "axios"
import {format} from "timeago.js"
import {Link} from "react-router-dom"


export default function Post({post}) {
  
  const [like,setLike] = useState(post.likes.length);
  const [isLiked,setisLiked] = useState(false);
  const [user,setUser] = useState({});
  
  const PF = process.env.REACT_APP_PUBLIC_FOLDER; 


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`users/${post.userId}`);
        console.log("Response Data:", res.data); // Log the response data
        console.log("Full Response Object:", res); // Log the entire response object
        setUser(res.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
  

    fetchUser();
  }, [post.userId]);


  const likeHandler =()=>{
    setLike(isLiked ? like-1 :like+1)
    setisLiked(!isLiked)
  }
  
  
  
   console.log(user.username);

  return (
    <div className="post">
    <div className="postWrapping">
        <div className="postTop">
            <div className="postTopLeft">

              <Link to={`profile/${user.username}`}>
            <img src={user.profilePicture || PF+"person/noavataar.png"} alt="" className="postProfileImg"/>    
            </Link>

            

           <span className="postUsername">
              {user.username}
              </span>    

            <span className="postDate">{format(post.createdAt)}</span>
           
            </div>
            <div className="postTopRight">
                <i><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" className="threeDots" /></i>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img src={PF+post.img} alt="" className="postImg" height={700} width={700}/><br/>
        </div>

        <div className="postBottom">
            <div className="postBottomLeft">

             <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt=""  />
             <img  className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt=""   />
             <span className="postLikeCounter">liked by {like} people</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">{post.comment} Comments</span>
            </div>
        </div>
    </div>
    </div>
  )
}
