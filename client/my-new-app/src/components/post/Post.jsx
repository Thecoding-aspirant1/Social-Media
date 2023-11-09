import "./post.css"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Users} from "../../dummyData"



export default function Post({post}) {
  
  const [like,setLike] = useState(post.like)
  const [isLiked,setisLiked] = useState(false)
   
  const likeHandler =()=>{
    setLike(isLiked ? like-1 :like+1)
    setisLiked(!isLiked)
  }
  
  const user = Users.filter(u=>u.id==1)
  
  console.log(user[0].username);

  return (
    <div className="post">
    <div className="postWrapping">
        <div className="postTop">
            <div className="postTopLeft">
            <img src={Users.filter((u)=>u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg"/>    
            
            <span className="postUsername">
              {Users.filter((u)=>u.id === post.userId)[0].username}
              </span>

            <span className="postDate">{post.date}</span>
           
            </div>
            <div className="postTopRight">
                <i><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" className="threeDots" /></i>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img src={post.photo} alt="" className="postImg" height={700} width={700}/><br/>
        </div>

        <div className="postBottom">
            <div className="postBottomLeft">

             <img className="likeIcon" src="/assets/like.png" onClick={likeHandler} alt=""  />
             <img  className="likeIcon" src="/assets/heart.png" onClick={likeHandler} alt=""   />
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
